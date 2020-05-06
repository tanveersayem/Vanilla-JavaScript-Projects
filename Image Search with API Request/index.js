const form = document.querySelector("form");
const input = document.querySelector("input");
const loadingImage = document.querySelector("#loadingImage");
const imageSection = document.querySelector(".images");

loadingImage.style.display = "none";

form.addEventListener("submit", formSubmited);

function formSubmited(event) {
  event.preventDefault();
  const searchTerm = input.value;

  search(searchTerm).then(displayImages);
}

function search(searchTerm) {
  loadingImage.style.display = "";
  imageSection.innerHTML = "";
  return fetch(
    `https://pixabay.com/api/?key=16140890-cfd2c55f29001c6868f1a986d&q=${searchTerm}&image_type=photo`
  )
    .then((Response) => Response.json())
    .then((result) => {
      return result.hits;
    });
}

function displayImages(images) {
  images.forEach((image) => {
    console.log(image.fullHDURL);
    const imageElement = document.createElement("img");
    imageElement.src = image.fullHDURL;
    imageSection.appendChild(imageElement);
  });
  loadingImage.style.display = "none";
}
