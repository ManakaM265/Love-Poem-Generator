function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#generated-poem", {
    strings: "Generating a poem for you, please wait...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);
