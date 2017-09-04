'use strict';

console.log("hi");

let List = require("./list.js");


// console.log("Blog:", Blog);

var listBlogs2= {};

addEventListener();
blogRequest2();
function addEventListener() {
  var addLink = document.getElementById("link-add");
  var addView = document.getElementById("add-view");
  var listLink = document.getElementById("link-list");
  var listView = document.getElementById("list-view");
  

addLink.addEventListener("click", function() {
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

  var inputButton = document.getElementById("addButton");
  
  inputButton.addEventListener("click", function(){
    
    displayNewBlogs();
    displayOriginalBlogs(listBlogs2);
    
  });
});
}
function blogRequest2() {
  let blogRequest2 = new XMLHttpRequest();
  blogRequest2.addEventListener("load", blogRequestComplete);
  // blogRequest2.addEventListener("error", blogRequestFailed);
  function blogRequestComplete(event){
      console.log("blogss have loaded");
      listBlogs2 = JSON.parse(event.target.responseText);
      console.log("song data", listBlogs2);
      // displayOriginalBlogs(listBlogs2);
  }

}


function displayNewBlogs() {
  var blogTitleInput = document.getElementById("title");
  var blogDateInput = document.getElementById("date");
  var blogAuthorInput = document.getElementById("author");
  var blogEntryInput = document.getElementById("entry");
  var blogKeywordInput = document.getElementById("keywords");
  
  listBlogs2.unshift({title: blogTitleInput.value, date: blogDateInput.value, author: blogAuthorInput.value, entry: blogEntryInput.value, keywords: blogKeywordInput.value});
  
}

function displayOriginalBlogs() {
  
  var indBlogs2 = Object.keys(listBlogs2);
  console.log("indSongs", indBlogs2);
  var contentArea2 = document.getElementById("add-vieLw-div");
  
  indBlogs2.forEach(function(id, index) {
    console.log("listBlogs", listBlogs2);
    console.log("index", index);
    console.log("id", id);


    contentArea2.innerHTML += `<div class='list-content' id='songCard'>
  <div class="Song1 specific-song">
  <h2>${listBlogs2[id].title}</h2>
  <h4 class="song1list artist-name">${listBlogs2[id].date}</h4>
  <h4 class="song1list album-name">${listBlogs2[id].author}</h4>
  <h4 class="song1list genre-type">${listBlogs2[id].entry}</h4>
  <p class="song1list keyword-type">${listBlogs2[id].keywords}</p>
  <button class='deleteBtn'>Delete</button>
  </div></div>`;
  });
  
 
  }

  module.exports = {addEventListener, blogRequest2, displayNewBlogs, displayOriginalBlogs};