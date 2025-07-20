document.getElementById("openBtn").addEventListener("click", function(){
  const envelope = document.getElementById("envelope");
  envelope.classList.add("open");
  envelope.classList.remove("floating"); // Hentikan animasi floating
  this.style.display = "none";
});

function redirect(){
  // Ganti dengan link tujuanmu
  window.location.href = "Webkenangan.html";
}