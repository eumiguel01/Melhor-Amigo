function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";

    evt.currentTarget.classList.add("active");

    evt.preventDefault();
}

document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tablinks")[0].classList.add("active");


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
  