function getPromiseResult(source) {
  return source.then(() => 'success').catch(() => 'fail');
}

const resolver = (number) =>
  number % 2 === 0 ? Promise.resolve() : Promise.reject();

console.log(getPromiseResult(resolver(2)));
console.log(getPromiseResult(resolver(9)));
