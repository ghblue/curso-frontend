import axios from "axios";

const api = "https://jsonplaceholder.typicode.com";

//talvez o /p0sts seja um erro trocar por /posts erro 5
export const getPostsList = () => axios.get(api + "/posts");

export const createPost = (data) => axios.post(api + "/posts", data);

export const getPost = (id) => axios.get(api + "/posts/" + id);

export const putPost = (data, carryId) =>
  axios.put(api + "/posts/" + carryId.id, data);

// export const deletePost = (id) => axios.delete(api + "/posts/" + id);

export const deletePost = (open) => axios.delete(api + "/posts/" + open.id);