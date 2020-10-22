function blogShowHide() {
    var x = document.getElementById("form_full");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }