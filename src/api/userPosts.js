import axios from "axios";
export async function userAllPosts(userId) {
  return axios
    .get(`https://tarmeezacademy.com/api/v1/users/${userId}/posts`)
    .then((response) => {
        // console.log(response.data.data)
      return { success: true, data: response.data.data };
    })
    .catch((error) => {
        // console.error("Error fetching data:", error.message);
      return { success: false, message: error.message };
    })
    .finally(() => {
        // console.log("done");
    });
}
