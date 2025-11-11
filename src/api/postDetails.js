import axios from "axios";
export async function postDetails(postId) {
  return axios
    .get(`https://tarmeezacademy.com/api/v1/posts/${postId}`)
    .then((response) => {
      // console.log(response.data.data);
      return { success: true, data: response.data.data };
    })
    .catch((error) => {
      //   console.error("Error fetching data:", error);
      return { success: false, message: error.message };
    })
    .finally(() => {
      //   console.log("done");
    });
}
