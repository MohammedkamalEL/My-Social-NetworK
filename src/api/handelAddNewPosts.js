import axios from "axios";
export const handelAddNewPosts = async (formData) => {
    // console.log(formData);
  const token = localStorage.getItem("token");
  return axios
    .post("https://tarmeezacademy.com/api/v1/posts/", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        // 'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      // console.log(response);
      return response;
    })
    .catch((error) => {
      // console.log(error);
      return error;
    });
};
