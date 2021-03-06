window.onload = function () {
  profileButton = document.getElementById("navProfile");
  profileDropdown = document.getElementById("profileDropdown");
  profileButton.addEventListener("click", function () {
    if (profileDropdown.style.display == "block") {
      profileDropdown.style.display = "none";
    } else {
      profileDropdown.style.display = "block";
    }
  });

  window.addEventListener("click", function (event) {
    if (
      !profileButton.contains(event.target) &&
      !profileDropdown.contains(event.target)
    ) {
      profileDropdown.style.display = "none";
    }
  });
};
