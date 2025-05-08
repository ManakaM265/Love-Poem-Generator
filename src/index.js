function displayPoem(response) {
  new Typewriter("#generated-poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "06a76be07c395ac5ec163f44afd921ot";
  let prompt = `User instructions: Generate a love poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic AI assistant who loves to write short poems. Your mission is to write a four line poem and separate each line with a <br />.  Make sure to follow the user instructions. Sign the poem SheCodes AI inside a <strong> element at the end of the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#generated-poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);
