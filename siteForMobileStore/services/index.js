function openLoginForm() {
    var x = document.getElementById("#loginPopup");
    console.log(x.style.display)
    if (x.style.display === "none") {
      x.style.display = "block";
    }else if(x.style.display === "block"){
        x.style.display = "none";
    }
     else {
      x.style.display = "block";
    }
  }