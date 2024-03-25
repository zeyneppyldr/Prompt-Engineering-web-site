// Resimleri tam ekran yapmak için fonksiyon
function openFullscreen(imageUrl) {
  var fullscreenElement = document.querySelector(".fullscreen");
  var imageElement = fullscreenElement.querySelector("img");

  // Resmin URL'sini ayarla
  imageElement.src = imageUrl;

  // Tam ekranı göster
  fullscreenElement.style.display = "block";
}

// Tam ekran görüntüyü kapatmak için fonksiyon
function closeFullscreen() {
  var fullscreenElement = document.querySelector(".fullscreen");

  // Tam ekranı gizle
  fullscreenElement.style.display = "none";
}

// Resimlerin üzerine tıklandığında tam ekran görüntülemeyi başlat
var images = document.querySelectorAll(".openFullscreen");
images.forEach(function (image) {
  image.addEventListener("click", function () {
    openFullscreen(this.src);
  });
});

// Tam ekran görüntüyü kapatmak için close düğmesine tıklama olayını ekle
var closeButton = document.querySelector(".closeFullscreen");
closeButton.addEventListener("click", function () {
  closeFullscreen();
});

// Klavye tuşu "Escape" (27) ile tam ekran görüntüyü kapat
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeFullscreen();
  }
});
