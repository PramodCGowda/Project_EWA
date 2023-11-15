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
  axios
    .post(URL_PREFIX + "user/login", { email, password })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        return { status: true, message: "" };
      }
    })
    .catch((error) => {
      return { status: false, message: "Something went wrong!" };
    });
}
