!(function () {
  
  // VARS
  const header = document.querySelector("header");
  const ss = document.getElementById("seats");
  const gg = document.getElementById("groups");

  // LISTENERS
  document.querySelectorAll("button").forEach(btn => btn.addEventListener("click", clk));

  // SWITCH BUTTON CLICK
  function clk() {
    switch (this.id) {
      case "btn_s": seats(); break;
      case "btn_g": groups(); break;
      case "btn_b": back(); break;
      default: break;
    }
  }

  // RANDOM SEATING CHART
  function seats() {
    let cc;
    document.querySelectorAll("input[name=class]").forEach(c => { if (c.checked) cc = c.innerHTML});
    let n = cc.length || 24; // Change to get number of students in class from Google sheet
    let frag = new DocumentFragment();
    for (let i = 0; i < n; i++) {
      let ele = document.createElement("div");
      ele.innerHTML = Math.random().toFixed(6); // Add student names
      frag.appendChild(ele);
    }
    // UPDATE DOM
    ss.appendChild(frag);
    ss.style.display = "grid"; // Show seating
    document.getElementById("btn_grp_init").style.display = "none"; // Hide buttons
    header.innerHTML = "FRONT / FRENTE"; // Update header
  }

  // RANDOM GROUP ASSIGNMENT
  function groups() {

  }

  // BACK BUTTON
})();