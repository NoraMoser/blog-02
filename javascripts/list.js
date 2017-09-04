'use strict';

$.ajax({
  url:"javascripts/blog1.json"
}).done(goJquery);

function goJquery(blogList) {
  let display = "";
  console.log(blogList.blogs);

  for(let i = 0; i < blogList.blogs.length; i++) {
    var currentBlog = blogList.blogs[i];
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

