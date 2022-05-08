class EzHttp {
  //get request to api
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((user) => resolve(user))
        .catch((err) => reject(err));
    });
  }
  //post request to api
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((user) => resolve(user))
        .catch((err) => reject(err));
    });
  }
  //update request to api
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((user) => resolve(user))
        .catch((err) => reject(err));
    });
  }
}
