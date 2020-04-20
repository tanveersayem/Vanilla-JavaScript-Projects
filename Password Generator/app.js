//DOM elements
const resultEl = document.querySelector(".result");
const lengthEl = document.querySelector(".length");
const uppercaseEl = document.querySelector(".uppercase");
const lowercaseEl = document.querySelector(".lowercase");
const numbersEl = document.querySelector(".numbers");
const symbolsEl = document.querySelector(".symbols");
const generateEl = document.querySelector(".generate-btn");
const clipboardEl = document.querySelector(".clip-board");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  numbers: getRandomNumbers,
  symbols: getRandomSymbols,
};
//Generate EvenetListner
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  resultEl.value = generatePassword(
    hasLower,
    hasUpper,
    hasNumbers,
    hasSymbols,
    length
  );
});

//Copy password to clipboard

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.value;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard!");
});

//Generate password function
function generatePassword(lower, upper, numbers, symbols, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + numbers + symbols;
  //console.log("typesCount: ", typesCount);

  const typesArr = [{ lower }, { upper }, { numbers }, { symbols }].filter(
    (item) => Object.values(item)[0]
  );
  //console.log(typesArr);

  if (typesCount === 0) {
    return "";
  }
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      //console.log("funcName: ", funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
//Generator Functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbols() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
