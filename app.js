const user = new EzHttp();
user
  .get("https://jsonplaceholder.typicode.com/users")
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
