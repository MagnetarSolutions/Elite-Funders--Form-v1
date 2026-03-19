// const BASE_URL = "/api";

// export async function saveApplication(payload) {
//   try {
//     await fetch(`${BASE_URL}/save`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "ngrok-skip-browser-warning": "true",
//       },
//       body: JSON.stringify(payload),
//       keepalive: true,
//     });
//   } catch (err) {
//     console.error("Autosave failed", err);
//   }
// }



// Change this line:
// const BASE_URL = "/api";

// To this:
const BASE_URL = import.meta.env.VITE_API_URL + "/api";

export async function saveApplication(payload) {
  try {
    await fetch(`${BASE_URL}/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch (err) {
    console.error("Autosave failed", err);
  }
}