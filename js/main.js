function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      return
    }

    currentValue += Math.floor(Math.random() * 10) + 1;
    if (currentValue > 100) {
      currentValue = 100;
    }
    counterElement.textContent = currentValue;
    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay)
  }
  updateCounter();
}
startLoader();

gsap.to(".counter", 0.25, {
  delay: 3.5,
  opacity: 0,
})

gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut"
})
gsap.from(".h1", 1.5, {
  delay: 4,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut"
})
gsap.from(".hero", 2, {
  delay: 4.5,
  y: 400,
  ease: "power4.inOut"
})

/* Cuenta regresiva */
const days = document.getElementById("days"),
    hours = document.getElementById("hours"),
    min = document.getElementById("min"),
    sec = document.getElementById("sec");

const cumple = new Date('December 20, 2025 21:00:00').getTime();
setInterval(() => {
    let hoy = new Date().getTime();
let tiempoRestante = cumple - hoy;

let dias = Math.floor(tiempoRestante / 86400000);
let horas = Math.floor(tiempoRestante / 3600000) % 24;
let minutos = Math.floor(tiempoRestante / 60000) % 60;
let segundos = Math.floor(tiempoRestante / 1000) % 60;

days.innerHTML = dias
hours.innerHTML = horas
min.innerHTML = minutos
sec.innerHTML = segundos

if(dias < 10){days.innerHTML = "0" + dias}
if(horas < 10){hours.innerHTML = "0" + horas}
if(minutos < 10){min.innerHTML = "0" + minutos}
if(segundos < 10){sec.innerHTML = "0" + segundos}

}, 1000);