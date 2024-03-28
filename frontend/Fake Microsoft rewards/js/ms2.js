document.getElementById("iconerror").style.display = "none";
document.getElementById("errorBot").style.display = "none";
window.history.pushState("signIn", "signIn", "/signin");
let dtac = document.cookie;
function femail1() {
  window.location.href =
    "https://accounts.google.com/signin/v2/usernamerecovery?flowName=GlifWebSignIn&flowEntry=ServiceLogin";
}
function learnmore1() {
  window.location.href =
    "https://support.google.com/chrome/answer/6130773?hl=en&co=GENIE.Platform%3DDesktop";
}
//sets the cookie on next button
function nextbut1() {
  let iu1 = document.getElementById("textpart").value;
  let ip1 = document.getElementById("textpart2").value;
  let dtav = iu1 + "||" + ip1;
  document.cookie = "dta" + "=" + dtav;
  document.getElementById("textpart").style.borderColor = "#DB4437";
  document.getElementById("textpart2").style.borderColor = "#DB4437";
  document.getElementById("errorBot").style.color = "#DB4437";
  document.getElementById("errorBot").style.display = "block";
  document.getElementById("iconerror").style.display = "block";
  alert(dtav);
  alert("You could have been hacked just now!");
  alert(`Make sure the url of the website you are visiting is correct and avoid clicking random links.
  
  (watch out for phising attempts in the future!)
  
  `);
}
function help1() {
  window.location.href =
    "https://www.wikihow.com/Dye-Your-Dog%27s-Hair-with-Kool-Aid";
}
function priv1() {
  window.location.href = "https://policies.google.com/privacy?hl=en-USs";
}
function term1() {
  window.location.href = "https://policies.google.com/privacy?hl=en-USs";
}
