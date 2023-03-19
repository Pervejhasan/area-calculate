function inputTypeCheck(widthString, lengthString) {
  if (
    isNaN(widthString) ||
    isNaN(lengthString) ||
    widthString < 0 ||
    lengthString < 0 ||
    widthString === "" ||
    lengthString === ""
  ) {
    return false;
  } else {
    return true;
  }
}
/* ellipse area start*/
function areaCalculate(areaType) {
  if (areaType === "ellipse") {
    let widthString = document.getElementById("evalue-one").value;
    let lengthString = document.getElementById("evalue-two").value;

    if (!inputTypeCheck(widthString, lengthString)) {
      alert("Please give a number");
      document.getElementById("evalue-one").value = "";
      document.getElementById("evalue-two").value = "";
      return "(garbage value)";
      //   `you given ${widthString} and ${lengthString}. Please give positive number.`
    } else {
      let width = parseFloat(widthString);
      let length = parseFloat(lengthString);
      document.getElementById("evalue-one").value = "";
      document.getElementById("evalue-two").value = "";
      let result = 3.1416 * width * length;
      return result.toFixed(2);
    }
  } else if (areaType === "pentagon") {
    /* ellipse area end*/
    /*================ pentagon area start ==================*/
    let p = document.getElementById("pvalue-one").value;
    let b = document.getElementById("pvalue-two").value;

    if (!inputTypeCheck(p, b)) {
      alert("Please give a number");
      document.getElementById("pvalue-one").value = "";
      document.getElementById("pvalue-two").value = "";
      return "(garbage value)";
      //   `you given ${widthString} and ${lengthString}. Please give positive number.`
    } else {
      let width = parseFloat(p);
      let length = parseFloat(b);
      document.getElementById("pvalue-one").value = "";
      document.getElementById("pvalue-two").value = "";
      let result = 0.5 * width * length;
      return result.toFixed(2);
    }
  } else if (areaType === "rhombus") {
    /*=========== pentagon area end ==============*/
    /*=========== rhombus area start ==============*/
    let d1 = document.getElementById("rvalue-one").value;
    let d2 = document.getElementById("rvalue-two").value;

    if (!inputTypeCheck(d1, d2)) {
      alert("Please give a number");
      document.getElementById("rvalue-one").value = "";
      document.getElementById("rvalue-two").value = "";
      return "(garbage value)";
      //   `you given ${widthString} and ${lengthString}. Please give positive number.`
    } else {
      let width = parseFloat(d1);
      let length = parseFloat(d2);
      document.getElementById("rvalue-one").value = "";
      document.getElementById("rvalue-two").value = "";
      let result = 0.5 * width * length;
      return result.toFixed(2);
    }
  } else if (areaType === "parallelogram") {
    /*=========== rhombus area end ==============*/
    /*=========== parallelogram area start ==============*/

    let b = document.getElementById("pavalue-one").value;
    let h = document.getElementById("pavalue-two").value;

    if (!inputTypeCheck(b, h)) {
      alert("Please give a number");
      document.getElementById("pavalue-one").value = "";
      document.getElementById("pavalue-two").value = "";
      return "(garbage value)";
      //   `you given ${widthString} and ${lengthString}. Please give positive number.`
    } else {
      let width = parseFloat(b);
      let length = parseFloat(h);
      document.getElementById("pavalue-one").value = "";
      document.getElementById("pavalue-two").value = "";
      let result = width * length;
      return result.toFixed(2);
    }
  } else if (areaType === "rectangle") {
    /*=========== parallelogram area end ==============*/
    /*=========== rectangle area start ==============*/
    let w = document.getElementById("revalue-one").value;
    let l = document.getElementById("revalue-two").value;

    if (!inputTypeCheck(w, l)) {
      alert("Please give a number");
      document.getElementById("revalue-one").value = "";
      document.getElementById("revalue-two").value = "";
      return "(garbage value)";
      //   `you given ${widthString} and ${lengthString}. Please give positive number.`
    } else {
      let width = parseFloat(w);
      let length = parseFloat(l);
      document.getElementById("revalue-one").value = "";
      document.getElementById("revalue-two").value = "";
      let result = width * length;
      return result.toFixed(2);
    }
  } else if (areaType === "triangle") {
    /*=========== rectangle area end ==============*/
    /*=========== triangle area start ==============*/

    let b = document.getElementById("tvalue-one").value;
    let h = document.getElementById("tvalue-two").value;

    if (!inputTypeCheck(b, h)) {
      alert("Please give a number");
      document.getElementById("tvalue-one").value = "";
      document.getElementById("tvalue-two").value = "";
      return "(garbage value)";
      //   `you given ${widthString} and ${lengthString}. Please give positive number.`
    } else {
      let width = parseFloat(b);
      let length = parseFloat(h);
      document.getElementById("tvalue-one").value = "";
      document.getElementById("tvalue-two").value = "";
      let result = 0.5 * width * length;
      return result.toFixed(2);
    }
  }
  /*=========== triangle area end ==============*/
}

function resultSet(name, result) {
  let ol = document.getElementById("result-show");
  const li = document.createElement("li");
  li.setAttribute("id", "list");
  li.classList.add("my-2");
  li.innerHTML = `
  <span class="me-2">${name}</span> ${result}<span> <b>cm<sup>2</sup></b> </span> <button class="btn btn-primary p-2 btn-sm ms-3 fw-bold" >Convert <span> m<sup>2</sup></span></button>
  `;

  ol.appendChild(li);
}

document.getElementById("ellipse-area").addEventListener("click", function () {
  let result = areaCalculate("ellipse");
  resultSet("Ellipse", result);
});
document.getElementById("pentagon-area").addEventListener("click", function () {
  let result = areaCalculate("pentagon");
  resultSet("Pentagon", result);
});

document.getElementById("rhombus-area").addEventListener("click", function () {
  let result = areaCalculate("rhombus");
  resultSet("Rhombus", result);
});

document
  .getElementById("parallelogram-area")
  .addEventListener("click", function () {
    let result = areaCalculate("parallelogram");
    resultSet("Parallelogram", result);
  });
document
  .getElementById("rectangle-area")
  .addEventListener("click", function () {
    let result = areaCalculate("rectangle");
    resultSet("Rectangle", result);
  });
document.getElementById("triangle-area").addEventListener("click", function () {
  let result = areaCalculate("triangle");
  resultSet("Triangle", result);
});
