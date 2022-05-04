window.onload = function setTemplate() {
    document.getElementById('allComments').innerHTML = localStorage.getItem('template');
};

const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
   addComment(ev);
});

function addComment(ev) {
    let commentText, wrapDiv;
    const textBox = document.createElement('div');
    const dateLabel = document.createElement('button');
    dateLabel.className = 'reply';

    const journalDate = new Date();
    const journalDay = journalDate.getDate();
    const journalMonth = journalDate.getMonth() + 1; // getUTCMonth() returns month from 0 to 11
    const journalYear = journalDate.getFullYear();
    
    const entryDate = `0${journalDay}/0${journalMonth}/${journalYear}`;
    // document.getElementById("demo").innerHTML = entryDate;

    dateLabel.innerHTML = entryDate;
    if(hasClass(ev.target.parentElement, 'journalContainer')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        wrapDiv.style.marginLeft = 0;
        commentText = document.getElementById('comment').value;
        document.getElementById('comment').value = '';
        textBox.innerHTML = commentText; 

        // assigns a different colour to each comment at random
        // var colors = ['#feb8c2', '#f7c775', '#7796f2', '#4ad996'];
        // var random_color = colors[Math.floor(Math.random() * colors.length)];
        // textBox.style.backgroundColor = random_color;
        // textBox.style.backgroundColor = "#f8efe8";
    
        textBox.style.border = "1.5px solid #202124";

        // comment and date appear
        wrapDiv.append(textBox, dateLabel);
        commentContainer.appendChild(wrapDiv);
    } else {
        wrapDiv = ev.target.parentElement;
        commentText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentText;
        // styling for replies
        textBox.style.backgroundColor = "#fec4c3";
        wrapDiv.innerHTML = '';
        wrapDiv.append(textBox, dateLabel);
    }
    setOnLocalStorage();
}

function setOnLocalStorage () {
    localStorage.setItem('template', document.getElementById('allComments').innerHTML);
}
function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

// localStorage.clear();


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


  

/* –––––––––– */
/* REFERENCES */
/* –––––––––– */

// TEXT SLIDER: https://codepen.io/marklc44/pen/RKPdEV


