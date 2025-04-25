fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Data successfully retrieved:", data);
  })
  .catch(error => {
    console.error("An error occurred:", error.message);
  });