

function get_l_s_by_name(name){
	
var item=window.localStorage.getItem(name);	

if (typeof item === 'undefined' || item === null){
item="";	
}

return item;
}
 
 function set_l_s_by_name(name,value){
   localStorage.setItem(name, value);
 }
   
function logout(){
    return localStorage= null;
}

$( document ).ready(function() {
	
var nav_mobile="";

nav_mobile+="<div class='nav-wrapper container'>";
nav_mobile+="<a id='logo-container' href='index.html' class='brand-logo'><i class='material-icons dp48'>local_pharmacy</i> Pharmacie de Garde</a>";
nav_mobile+="<ul id='nav-mobile' class='side-nav'>";
nav_mobile+="<li><a href='index.html'><i class='material-icons dp48'>local_pharmacy</i> Pharmacies </a></li>";
nav_mobile+="<li><a href='meteo.html'><i class='material-icons dp48'>wb_sunny</i> Météo </a></li>";

nav_mobile+="<li><a href='a_propos.html'><i class='material-icons dp48'>info</i> A propos</a></li>";

nav_mobile+="</ul>";
nav_mobile+="<a href='#' data-activates='nav-mobile' class='button-collapse'><i class='material-icons'>menu</i></a>";
nav_mobile+="</div>";

$("#nav_mobile").html(nav_mobile);


   $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    }
  );
      
});



