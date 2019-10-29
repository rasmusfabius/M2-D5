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
  var search = document.querySelector("header > div > div:last-child a:first-child");
  search.remove();
}

// EX13) Write a function to change the background of the jumbotron

function changeBackground(color) {
  var jumboColor = document.querySelector(".jumbotron");
  jumboColor.classList.remove("bg-dark");
  jumboColor.style.background = color;
}

//    EX14) Write a function to change the color of the main title

function changeColorMainTitle(color) {
  document.querySelector("h1").style.color = color;
}

//  EX15) Write a function to change the column size for post headings

function changeColumnSize(size) {
  var posts = document.querySelectorAll(".blog-post");
  posts.forEach(function(post) {
    post.style.width = size + "px";
  });
}

//EX16) Write a function to remove all the links under "Elsewhere"

function removeElsewhere() {
  var toBeRemoved = document.querySelector("aside div:last-child ol");
  toBeRemoved.remove();
}
//  EX17) Write a function to trim just the first 150 characters for each blog post
function trim100() {
  var firstPostParagraph = document.querySelectorAll(".blog-post .blog-post-meta + p");
  // firstPostParagraph[0].innerText = firstPostParagraph[0].innerText.substring(0, 100);
  for (var i = 0; i < firstPostParagraph.length; i++) {
    firstPostParagraph[i].innerText = firstPostParagraph[i].innerText.substring(0, 100);
  }
}
//EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
function addBlogPost(blogName) {
  var newblogPost = document.createElement("div");
  newblogPost.className = "blog-post";
  var title = document.createElement("h2");
  title.textContent = blogName;
  newblogPost.append(title);
  var paginationBlog = document.querySelector(".blog-pagination");
  paginationBlog.before(newblogPost);
}
var buttonNewer = document.querySelector(".blog-pagination a:last-child");
buttonNewer.onclick = function(event) {
  event.preventDefault();
  addBlogPost("rasmus");
};

//EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post

var buttonOlder = document.querySelector(".blog-pagination a:first-child");

function removeBlogPost() {
  var tbr = document.querySelector(".blog-post:last-of-type");
  tbr.remove();
}

//EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name

var authors = document.querySelectorAll(".blog-post-meta a");

function onHover(event) {
  console.log("name is", event.target.textContent);
}

for (var authorElements of authors) {
  authorElements.onmouseover = onHover;
}
