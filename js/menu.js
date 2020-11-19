function showHide() {
    const x = document.getElementById("myOthernav");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  //this function determines if the navigation is displayed and displays it if it is set to "none" - OR - it sets to "none" if it is displayed and the user taps the hamburger again