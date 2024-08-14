// Get the modal
var modal = document.getElementById("myModel");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  // Thay đổi none -> block
  modal.style.display = "block";
  // đặt link ảnh trong ode
  modalImg.src = this.src;
  // hiển thị text = alt trong img
  captionText.innerHTML = this.alt;
}

// nhấn x để đóng
var span = document.getElementsByClassName("close")[0];

// block -> none
span.onclick = function() {
  modal.style.display = "none";
}