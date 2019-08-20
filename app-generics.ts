// simple generic
function echo(data: any) {
  return data;
}

console.log(echo('Max'.length));
console.log(echo(27));
console.log(echo({ name: 'Max', age: 27 }));

// better generic
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho('Max'.length));
console.log(betterEcho(27));
console.log(betterEcho({ name: 'Max', age: 27 }));

// built-in generics
const trialResults: Array<number> = [1.94, 2.33];
trialResults.push(-2.99);
console.log(trialResults);

// arrays
function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}

printAll<string>(['Apple', 'Banana']);

// generic types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>('Something'));

// generic classes
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
