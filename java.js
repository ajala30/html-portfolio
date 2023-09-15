var tablinks = document.getElementsByClassName("skills");
var tabbcounts = document.getElementsByClassName("tabcont");
function opentab (tabname){
  for(tab of tablinks){
    tab.classList.remove("active");
    
  }
  for(tab of tabbcounts){
    tab.classList.remove("active-tab");
  }
  document.querySelector("." + tabname).classList.add("active")
  document.getElementById(tabname).classList.add("active-tab")

}
