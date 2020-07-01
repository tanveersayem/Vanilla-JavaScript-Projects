const form = document.querySelector("form");
const input = document.querySelector("input");
const loadingImage = document.querySelector("#loadingImage");
const imageSection = document.querySelector(".images");
const loader = document.querySelector(".loader");
const lost = document.querySelector(".lost");

loadingImage.style.display = "none";
loader.style.display = "none";
form.addEventListener("submit", formSubmited);

function formSubmited(event) {
  event.preventDefault();
  const searchTerm = input.value;
  let pageNumber = 1;
  search(searchTerm, pageNumber).then(displayImages);
  loader.addEventListener("click", () => {
    const searchTerm = input.value;
    pageNumber++;
    search(searchTerm, pageNumber).then(displayImages);
  });
}

function search(searchTerm, pageNumber) {
  loadingImage.style.display = "";
  imageSection.innerHTML = "";
  loader.style.display = "";
  return fetch(
    `https://pixabay.com/api/?key=16140890-cfd2c55f29001c6868f1a986d&safesearch=true&per_page=20&page=${pageNumber}&q=${searchTerm}&image_type=photo`
  )
    .then((Response) => Response.json())
    .then((result) => {
      console.log(result);
      return result.hits;
    });
}

function displayImages(images) {
  if (images.length > 1) {
    images.forEach((image) => {
      const imageElement = document.createElement("img");
      const url = document.createElement("a");
      url.href = image.imageURL;
      imageElement.src = image.fullHDURL;
      url.appendChild(imageElement);
      imageSection.appendChild(url);
    });
    loadingImage.style.display = "none";
  } else {
    loadingImage.style.display = "none";
    loader.style.display = "none";
    lost.style.display = "";
  }
}
