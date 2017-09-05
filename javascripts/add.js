'use strict';



$("#addButton").click(function() {
  console.log("doing the thing");
  displayNewBlogs();
  getBlogs();
});

function getBlogs(){
  console.log("is this on?");
  $.ajax({
    url:"javascripts/blog1.json"
  }).done(goJquery);
  
  function goJquery(blogList2) {
    console.log("how about this?");
    let display2 = "";
    // console.log(blogList.blogs);
  
    for(let i = 0; i < blogList2.blogs.length; i++) {
      let currentBlog2 = blogList2.blogs[i];
      // console.log(currentBlog);
     
            display2 += (`<div class="blog-card">
                  <div>
                  <h1>${currentBlog2.title}</h1>
                  <h3>${currentBlog2.date}</h3>
                  <h3>${currentBlog2.author}</h3>
                  <p>${currentBlog2.entry}</p>
                  <p>${currentBlog2.keywords}</p>
                  <button class="deleteBtn">Delete</button>
                  </div></div>`);
      
                  $("#add-view-div").html(display2);
    }
  
  
  $(".deleteBtn").on("click", function(){
      $(this).parent().parent().remove();
  });
}
}
function displayNewBlogs() {
  let submittedBlog = {};
  console.log("I'm here!");
  submittedBlog.title = $("#title").val();
  submittedBlog.author = $("#author").val();
  submittedBlog.date = $("#date").val();
  submittedBlog.keywords = $("#keywords").val();
  submittedBlog.entry = $("#entry").val();
  $("#title").val("");
  $("#author").val("");
  $("#keywords").val("");
  $("#entry").val("");
  $("#date").val("");
  $("#new-add-div").append(`<div class="blog-card">
                            <div>
                            <h1>${submittedBlog.title}</h1>
                            <h3>${submittedBlog.date}</h3>
                            <h3>${submittedBlog.author}</h3>
                            <p>${submittedBlog.entry}</p>
                            <p>${submittedBlog.keywords}</p>
                            <button class="deleteBtn">Delete</button>
                            </div></div>
                            `);
  $(".delBtn").on("click", function(){
      $(this).parent().remove();
  });
  
  // currentBlog2.unshift({title: $("#title").val(), date: $("#date").val(), author: $("#author").val(), entry: $("#entry").val(), keywords: $("#keywords").val()});  // contentArea.innerHTML += songsTwo;
  // console.log(blogList2);
}
// console.log("hi");

// let List = require("./list.js");



// var listBlogs2= {};

// addEventListener();
// blogRequest2();

// function blogRequest2() {
//   let blogRequest2 = new XMLHttpRequest();
//   blogRequest2.addEventListener("load", blogRequestComplete);
//   blogRequest2.addEventListener("error", blogRequestFailed);
//   function blogRequestComplete(event){
//       console.log("blogss have loaded");
//       listBlogs2 = JSON.parse(event.target.responseText);
//       console.log("song data", listBlogs2);
//       displayOriginalBlogs(listBlogs2);
//   }

// }


// function displayNewBlogs() {
//   var blogTitleInput = document.getElementById("title");
//   var blogDateInput = document.getElementById("date");
//   var blogAuthorInput = document.getElementById("author");
//   var blogEntryInput = document.getElementById("entry");
//   var blogKeywordInput = document.getElementById("keywords");
  
//   listBlogs2.unshift({title: blogTitleInput.value, date: blogDateInput.value, author: blogAuthorInput.value, entry: blogEntryInput.value, keywords: blogKeywordInput.value});
  
// }

// function displayOriginalBlogs() {
  
//   var indBlogs2 = Object.keys(listBlogs2);
//   console.log("indSongs", indBlogs2);
//   var contentArea2 = document.getElementById("add-vieLw-div");
  
//   indBlogs2.forEach(function(id, index) {
//     console.log("listBlogs", listBlogs2);
//     console.log("index", index);
//     console.log("id", id);


//     contentArea2.innerHTML += `<div class='list-content' id='songCard'>
//   <div class="Song1 specific-song">
//   <h2>${listBlogs2[id].title}</h2>
//   <h4 class="song1list artist-name">${listBlogs2[id].date}</h4>
//   <h4 class="song1list album-name">${listBlogs2[id].author}</h4>
//   <h4 class="song1list genre-type">${listBlogs2[id].entry}</h4>
//   <p class="song1list keyword-type">${listBlogs2[id].keywords}</p>
//   <button class='deleteBtn'>Delete</button>
//   </div></div>`;
//   });
  
 
//   }

//   module.exports = {addEventListener, blogRequest2, displayNewBlogs, displayOriginalBlogs};