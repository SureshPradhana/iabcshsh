import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getAllPosts, getPostById, createPost } from "./blogPosts.ts";

const app = new Application();
const router = new Router();

router.get("/api/posts", (ctx) => {
  ctx.response.body = getAllPosts();
});

router.get("/api/posts/:id", (ctx) => {
  const postId = ctx.params.id;
  const post = getPostById(Number(postId));
  if (post) {
    ctx.response.body = post;
  } else {
    ctx.response.status = 404;
  }
});

// Implement POST, PUT, and DELETE routes as needed

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server is running on port 8000");
await app.listen({ port: 8000 });