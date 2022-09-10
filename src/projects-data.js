const projects = [
  {
    id: 1,
    title: "Shopping Cart App",
    blog: "This app fetch data from a fake store REST API. I display all the products on the store page where you can see the price and name. Once you click on a product you can get a detailed view of the item with a description. You can add products at a cart which updates its count automatically. Once you click on the cart you can see everything that was added with a count and price.",
    tools: "Built with reactjs, javascript, and css  ",
    imgLink:
      "https://user-images.githubusercontent.com/35308786/185670287-ad051d88-aad5-46bf-91e3-f0b106328ed3.png",
    github: "https://github.com/brandhawa99/shoppingcart_odin",
    link: "https://shopping-cart-app-brandhawa.netlify.app/shop",
  },
  {
    id: 2,
    title: "Blog API",
    blog: "This RESTful API has two major routes, a client route and an content management route. The client route displays blog posts create by authors and gives viewers the ability to comment on the blog posts. The CMS route lets authors sign-in and manage posts(make them public or private), create and update posts. Also authors can manage the comments under their posts.",
    tools:
      "Built with nodejs, expressjs, mongodb  and passportjs(JWT Strategy). Tested with jest, and supertest ",
    imgLink:
      "https://user-images.githubusercontent.com/35308786/188825223-84b0cf7e-737a-4198-8f14-17c45bbc4826.png",
    github: "https://github.com/brandhawa99/blog_api",
    link: "https://agile-mesa-41864.herokuapp.com/",
  },
  {
    id: 3,
    title: "Blog Client",
    blog: "This react app connects to the 'Blog API' and gets all of the public posts create by authors. Once you get at an individual post you can post a comment under it.",
    tools: "Built with reactjs, javascript, css, ",
    imgLink:
      "https://user-images.githubusercontent.com/35308786/188829854-f26ca268-7508-4d9e-9b6c-6913430ac0f2.png",
    link: "https://blog-client-brandhawa.netlify.app/",
  },
  {
    id: 4,
    title: "Blog CMS",
    blog: "This react app connects to the 'Blog API' and gets users to login and manage their content. It stores JWT during authentication and passes it around in the authorzation header when making requests. Login with username: bawa, password: password123",
    tools: "Built with reactjs, javascript, css, ",
    imgLink:
      "https://user-images.githubusercontent.com/35308786/188833160-235e8ab1-5df6-41c8-8654-b9b048fe768b.png",
    github: "https://github.com/brandhawa99/blog_cms",
    link: "https://blog-cms-brandhawa.netlify.app/",
  },
  {
    id: 5,
    title: "Library",
    blog: "This is a little library app where you can post a bunch of titles and authors and create a collection of books you have read or want to read.",
    tools: "Built with vanilla javascript, html, and tailwind css",
    imgLink:
      "https://user-images.githubusercontent.com/35308786/189496717-2114018b-1318-4691-bfe7-a1fa68338fe6.png",
    github: "https://github.com/brandhawa99/library",
    link: "https://brandhawa99.github.io/library/",
  },
];

export default projects;
