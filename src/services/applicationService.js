

// const BASE_URL = "/api";


// export async function resumeApplicationByEmail(email) {
//   const url = `${BASE_URL}/resume?email=${encodeURIComponent(email)}`;

//   const res = await fetch(url, {
//     method: "GET",
//     // headers: {
//     //   "ngrok-skip-browser-warning": "true",
//     // },
//   });

//   if (!res.ok) return null;

//   return res.json();
// }




// Change this line:
// const BASE_URL = "/api";

// To this:
const BASE_URL = import.meta.env.VITE_API_URL + "/api";

export async function resumeApplicationByEmail(email) {
  const url = `${BASE_URL}/resume?email=${encodeURIComponent(email)}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
       "ngrok-skip-browser-warning": "true", // Keep this for PythonAnywhere/Ngrok
    },
  });

  if (!res.ok) return null;

  return res.json();
}