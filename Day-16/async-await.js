function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Received Successfully");
    }, 2000);
  });
}

async function displayData() {
  console.log("Loading...");

  const result = await fetchData();

  console.log(result);
}

displayData();