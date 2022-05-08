class EzHttp {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((user) => resolve(user))
        .catch((err) => reject(err));
    });
  }
}
