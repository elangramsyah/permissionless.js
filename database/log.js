fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    console.log("Success: Data retrieved successfully! Status code:", response.status);
    return response.json();
  })
  .then(data => {
    console.log("Received data:", data);
  })
  .catch(error => {
    console.error("An error occurred:", error.message);
  });