// javascript file 


// to toggle text on button from reading 'light' and 'dark'. 
// code adapted from: https://www.w3schools.com/howto/howto_js_toggle_text.asp
//  for some reason this function works better when placed before to darkMode function

function toggleText() {
    var x = document.getElementById("toggleDIV");
    console.log(x.innerHTML);
    if (x.innerHTML === "dark") {
      x.innerHTML = "light";
    } else {
      x.innerHTML = "dark";
    }
  }

// function for dark mode, see toggle class in index.html where it is called
// code adapted from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode

function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");

  //  calling function, removed from html
  toggleText();
}














// do this bit later 

/* test code to 'reveal' link only the date specified, like an advent calender
code found here: https://stackoverflow.com/questions/33748648/how-can-i-hide-a-link-until-a-specific-date-and-time-arrives-html

if ( new Date() >= new Date("Mon Nov 23 2015 9:00") ) { 
   document.getElementById("links").innerHTML+= "<a href='target.html'>Some Link</a>";
} */
