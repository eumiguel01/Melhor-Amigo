function openModal(imgSrc, title, description) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");
  
    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = "<h2>" + title + "</h2><p>" + description + "</p>";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  