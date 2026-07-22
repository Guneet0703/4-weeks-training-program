const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise Resolved Successfully");
  } else {
    reject("Promise Rejected");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise Execution Completed");
  });