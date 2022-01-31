/* eslint-disable require-jsdoc */
import { connectToDatabase } from "../../lib/dbConnect";
// import { getSession } from "next-auth/react";
export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  // const session = await getSession({ req });
  // console.log(`Session Info: ${session}`);

  //   if (token != rt) {
  //     return res.status(200).send({
  //       status: "Unauthorized",
  //       collection: null,
  //     });
  //   }
  //   if (!session) {
  //     return res.status(200).send({
  //       status: "Unauthorized",
  //       collection: null,
  //     });
  //   }

  if (req.method === "GET") {
    const posts = await db.collection("posts").find({}).toArray();
    if (posts) {
      // console.log(user);
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
      collection: null,
    });
  }
}
