function showInputs() {
  const shape = document.getElementById("shape").value;
  const inputsDiv = document.getElementById("inputs");
  inputsDiv.innerHTML = "";

  if (shape === "square") {
    inputsDiv.innerHTML = '<input id="side" type="number" placeholder="Enter side length">';
  } else if (shape === "rectangle") {
    inputsDiv.innerHTML = '<input id="length" type="number" placeholder="Enter length">' +
                          '<input id="width" type="number" placeholder="Enter width">';
  } else if (shape === "circle") {
    inputsDiv.innerHTML = '<input id="radius" type="number" placeholder="Enter radius">';
  } else if (shape === "triangle") {
    inputsDiv.innerHTML = '<input id="a" type="number" placeholder="Enter side a">' +
                          '<input id="b" type="number" placeholder="Enter side b">' +
                          '<input id="c" type="number" placeholder="Enter side c">';
  }
}

function calculatePerimeter() {
  const shape = document.getElementById("shape").value;
  let perimeter = 0;

  if (shape === "square") {
    const side = parseFloat(document.getElementById("side").value);
    perimeter = 4 * side;
  } else if (shape === "rectangle") {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    perimeter = 2 * (length + width);
  } else if (shape === "circle") {
    const radius = parseFloat(document.getElementById("radius").value);
    perimeter = 2 * Math.PI * radius;
  } else if (shape === "triangle") {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    perimeter = a + b + c;
  }

  document.getElementById("result").innerText = "Perimeter: " + perimeter.toFixed(2);
}
