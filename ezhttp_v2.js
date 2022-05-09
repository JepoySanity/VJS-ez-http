class EzHttp {
  //get request to api
  async get(url) {
    const res = await fetch(url);
    const resData = await res.json();
    return resData;
  }
  //post request to api
  async post(url, data) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    return resData;
  }
  //update request to api
  async put(url, data) {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    return resData;
  }
  //delete request to api
  async delete(url) {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const resData = await "resource deleted";
    return resData;
  }
}
