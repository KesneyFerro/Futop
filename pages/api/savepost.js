/* eslint-disable require-jsdoc */
import { connectToDatabase } from "../../lib/dbConnect";
// import { getSession } from "next-auth/react";
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
  const postid = req.body.postid;
  const check = req.body.check;
  const remove = req.body.remove;

  if (!session) {
    return res.status(200).send({
      status: "Unauthorized",
      user: null,
      code: 401,
    });
  }
  if (token != rt) {
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
          //  Remove the post id from user favorites array
          user.favorites.splice(user.favorites.indexOf(postid), 1);
          await db
            .collection("users")
            .updateOne(
              { email: session.user.email },
              { $pull: { favorites: postid } }
            );

          return res.status(200).send({
            status: "Removed from favorites",
            code: "300",
            postid: postid,
          });
        }
      } else {
        if (remove == true) {
          if (user.favorites.includes(postid)) {
            //  Remove the post id from user favorites array
            user.favorites.splice(user.favorites.indexOf(postid), 1);
            await db
              .collection("users")
              .updateOne(
                { email: session.user.email },
                { $pull: { favorites: postid } }
              );

            return res.status(200).send({
              status: "Removed from favorites",
              code: "300",
              postid: postid,
            });
          }
        } else {
          return res.status(200).send({
            status: "This post can't be removed",
            code: "400",
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
