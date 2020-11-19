function blogShowHide() {
    var x = document.getElementById("form_full");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  //this function determines if the post window is displayed and displays it if it is set to "none" - OR - it sets to "none" if it is displayed and the user taps the "write post" button again