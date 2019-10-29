/*
        JS Exercises
        EX11) Write a function to add a new link into the navbar
        EX12) Write a function to remove the Search Looking class item
        EX13) Write a function to change the background of the jumbotron
        EX14) Write a function to change the color of the main title
        EX15) Write a function to change the column size for post headings
        EX16) Write a function to remove all the links under "Elsewhere"
        EX17) Write a function to trim just the first 150 characters for each blog post
        EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
        EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
        EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
    */
/* EX11) Write a function to add a new link into the navbar */

function addLink(name) {
  var navBar = document.querySelector(".nav");
  var addLink = document.createElement("a");
  addLink.innerText = name;
  navBar.appendChild(addLink);
}

/*   EX12) Write a function to remove the Search Looking class item */

function removeItem() {
  var element = document.querySelector(".text-muted");
  element.remove();
}

// EX13) Write a function to change the background of the jumbotron

function changeBackground(color) {
  var jumboColor = document.querySelector(".jumbotron");
  jumboColor.classList.remove("bg-dark");
  jumboColor.style.background = color;
}

//    EX14) Write a function to change the color of the main title

function changeColorMainTitle(color) {
  var mainTitle = document.querySelector("h1");
  mainTitle.style.color = color;
}

//  EX15) Write a function to change the column size for post headings

//EX16) Write a function to remove all the links under "Elsewhere"

function removeElsewhere() {
  var ol = document.querySelector(".list-unstyled");
  var listLength = ol.children.length;

  for (i = 0; i < listLength; i++) {
    ol.removeChild(ol.children[0]);
  }
}

//  EX17) Write a function to trim just the first 150 characters for each blog post
function trim50() {
  var blogPost = document.querySelectorAll(".blog-post").textContent;
  console.log(blogPost);
}
//EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
//EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
//EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
