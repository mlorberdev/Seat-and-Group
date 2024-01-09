!(function () {
  
  // VARS
  const header = document.querySelector("header");
  const ii = document.getElementById("btn_grp_init");
  const ss = document.getElementById("seats");
  const gg = document.getElementById("groups");
  const ff = document.querySelector("footer"); // footer
  const p1 = ["VIVI","GABRIELA","NEHEMIAS","NESTOR","JORGE","EMELY","DENISSE","ALDO","ALEX","BRAYAN","ANEJIA","KHUI","MARIO","ZABDI","KA'RON","JOHNATHAN","EMMA","MICHAEL","KERIONNA","TANIA","ANDREW","MIKAYLA","TEFERA","EZEKIEL","LAUREN","NATALY","OLIVER","LUIS","NARCY","KEANDRE","CHRIS"];
  const p2 = ["MARIANO","NEVAEH","JOSEPH","JESUS","MADISON","MARCELA","JOSHUA","KEVIN","MICHAEL","CINDY","ADRIAN","JASMIN","ANGEL","BREANNA","JORDAN","YAZMIN","GENARO","IVIS","DENIS","SELVIN","GENESIS","CRISTIAN","MAYTES"];
  const p4 = ["KIMBERLY B.","JAMES","MALIAH","FRANCHESKA","KENNIS","KIMBERLY H.","LAUREN","MALAYAH","JUDITH","SIHARA","JUAN","STEVEN","NELIDA","DANIELA","ALBERT","IVAN L.","ANNA","BRANDON","EDWARD","IVAN S.","AMY","JONATHAN","RICHARD","AALIYAH","ERICK","ALEXIS","YAHAIRA","CHRISTOPHER","KADEN","DESTINY","TANIA","LILY","CALEB","ATHZERE","CARLOS","AUBURN"];
  const p5 = ["KIMBERLIN","SAMANTHA","MAIREL","RODNEY","EMANUEL","HEIRI","MARQUIS","ALEXSANDRA","GIOVANNI","CURTIS","NATHAN","DEONDRICK","DEANNA","ADRIAN","IVAN","CARLOS","ANGEL","CHRISTOPHER","ANTONIO","KIMBERLY","ESTEBAN","JUAN","GENESIS"];
  const p6 = ["NIKAYLA","ISAIAH","ARMANDO","ARYANNA","GUSTAVO","JOSEPH","ANGIE","SHAKEERA","HILARY","EDEL","TALYAH","ISMAEL","YAHIR","CRISTINA","JOHN","ESTEFANIA","CAMERON","DAI'TON","ALIYAH R.","KAYTREN","DAYANNE","OLIVIA","DE'MARI","DHARION","ALIYIAH N."];
  const p7 = ["AYA","RAMON","JEZYRETH","SEBASTIAN","MARISELA","JULISSA","NICK","BELLA","ELVIRA","ALEXANDER","LUIS","ARTEMIS","SANIYAH","ISAIAH","DANYA","MELANIE","MYRA","MARICELA","JAKE","JOSHUA","LOANY"];
  let cc; // Class checked
  let pp; // Page, for back button (which page you're on: groups or seats)
  let st; // Students
  let n; // Number of students in class

  // BUTTON CLICK
  document.querySelectorAll("button").forEach(btn => btn.addEventListener("click", function () {
    ff.style.visibility = "visible";
    switch (this.id) {
      case "btn_s": seats(); break;
      case "btn_g": groups(); break;
      case "save": window.print(); break;
      case "btn_b": back(); break;
      default: break;
    }
  }));

  // RANDOM SEATING CHART
  function seats() {
    pp = "ss"; // Var for which page is open
    // getClass();
    let frag = new DocumentFragment();
    for (let i = 0; i < n; i++) { // n students
      let ele = document.createElement("div");
      ele.innerHTML = Math.random().toFixed(6); // Student names from Google sheet
      frag.appendChild(ele);
    }
    ss.appendChild(frag);
    ss.style.display = "grid"; // Show seating
    ii.style.display = "none"; // Hide buttons
    header.innerHTML = `FRONT`; // Update header
  }

  // RANDOM GROUP ASSIGNMENT
  function groups() {
    pp = "gg"; // Put on groups page
    let ccs = document.querySelectorAll("input[name=class]");
    for (let i = 0; i < ccs.length; i++) {
      if (ccs[i].checked) { cc = i + 1; break };
    }
    switch (cc) { // st is student list by period
      case 1: st = p1; break;
      case 2: st = p2; break;
      case 4: st = p4; break;
      case 5: st = p5; break;
      case 6: st = p6; break;
      case 7: st = p7; break;
    }
    document.getElementById("class").innerHTML = ``;
    document.getElementById("stamp").innerHTML = `${new Date().toLocaleDateString()} [ ${cc} ] `; // Timestamp document

    let frag = new DocumentFragment();
    let temp = [];
    for (let i = 0; i < st.length; i++) temp.push(st[i]); // fill temp arr w/students
    let n = 5; // num of students in each group; changes when num unplaced < 10
    for (let i = 0; i < 7; i++) {
      let grp = document.createElement("section");
      let ttl = document.createElement("div");
      ttl.innerHTML = i + 1;
      grp.appendChild(ttl);
      switch (temp.length) {
        case 6: n = 3; break;
        case 8: n = 4; break;
        default: break;
      }
      for (let j = 0; j < n; j++) {
        let stu = document.createElement("div");
        let s = Math.floor(Math.random() * temp.length); // pick a student from class list, the number
        stu.innerHTML = temp[s];
        if (temp.length > 0) {
          temp.splice(s, 1);
          grp.appendChild(stu);
        }
      }
      frag.appendChild(grp);
    }
    gg.appendChild(frag);
    gg.style.display = "grid"; // Show seating
    ii.style.display = "none"; // Hide buttons
    header.innerHTML = `GROUPS`; // Update header
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

})();