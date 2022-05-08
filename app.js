//API used https://jsonplaceholder.typicode.com/users
//this api is used just for learning purposes

//Create instance of the ezhttp class
const user = new EzHttp();
//test data for post and put request
const data = {
  name: "jepoy",
  username: "jepoysanity",
  email: "factoran20@gmail.com",
};

//GET USER API
// user
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((user) => console.log(user))
//   .catch((err) => console.log(err));

//CREATE USER API
// user
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then((user) => console.log(user))
//   .catch((err) => console.log(err));

//UPDATE USER API
user
  .put("https://jsonplaceholder.typicode.com/users/2", data)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
