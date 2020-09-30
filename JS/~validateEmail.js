function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("FUCK YEAH, MOTHERFUCKER")
  } else {
      alert("You have entered an invalid email address!");
  }
}
//https://www.w3resource.com/javascript/form/email-validation.php