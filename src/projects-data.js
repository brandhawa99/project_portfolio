const projects = [
  {
    id: 6,
    title: "Social Media App",
    blog: "Introducing the newest social media app built with cutting-edge technology! Our app features a sleek and intuitive ReactJS front-end, providing users with a seamless and engaging experience. On the back-end, we've utilized the power of ExpressJS to handle all the heavy lifting and ensure lightning-fast response times. To top it all off, we're hosted on both AWS and Google Cloud Services, ensuring maximum scalability and reliability. Whether you're looking to connect with friends, share your passions, or discover new communities, our social media app has everything you need to stay connected and engaged in the world around you. So why wait? Signup today and start exploring! ",
    tools: "Built with Reactjs, JavaScript, Node, ExpressJS AWS, Google Cloud Platform, Docker",
    imgLink: "https://user-images.githubusercontent.com/35308786/227627654-e28ac04e-2622-4a93-88f0-d01cc98e8cae.png",
    github: "https://github.com/social-media-app-project/social-media-app",
    link: "https://main.d1l2zslx6rge0v.amplifyapp.com/login",
  },
  {
    id: 1,
    title: "Shopping Cart App",
    blog: "This app fetches data from a fake store REST API. I display all the products on the store page where you can see the price and name. Once you click on a product you can get a detailed view of the item with a description. You can add products to a cart which updates its count automatically. Once you click on the cart you can see everything that was added with a count and price.",
    tools: "Built with reactjs, javascript, and css  ",
    imgLink:
      "https://user-images.githubusercontent.com/35308786/185670287-ad051d88-aad5-46bf-91e3-f0b106328ed3.png",
    github: "https://github.com/brandhawa99/shoppingcart_odin",
    link: "https://shopping-cart-app-brandhawa.netlify.app/shop",
  },
  {
    id: 2,
    title: "Blog API",
    blog: "This RESTful API has two major routes, a client route, and a content management route. The client route displays blog posts created by authors and gives viewers the ability to comment on the blog posts. The CMS route lets authors sign in and manage posts(make them public or private) and create and update posts. Also, authors can manage the comments under their posts.",
    tools:
      "Built with nodejs, expressjs, mongodb  and passportjs(JWT Strategy). Tested with jest, and supertest ",
    imgLink:
      "https://user-images.githubusercontent.com/35308786/188825223-84b0cf7e-737a-4198-8f14-17c45bbc4826.png",
    github: "https://github.com/brandhawa99/blog_api",
    link: "https://blog-api-h9xk.onrender.com/",
  },
  {
    id: 3,
    title: "Blog Client",
    blog: "This react app connects to the 'Blog API' and gets all of the public posts created by the authors. Once you get at an individual post you can post a comment under it.",
    tools: "Built with reactjs, javascript, css, ",
    imgLink:
      "https://user-images.githubusercontent.com/35308786/188829854-f26ca268-7508-4d9e-9b6c-6913430ac0f2.png",
    link: "https://blog-client-brandhawa.netlify.app/",
  },
  {
    id: 4,
    title: "Blog CMS",
    blog: "This react app connects to the 'Blog API' and gets users to log in and manage their content. It stores JWT during authentication and passes it around in the authorization header when making requests. **Login with username: bawa, password: password123**",
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
  {
    id: 6,
    title: "WedSpeak",
    blog: "This is a react-native/expo app designed to make wedding/events more memorable. It allows friends and family to leave personal voice notes for the wedding party. All the voice notes are saved in a locked folder so only the people who are meant to heart the messages are able to.",
    tools: "Built with Typescript, React-native, Expo",
    imgLink: "https://github.com/brandhawa99/react_native_test/assets/35308786/b1db2bea-bdea-4575-8525-70443b9a0011",
    github: "https://github.com/brandhawa99/react_native_test/tree/main/wedspeak",
    link: ""
  }
];

export default projects;
