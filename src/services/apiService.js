import { useState } from "react";

export default function apiService(payload, { method = "GET", mockService }) {
  const [mocks, setMocks] = useState(false);

  const apiUrl = process.env.REACT_APP_URL_ENDPOINT;
  const apiPort = process.env.REACT_APP_PORT;
  const apiDefault = process.env.REACT_APP_URL_ENDPOINT_DEFAULT;
  const apiPortDefault = process.env.REACT_APP_PORT_DEFAULT;

  if (!apiUrl) setMocks(true);

  if (!mocks) {
    fetch(apiUrl + apiPort, { method: method })
      .then((response) => response.json())
      .then(console.log("respuesta", response))
      .catch((error) => console.error("Error", error));
  } else {
    console.log("payload", payload);
    switch (mockService) {
      case "login":
        break;
      case "register":
        break;
      default:
        return;
    }
  }
}
