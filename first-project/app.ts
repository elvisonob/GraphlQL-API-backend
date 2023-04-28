const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResult = (num: string) => {
  return num;
};

let functionTesting: (a: number, b: number) => number;

functionTesting = add;

const error = (message: string) => {
  throw message;
};

console.log(error('Ifana-Ibaga-o'));
