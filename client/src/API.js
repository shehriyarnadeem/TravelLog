const API_URL = "http://localhost:1337";

export const listLogEntries = async () => {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
};

export const postLogEntry = async entry => {
  console.log(entry);
  const response = await fetch(`${API_URL}/api/logs`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(entry)
  });
};
