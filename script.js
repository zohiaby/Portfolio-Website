function HeroEnter() {
  let data = ["Desinger", "Developer", "Problem Solver", "Quick Leraner"];
  document.getElementById("changetext").innerText = "Designer";
  for (let i = 0; i < data.length; i++) {
    setTimeout(() => {
      document.getElementById("changetext").innerText = data[i];
    }, (i + 1) * 2500);
  }
}

function ContactEnter() {
  document.getElementById("projects").innerText = 0 + "K+";
  document.getElementById("clients").innerText = 0 + "K+";
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      document.getElementById("projects").innerText = i + 1 + "K+";
    }, (i + 1) * 100);
  }
  for (let i = 0; i < 800; i++) {
    setTimeout(() => {
      document.getElementById("clients").innerText = i + 1 + "K+";
    }, (i + 1) * 2);
  }
}
