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

}
'use strict';

$.ajax({
  url:"javascripts/blog1.json"
}).done(goJquery);

function goJquery(blogList) {
  let display = "";
  console.log(blogList.blogs);

  for(let i = 0; i < blogList.blogs.length; i++) {
    let currentBlog = blogList.blogs[i];
    console.log(currentBlog);
   
    display += (`<div class="blog-card">
                <div>
                <h1>${currentBlog.title}</h1>
                <h3>${currentBlog.date}</h3>
                <h3>${currentBlog.author}</h3>
                <p>${currentBlog.entry}</p>
                <p>${currentBlog.keywords}</p>
                <button class="deleteBtn">Delete</button>
                </div></div>`);
    
                $("#list-view-here").html(display);
  }


$(".deleteBtn").on("click", function(){
    $(this).parent().parent().remove();
});
}


