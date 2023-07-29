!(function () {
  // VARS

  // LISTENERS
  document.querySelectorAll("button").forEach(btn => btn.addEventListener("click", btnClick));

  // HELPERS
  function btnClick() {
    switch (this.id) {
      case "btn_g": ; break;
      case "btn_s": ; break;
      default: break;
    }
  }
})();