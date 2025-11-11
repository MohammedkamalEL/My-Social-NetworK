import axios from "axios";

export const userInfo = async (userId) =>
  axios
    .get(`https://tarmeezacademy.com/api/v1/users/${userId}`)
    .then((response) => {
      //   console.log(response.data.data)
      return { success: true, data: response.data.data };
    })
    .catch((error) => {
      //   console.error("Error fetching data:", error.message);
      return { success: false, message: error.message };
    })
    .finally(() => {
    //   console.log("done");
    });
