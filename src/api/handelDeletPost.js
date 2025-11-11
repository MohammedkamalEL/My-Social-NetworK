import axios from "axios";
export const handelDeletPost = async (id) => {
  const token = localStorage.getItem("token");
  // console.log(token);

  // console.log(id);
  // return
  return axios
    .delete(`https://tarmeezacademy.com/api/v1/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      // console.log(res);
      return { success: true, data: res };
      // console.log(res.data);
    });
};
