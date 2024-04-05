function getPromise(number) {
    return new Promise((resolve, reject) => {
      if (number < 0) reject();
      resolve();
    });
  }