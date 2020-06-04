import getImages from "./api.js";

const form = document.querySelector("form");
const imageSection = document.querySelector(".images");
const loadingImage = document.querySelector("#loadingImage");

loadingImage.style.display = "none";

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  loadingImage.style.display = "";
  imageSection.innerHTML = "";
  const formData = new FormData(form);
  const searchTerm = formData.get("searchTerm");

  try {
    const images = await getImages(searchTerm);
    addImagesToPage(images);
    if (images.length < 1) {
      loadingImage.style.display = "none";
      imageSection.innerHTML =
        "<span style='font-size:2em'>No Images Found!</span>";
    }
  } catch (error) {
    // Handle the error....
    console.log(error);
  }
});

function addImagesToPage(images) {
  images.forEach((item) => {
    const ImageElement = document.createElement("img");
    ImageElement.src = item.image;
    ImageElement.classList.add("image-hover");
    imageSection.append(ImageElement);
    loadingImage.style.display = "none";
    //console.log(images.length);
  });
}
