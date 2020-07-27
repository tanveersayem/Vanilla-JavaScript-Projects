const filterInput = document.querySelector("#filterInput");
const ul = document.querySelector("#names");
const li = document.querySelectorAll(".collection-item");

//Event Listener

filterInput.addEventListener("keyup", filterNames);

//functions

function filterNames() {
  let filterValue = filterInput.value.toUpperCase();
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
