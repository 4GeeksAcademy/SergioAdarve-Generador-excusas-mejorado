import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarExcusa() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
      let excusa = who[Math.floor(Math.random() * who.length)] + ' ' +
                   action[Math.floor(Math.random() * action.length)] + ' ' +
                   what[Math.floor(Math.random() * what.length)] + ' ' +
                   when[Math.floor(Math.random() * when.length)];
  
      document.getElementById('excuse').innerHTML = excusa;
  }
  
  window.onload = generarExcusa;
