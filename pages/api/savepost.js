/* eslint-disable require-jsdoc */
import { connectToDatabase } from "../../lib/dbConnect";
// import { getSession } from "next-auth/react";
export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  const session = req.body.session;
  const postid = req.body.postid;
  const check = req.body.check;

  if (!session) {
    return res.status(200).send({
      status: "Unauthorized",
      user: null,
      code: 401,
    });
  }

  if (req.method === "POST") {
    const user = await db
      .collection("users")
      .findOne({ email: session.user.email });
    if (user) {
      const post = await db.collection("posts").findOne({ id: postid });
      if (post) {
        if (check == true) {
          if (user.favorites.includes(postid)) {
            return res.status(200).send({
              status: "Exists",
              code: "300",
              postid: postid,
            });
          } else {
            return res.status(200).send({
              status: "Don't Exists",
              code: "304",
              postid: postid,
            });
          }
        }
        //  Add the post id to user favorites array but only if it is not already there
        if (!user.favorites.includes(postid)) {
          user.favorites.push(postid);
          await db
            .collection("users")
            .updateOne(
              { email: session.user.email },
              { $push: { favorites: postid } }
            );
          return res.status(200).send({
            status: "Added to favorites",
            code: "200",
            postid: postid,
          });
        } else {
          return res.status(200).send({
            status: "Already in favorites",
            code: "300",
            postid: postid,
          });
        }
      }
      return res.status(200).send({
        status: "This post does not exist",
        code: "400",
        postid: postid,
      });
    }
    return res.status(200).send({
      status: "User not founded",
      user: null,
      code: 404,
    });
  }
}
