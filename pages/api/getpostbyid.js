/* eslint-disable require-jsdoc */
import { connectToDatabase } from "../../lib/dbConnect";
// import { getSession } from "next-auth/react";
import nextCors from "nextjs-cors";
export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const opportunity = req.body.opportunity;
  const token = req.body.token;
  const rt = process.env.NEXT_PUBLIC_DBTOKEN;
  await nextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  if (token != rt) {
    return res.status(200).send({
      status: "Posts not found",
      posts: null,
    });
  }
  if (req.method === "POST") {
    const posts = await db.collection("posts").findOne({ id: opportunity });
    if (posts) {
      if (posts === undefined) {
        return res.status(200).send({
          status: "Posts not found",
          posts: null,
        });
      }
      return res.status(201).send({
        status: "Posts found",
        posts: posts,
      });
    } else {
      return res.status(200).send({
        status: "Posts not found",
        posts: null,
      });
    }
  } else {
    return res.status(200).send({
      status: "Posts not found",
      posts: null,
    });
  }
}
