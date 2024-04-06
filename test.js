function queuPromises(promises) {
  return Promise.allSettled(promises).then((results) =>
    Promise.resolve(results.reduce((acc, result) => acc + result.value, ''))
  );
}

const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);
const promise4 = new Promise((resolve) => setTimeout(() => resolve(40), 10));

const queue = await new Promise(queuPromises([promise1, promise2, promise3, promise4]));

console.log(queue)



