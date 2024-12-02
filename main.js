document.getElementById("generateMatrices").addEventListener("click", generateMatrices);
document.getElementById("calculate").addEventListener("click", calculateBooleanProduct);

function generateMatrices() {
  const rowsA = parseInt(document.getElementById("rowsA").value);
  const colsA = parseInt(document.getElementById("colsA").value);
  const colsB = parseInt(document.getElementById("colsB").value);

  if (!rowsA || !colsA || !colsB) {
    alert("Please enter valid matrix dimensions.");
    return;
  }

  const container = document.getElementById("matrixInputs");
  container.innerHTML = '';

  
  const matrixA = document.createElement("div");
  matrixA.className = "matrix";
  matrixA.innerHTML = `<h3>Matrix A (${rowsA} x ${colsA})</h3>`;
  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsA; j++) {
      matrixA.innerHTML += `<input type="number" min="0" max="1" id="A-${i}-${j}" required>`;
    }
    matrixA.innerHTML += `<br>`;
  }
  container.appendChild(matrixA);

  
  const matrixB = document.createElement("div");
  matrixB.className = "matrix";
  matrixB.innerHTML = `<h3>Matrix B (${colsA} x ${colsB})</h3>`;
  for (let i = 0; i < colsA; i++) {
    for (let j = 0; j < colsB; j++) {
      matrixB.innerHTML += `<input type="number" min="0" max="1" id="B-${i}-${j}" required>`;
    }
    matrixB.innerHTML += `<br>`;
  }
  container.appendChild(matrixB);

  document.getElementById("calculate").style.display = "block";
}

function calculateBooleanProduct() {
  const rowsA = parseInt(document.getElementById("rowsA").value);
  const colsA = parseInt(document.getElementById("colsA").value);
  const colsB = parseInt(document.getElementById("colsB").value);

  const A = [];
  const B = [];

  
  for (let i = 0; i < rowsA; i++) {
    A[i] = [];
    for (let j = 0; j < colsA; j++) {
      A[i][j] = parseInt(document.getElementById(`A-${i}-${j}`).value) || 0;
    }
  }

 
  for (let i = 0; i < colsA; i++) {
    B[i] = [];
    for (let j = 0; j < colsB; j++) {
      B[i][j] = parseInt(document.getElementById(`B-${i}-${j}`).value) || 0;
    }
  }

  
  const C = [];
  for (let i = 0; i < rowsA; i++) {
    C[i] = [];
    for (let j = 0; j < colsB; j++) {
      C[i][j] = 0;
      for (let k = 0; k < colsA; k++) {
        C[i][j] = C[i][j] || (A[i][k] && B[k][j]);
      }
    }
  }

  
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `<h3>Boolean Product Result (${rowsA} x ${colsB})</h3>`;
  C.forEach(row => {
    resultContainer.innerHTML += row.join(" ") + `<br>`;
  });
}
