// Danielsans js lines
console.log("new message");
const p = document.getElementById("blankParagraph");
p.textContent = "Hello from ...?";
const ul = document.getElementById("emptyList");
// this adds list items to html
ul.innerHTML = "<li>HTML</li>";
ul.innerHTML += "<li>CSS</li>";
ul.innerHTML += "<li>my list item</li>";

// colour to the ul and p elements 
p.style.color = "blue";
p.style.fontWeight = "italic";
ul.style.color = "green";
ul.style.fontWeight = "bold";


//colour for body
document.body.style.backgroundColor = "#fafafa";

// writes in html
document.write(7 * 6 )

// creats browser "alert window"
window.alert("the answer is: " + 23 + 19);
// using "" i could add text within the alert

// 2 paratasis chaged it from plus minus to just adding 23 and 19 together
window.alert("The answer is: " + (23 + 19));

// made it so that the elements in the body dissapared
document.body.innerHTML = "";