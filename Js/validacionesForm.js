document.getElementById("formulario-contacto").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const erroresDiv = document.getElementById("errores");
  const resultadoDiv = document.getElementById("resultado");

  erroresDiv.innerHTML = "";
  resultadoDiv.innerHTML = "";

  const errores = [];

  if (nombre.length === 0) errores.push("El nombre es obligatorio.");
  if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) errores.push("El email no es válido.");
  if (!/^[0-9]{10}$/.test(telefono)) errores.push("El teléfono debe tener 10 dígitos numéricos.");

  if (errores.length > 0) {
    errores.forEach(err => {
      const p = document.createElement("p");
      p.textContent = err;
      p.style.color = "red";
      erroresDiv.appendChild(p);
    });
  } else {
    const datos = document.createElement("div");
    datos.innerHTML = `
      <h3>Datos enviados:</h3>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Mensaje:</strong> ${mensaje}</p>
    `;
    resultadoDiv.appendChild(datos);
    this.reset();
  }
});
