console.log("hey");

var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");

var listBlogs = {};

listLink.addEventListener("click", function(event) {
  addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");
});

let blogRequest = new XMLHttpRequest();
blogRequest.addEventListener("load", blogRequestComplete);
blogRequest.addEventListener("error", blogRequestFailed);
function blogRequestComplete(event){
    console.log("blogss have loaded");
    listBlogs = JSON.parse(event.target.responseText);
    console.log("song data", listBlogs);
    showData(listBlogs);
}
function showData(blogs, item){

    var indBlogs = Object.keys(listBlogs);
    console.log("indSongs", indBlogs);
    let blogDiv = document.getElementById("list-view-here");
    
    indBlogs.forEach(function(id, index) {
      console.log("listBlogs", listBlogs);
      console.log("index", index)
      console.log("id", id);


      blogDiv.innerHTML += `<div class='list-content' id='songCard'>
    <div class="Song1 specific-song">
    <h2>${listBlogs[id].title}</h2>
    <h4 class="song1list artist-name">${listBlogs[id].date}</h4>
    <h4 class="song1list album-name">${listBlogs[id].author}</h4>
    <h4 class="song1list genre-type">${listBlogs[id].entry}</h4>
    <p class="song1list keyword-type">${listBlogs[id].keywords}</p>
    <button class='deleteBtn'>Delete</button>
    </div></div>`
    });
    

    $(".deleteBtn").on("click", function(){
      $(this).parent().parent().remove()
  });
    
    // console.log("delete button", deleteButton.childNodes);
    // deleteButton.addEventListener("click", function() {
      //    wholeblogDiv.classList.add("hidden");
      // }) 
    }
    
// var deleteButton = document.getElementById("button");
// for (let i = 0; i < deleteButton.length; i++) {
//   let newDeleteButton = deleteButton[i];
//   console.log(newDeleteButton);
// }
function blogRequestFailed(event) {
    console.log("dataFailed", event);
}
blogRequest.open("GET", "blog1.json");
blogRequest.send();