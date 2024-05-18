import express from "express";
const router = express.Router();

async function importRoute(path: string) {
  router.use("/", (await import(path)).default);
}

importRoute("./user/login.js");
importRoute("./user/register.js");
importRoute("./user/checkAuth.js");

importRoute("./projects/create.js");
importRoute("./projects/fetchMany.js");
importRoute("./projects/fetch.js");
importRoute("./projects/save.js");
importRoute("./projects/delete.js");
importRoute("./projects/updateInfo.js");
importRoute("./projects/publish.js");
importRoute("./projects/unpublish.js");
importRoute("./projects/set_thumbnail.js");
importRoute("./projects/uploadImage.js");

importRoute("./comments/getComments.js");
importRoute("./comments/postComment.js");
importRoute("./comments/deleteComment.js");
importRoute("./comments/fetchReplies.js");

importRoute("./explore/viewproject.js");
importRoute("./explore/embed.js");
importRoute("./explore/like.js");
importRoute("./explore/unlike.js");
importRoute("./explore/explore.js");

importRoute("./notifications/get.js");

export default router;
