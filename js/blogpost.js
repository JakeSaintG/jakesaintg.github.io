function populatePost() {

const title = document.getElementById('posttitle');
const author = document.getElementById("post_author");
const post = document.getElementById("post_content");

if (title == "") {
    alert("The title of your post must be filled out.");
    return
    }

if (author == "") {
    alert("Author must be filled out. You can use your real name, username, or pen name.");
    return
    }

if (post == "") {
    alert("Blog must be filled out. We want to hear what you have to say!");
    return
    }

let today = new Date(); // "new" operator prevents the date from being a string 
let d = today.getDate();
let m = today.getMonth()+1; //will return the month starting at 0, +1 is used to simulate returning the month starting at 1.
let y = today.getFullYear();

if(d<10) {
    d='0'+d; //adds a zero to the day if it is a single digit
} 

if(m<10) {
    m='0'+m; //adds a zero to the month if it is a single digit
} 
today = `${m}/${d}/${y}`; //formats the post date

const postContent = document.createElement("div")

postContent.innerHTML = `<article class="post_full">
<div class="post_head">
    <h1 class="post_title">${title.value}</h1>
    <div class="post_details">
        <h3 class="post_author">By: ${author.value}</h3>
        <h3 class="post_date">${today}</h3>
    </div>
</div>
<p class="post_content">${post.value} </p>
</article>`

document.getElementById("post").appendChild(postContent)

title.value = '';
author.value = '';
post.value = '';
}