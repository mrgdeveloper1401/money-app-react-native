const date = new Date().toString();
const dateObj = new Date();

const objId = Math.random();
const objIdString = Math.random().toString();
// console.log(typeof date);
// console.log(typeof dateObj);
console.log(objId);
console.log(typeof objId);

console.log("*******************************");

console.log(typeof objIdString);
console.log(objIdString);

console.log("*******************************");

const combine = new Date().toString() + Math.random().toString();
console.log(combine);
console.log(typeof combine);

console.log("*******************************");

// use uuid
// import {randomUUID} from "crypto";
// // const uuidId = uu
// const myId = randomUUID();
// console.log(myId);
