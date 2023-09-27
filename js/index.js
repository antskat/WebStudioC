var buybtn = document.getElementById("buybtn");
var blurBg = document.getElementById("blur-background");
var closeBtn = document.getElementById("closebtn");

function showPopup() {
  let elem = document.getElementById("popup");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("popup").style.display = "block";
  } else if (style.display !== "none") {
    document.getElementById("popup").style.display = "none";
  }

  if (style.display === "block") {
    document.getElementById("blur-background").style.display = "block";
    document.body.style.overflowY = "hidden";
  } else if (style.display !== "block") {
    document.getElementById("blur-background").style.display = "none";
  }
}

function closePopup() {
    let elem = document.getElementById("popup");
    let style = getComputedStyle(elem);
    if (style.display === "block") {
      document.getElementById("popup").style.display = "none";
      document.getElementById("blur-background").style.display = "none";
      document.body.style.overflowY = "scroll";
    } else if (style.display !== "block") {
      document.getElementById("popup").style.display = "block";
      document.getElementById("blur-background").style.display = "block";
      document.body.style.overflowY = "hidden";
    }
  }

  buybtn.addEventListener('click', showPopup);
  closeBtn.addEventListener('click', closePopup);