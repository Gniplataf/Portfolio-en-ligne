function copy() {
  const email = "sterling22660@outlook.fr";
  navigator.clipboard.writeText(email).then(function() {
    console.log("E-mail copié !");
  }, function(err) {
    console.error("Erreur lors de la copie : ", err);
  });
}

document.querySelector("#copy").addEventListener("click", copy);