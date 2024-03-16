
function openWindow() {
  let button = document.getElementById("contact-me");
  button.onclick = function () {
    setTimeout(function () {
      window.location.href = "contact.html";
    }, 800);
  };
}

openWindow();
