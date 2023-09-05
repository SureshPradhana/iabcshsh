/** @jsx h */
import { Application, Router } from "oak";
import blog, { ga, redirects, h } from "blog";

blog({
  title: "iabcshsh",
  author:"suresh pradhana",
  // header: <header>Your custom header</header>,
  // section: (post: Post) => <section>Your custom section with access to Post props.</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "ry.jpg",
  avatarClass: "full",
 links: [
    { title: "Email", url: "mailto:sureshpradhana19@gmail.com" },
    { title: "GitHub", url: "https://github.com/SureshPradhana" },
],
  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});


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
