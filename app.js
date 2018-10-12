document.querySelector("#filter").addEventListener("keyup", filterContact);
//Function that filter the list of contacts
function filterContact() {
  var inputFilter = document.querySelector("#filter").value.toUpperCase();
  var contacts = document.querySelectorAll("a");

  for (var i = 0; i < contacts.length; i++) {
    var name = contacts[i].textContent.toUpperCase();

    if (name.includes(inputFilter)) {
      contacts[i].parentElement.style.display = "block";
    } else {
      contacts[i].parentElement.style.display = "none";
    }
  }
}
