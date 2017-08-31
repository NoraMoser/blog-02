let blogs1 = [
    {
       title: "Week 1",
       date: "July 5",
       author: "Nora Moser",
       entry: "Learned very basic javascript. Very basic.  I feel like most people understand it better than me.  We did basic HTML and CSS as well, but mostly stuff I knew.  I did learn how to do nav bars better.  I also learned a lot about using git and github.  That’s what I’ve spent the most time on.",
       keywords: "javascript"
    },
    {
        title: "Week 2",
        date: "July 10",
        author: "Nora Moser",
        entry: "Did my first javascript exercise without help. Feel much more comfortable with git and github. Completed HTML and CSS portion of the exercises.",
        keywords: "javascript"
     },
     {
        title: "Week 3",
        date: "July 17",
        author: "Nora Moser",
        entry: "IIFEs. translator.",
        keywords: "IIFE"
     },
     {
        title: "Week 4",
        date: "July 24",
        author: "Nora Moser",
        entry: "event listeners.",
        keywords: "event listeners"
     },
     {
        title: "Week 5",
        date: "July 31",
        author: "Nora Moser",
        entry: "chaining and string manipulation",
        keywords: "chaining, string manipulation"
     },
     {
        title: "Week 6",
        date: "August 7",
        author: "Nora Moser",
        entry: "jquery and some json",
        keywords: "jquery"
     },
     {
        title: "Week 7",
        date: "August 14",
        author: "Nora Moser",
        entry: "json and firebase.",
        keywords: "json"
     },
     {
        title: "Week 8",
        date: "August 21",
        author: "Nora Moser",
        entry: "API documentation and firebase.",
        keywords: "API"
     },
];

let contentArea = document.getElementById("list-view");
var contentArea2 = document.getElementById("add-view-div");

addToDom();
function addToDom(){
for (i = 0; i < blogs1.length; i++) {
	console.log(blogs1[i]);
	contentArea.innerHTML += `<div class="blog-one">
								<h2>${blogs1[i].title}</h2>
								<h4 class="bloglist">${blogs1[i].date}</h4>
								<h4 class="bloglist">${blogs1[i].author}</h4>
                                <h4 class="bloglist">${blogs1[i].entry}</h4>
                                <p class="bloglist">${blogs1[i].keywords}</p>
								</div>`;
	
	
};
};