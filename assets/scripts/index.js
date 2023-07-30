!(function () {
  
  // VARS
  const header = document.querySelector("header");
  const ii = document.getElementById("btn_grp_init");
  const ss = document.getElementById("seats");
  const gg = document.getElementById("groups");
  const ff = document.querySelector("footer"); // footer
  let pp; // Page, for back button
  let cc; // Class (period) number
  let n = 24; // Change to get number of students in class from Google sheet

  // BUTTON CLICK
  document.querySelectorAll("button").forEach(btn => btn.addEventListener("click", function () {
    ff.style.visibility = "visible";
    switch (this.id) {
      case "btn_s": seats(); break;
      case "btn_g": groups(); break;
      case "save": window.print();; break;
      case "btn_b": back(); break;
      default: break;
    }
  }));

  // RANDOM SEATING CHART
  function seats() {
    pp = "ss"; // Var for which page is open
    getClass();
    let frag = new DocumentFragment();
    for (let i = 0; i < n; i++) { // n students
      let ele = document.createElement("div");
      ele.innerHTML = Math.random().toFixed(6); // Student names from Google sheet
      frag.appendChild(ele);
    }
    ss.appendChild(frag);
    ss.style.display = "grid"; // Show seating
    ii.style.display = "none"; // Hide buttons
    header.innerHTML = `FRONT / FRENTE`; // Update header
  }

  // RANDOM GROUP ASSIGNMENT
  function groups() {
    pp = "gg";
    getClass();
    let frag = new DocumentFragment();
    for (let i = 0; i < 6; i++) {
      let grp = document.createElement("section");
      let ttl = document.createElement("div");
      ttl.innerHTML = i + 1;
      grp.appendChild(ttl);
      for (let j = 0; j < 4; j++) {
        let stu = document.createElement("div");
        stu.innerHTML = Math.random().toFixed(6);
        grp.appendChild(stu);
      }
      frag.appendChild(grp);
    }
    gg.appendChild(frag);
    gg.style.display = "grid"; // Show seating
    ii.style.display = "none"; // Hide buttons
    header.innerHTML = `GROUPS / GRUPOS`; // Update header
  }

  // BACK BUTTON
  function back() {
    header.innerHTML = "";
    ff.style.visibility = "hidden";
    if (pp === "ss") {
      ss.style.display = "none";
      ss.innerHTML = "";
    } else {
      gg.style.display = "none";
      gg.innerHTML = "";
    }
    ii.style.display = "flex";
  }

  // HELPER
  function getClass() {
    let ccs = document.querySelectorAll("input[name=class]");
    for (let i = 0; i < ccs.length; i++) {
      if (ccs[i].checked) cc = i + 1;
    }
    document.getElementById("class").innerHTML = ``;
    document.getElementById("stamp").innerHTML = `${new Date().toLocaleDateString()} [ ${cc} ] `
  }
})();