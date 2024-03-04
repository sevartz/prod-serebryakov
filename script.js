function addInput() {
  var form = document.getElementById("createhtml");
  var input = document.createElement("input");
  input.type = "text";
  input.name = "interest";
  input.placeholder = "Введите интерес";
  input.className = "interest-input";
  form.appendChild(document.createElement("br"));
  form.appendChild(input);
}

function removeInput() {
  var form = document.getElementById("createhtml");
  if (form.lastChild.type == "text") {
    form.removeChild(form.lastChild);
    form.removeChild(form.lastChild);
  }
}
