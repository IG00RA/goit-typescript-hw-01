// const total: number = 100;
// let firstName: string = "Bob";
// const isActive: boolean = true;
// const numbers: number[] = [1, 2, 3, 4, 5, 5];
// numbers.push(2);
// // const user: { name: string; age: number } = {
// //   name: "Bob",
// //   age: 12,
// // };
// // user.age = 1;
// type User = {
//   name: string;
//   age: number;
// };
// const user: User = {
//   name: "Bob",
//   age: 12,
// };
// user.age = 1;
import { concatenation } from "./concatenation";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
