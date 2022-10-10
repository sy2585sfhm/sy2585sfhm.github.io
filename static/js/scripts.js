//toggle sidebar script

let btn = document.querySelector("#toggle-menu-btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".search-btn");
let job = document.querySelector(".job");

btn.onclick = function() {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    job.style.display="block"
  } else {
    job.style.display="none"

  }
}
