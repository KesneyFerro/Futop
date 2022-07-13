/* eslint-disable require-jsdoc */
import { connectToDatabase } from "../../lib/dbConnect";
// import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import nextCors from "nextjs-cors";
export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const token = req.body.token;
  const rt = process.env.NEXT_PUBLIC_DBTOKEN;
  await nextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  const session = req.body.session;
  const secret = process.env.JWT_SECRET;

  //   const token = req.body.token;
  // console.log(token);
  //   const rt = process.env.NEXT_PUBLIC_DBTOKEN;
  // const session = await getSession({ req });
  // console.log(`Session Info: ${session}`);

  //   if (token != rt) {
  //     return res.status(200).send({
  //       status: "Unauthorized",
  //       user: null,
  //     });
  //   }
  if (!session) {
    return res.status(200).send({
      status: "Unauthorized",
      user: null,
    });
  }
  if (token != rt) {
    return res.status(200).send({
      status: "Unauthorized",
      user: null,
    });
  }

  const token2 = await getToken({ req, secret });
  if (token2 == null) {
    return res.status(200).send({
      status: "Unauthorized",
      user: null,
    });
  }
  if (token2.email != session.user.email) {
    return res.status(200).send({
      status: "Unauthorized",
      user: null,
    });
  }

  if (req.method === "POST") {
    const user = await db
      .collection("users")
      .findOne({ email: session.user.email });
    if (user) {
      return res.status(200).send({
        status: "Email already exists",
        user: user,
      });
    }
    const newUser = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      favorites: [],
      role: "user",
      createdAt: new Date(),
    };
    if (!user) {
      await db.collection("users").insertOne(newUser);
    }
    return res.status(201).send({
      status: "Created",
      user: newUser,
    });
  }
}
