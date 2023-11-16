import axios from "axios";
import { URL_PREFIX } from "../config";

// export async function newUserCall(dispatch, receivedData) {
//   var { actionType, ...data } = receivedData;
//   axios
//     .post("https://suggestions123.herokuapp.com/user/signup", data)
//     .then((response) => {
//       if (response.status === 200) {
//         dispatch({
//           type: actionType,
//           payload: { signup: true, signupMessage: "Signup Successful" },
//         });
//       }
//     })
//     .catch((error) => {
//       dispatch({
//         type: actionType,
//         payload: {
//           signup: false,
//           signupMessage: "Please enter valid credentials",
//         },
//       });
//     });
// }

export function loginUser(email, password) {
  //api
  localStorage.setItem("username", "pramod Gowda");
  localStorage.setItem("userId", "7652138");
  window.location = "/";
}
