document.addEventListener("DOMContentLoaded", function () {
    const themeSwitcher = document.getElementById("checkbox");

    themeSwitcher.addEventListener("change", function () {
      const currentBodyClass = document.body.classList.value;

      if (currentBodyClass.includes("light-mode")) {
        document.body.classList.remove("light-mode");
      } else {
        document.body.classList.add("light-mode");
      }
    });
  });