/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function myFunction() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoR = Math.floor(Math.random() * who.length);
  let actionR = Math.floor(Math.random() * action.length);
  let whatR = Math.floor(Math.random() * what.length);
  let whenR = Math.floor(Math.random() * when.length);

  let frase =
    who[whoR] + " " + action[actionR] + " " + what[whatR] + " " + when[whenR];
  console.log(frase);
  document.getElementById("excuse").innerHTML = frase;
}
var boton = document.getElementById("mybtn");
boton.addEventListener("click", myFunction);
