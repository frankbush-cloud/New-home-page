function changeSRC() {
   document.getElementById("myImage").src="https://www.bing.com/th?id=OIP.zHtYy800GhmmVF2UfkgymwHaJ4&pid=3.1&cb=&w=300&h=300&p=0"
 }

 function changeSRC1(){
   document.getElementById("myImage").src="./assets/images/bulb-off-pic.jpg"
 }

 function changeFont(){
   document.getElementById("demo").style.cssText=
   "font-size: 35; color: blue";
 }

 document.getElementById("demo2").innerHTML = 5+3 
 //get the menu-icon&nav-links;
 //function myFunction(){
//var x = document.querySelector('.nav-links');
//f (x.style.display === "block"){
  //x.style.display = "none";
//}else{
   //x.style.display = "block";
//
 //}

 const hamberga = document.querySelector('.menu-icon');//menu-icon
 const navlink = document.querySelector('.nav-links');//navlinks

 function myFunction(){
   const navlink = document.querySelector('.nav-links');//navlinks
   navlink.classList.toggle('hide');
 }