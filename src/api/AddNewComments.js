import axios from "axios";
export const addNewComment = async (body, userId) => {
  const token = localStorage.getItem("token");
  // console.log(token);
  if (body.length === 0) {
    return console.log("inRmbety");
  }

  return axios
    .post(
      `https://tarmeezacademy.com/api/v1/posts/${userId}/comments`,
      {
        body: body,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Token in the header
          "Content-Type": "application/json", // Optional, depending on your API
        },
      }
    )
    .then(function (response) {
      //   console.log(response);
      return response;
    })
    .catch(function (error) {
      //   console.log(error);
      return error;
    });
};
