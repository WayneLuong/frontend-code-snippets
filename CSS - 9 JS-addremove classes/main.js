let jsbtn = document.getElementById("jsbtn");

/* --------------Vanilla javascript------------------ */
jsbtn.addEventListener("click", function() {
  let js = document.getElementById("js");

  if (js.classList.contains("fromRight")) {
    console.log("Contains class"); //check if contains class
  }

  /* Toggle the class */
  js.classList.toggle("fromRight");
  /*   js.classList.add('fromRight');
    js.classList.remove('fromRight'); */
});

/* ------------------jQuery ------------------------*/
if (window.jQuery) {
  alert("jqeury loaded");
}

$("#jquerybtn").on("click", () => {
  let jquery = $("#jquery");

  if ($(jquery).hasClass("fromRight")) {
    console.log("Contains class"); //check if contains class
  }
  /* Toggle the class */
  jquery.toggleClass("fromRight");
});
