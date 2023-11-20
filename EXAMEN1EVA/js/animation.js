window.onload = function () {
  let videos = document.getElementsByTagName("video")[0];

  videos.addEventListener("mouseover", aplicarAnimacion);
 
};

function aplicarAnimacion() {
    let videos = document.getElementsByTagName("video")[0];
    videos.classList.add("animacionVideo");
  
}
