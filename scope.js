let value = 10;

function demo() {
  let value = 20;
  console.log(value); // 20
}
demo()
console.log(value); // 10


let x = 5;

if (true) {
  let x = 10;
}

console.log(x);

/*const arr = [1, 2, 3];
arr.push(4);
console.log(arr)*/

const arr = [1, 2, 3];

const sameArr = arr;

sameArr.push(99);

console.log(arr);
