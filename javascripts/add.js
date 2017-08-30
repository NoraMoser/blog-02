console.log("hi");

var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function() {
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

  var inputButton = document.getElementById("addButton");
  
  inputButton.addEventListener("click", function(){
    
    displayNewBlogs();
    displayOriginalBlogs();
    
  });
});



function displayNewBlogs() {
  var blogTitleInput = document.getElementById("title");
  var blogDateInput = document.getElementById("date");
  var blogAuthorInput = document.getElementById("author");
  var blogEntryInput = document.getElementById("entry");
  var blogKeywordInput = document.getElementById("keyword");
  
  blogs1.unshift({title: blogTitleInput.value, date: blogDateInput.value, author: blogAuthorInput.value, entry: blogEntryInput, keywords: blogKeywordInput});
  
}

function displayOriginalBlogs() {
  contentArea2.innerHTML = "";
  for (let j = 0; j < blogs1.length; j++) {
  

    contentArea2.innerHTML += `<div class="blog-one">
                                <h2>${blogs1[j].title}</h2>
                                <h4 class="bloglist">${blogs1[j].date}</h4>
                                <h4 class="bloglist">${blogs1[j].author}</h4>
                                <h4 class="bloglist">${blogs1[j].entry}</h4>
                                <p class="bloglist">${blogs1[j].keywords}</p>
                                </div>`;
                            
  }
 
  }