

window.addEventListener('scroll', function() {
    var navbar = document.getElementById("navbar");
    var scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        navbar.style.top = "0";
        navbar.style.transition = "all 0.9s ease";
    } else {
        navbar.style.transition = "all 2s ease";
        navbar.style.top = "-100%";    
    }
});
window.addEventListener('scroll', function() {
    var smnavbar = document.getElementById("smnavbar");
    var scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        smnavbar.style.top = "0";
        smnavbar.style.transition = "all 0.9s ease";
    } else {
        smnavbar.style.transition = "all 2s ease";
        smnavbar.style.top = "-100%";    
    }
});



var sidenav = document.getElementById("sidenav").style;
var btnmenu = document.getElementById("btnmenu").style;
var btnclose = document.getElementById("btnclose").style;
var btnmenu1 = document.getElementById("btnmenu1").style;
var btnclose1 = document.getElementById("btnclose1").style;
 const showmenu = ()=>{
    sidenav.transition="all 0.5s ease";
    btnmenu.display="none";
    btnclose.display="block";
    btnmenu1.display="none";
    btnclose1.display="block";
    sidenav.left="0";
 }


 const hidemenu = ()=>{
    sidenav.transition="all 0.9s ease";
    btnmenu.display="block";
    btnclose.display="none";
    btnmenu1.display="block";
    btnclose1.display="none";
    sidenav.left="-100%";
 }


 function url() {
    fbq("track", "Purchase");
    location.href = "https://chat.whatsapp.com/DEwTmeThw93BqGjowUxCfE";
  }
