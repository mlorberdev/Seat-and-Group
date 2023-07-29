!(function () {
  // VARS

  // LISTENERS
  document.querySelectorAll(".listen").forEach(b => routeFn);

  // HELPERS
  function routeFn() {
    console.log(this.id);
  }
})();