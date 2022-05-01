function openForm() {
    document.getElementById("form").style.display = "block";
    document.getElementById("form1").style.display = "block";
    document.getElementById("fg").style.display = "none";
    document.getElementById("sign").style.display = "none";
    
    
  }
function closeForm(){
  document.getElementById("form").style.display = "none";
  document.getElementById("form1").style.display = "none";
  document.getElementById("fg").style.display = "none";
  document.getElementById("sign").style.display = "none";

}
function signIn(){
  document.getElementById("form").style.display = "block";
  document.getElementById("form1").style.display = "none";
  document.getElementById("fg").style.display = "none";
  document.getElementById("sign").style.display = "block";

}