/** @jsx h */

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
