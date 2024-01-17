//index.html
// intro to events
// like click
// mousehover
// scroll

// 3 ways 
//1.add events directly on tags
// 2. 
//let btn = document.querySelector(".btn_headline")
//console.log(btn);
// btn.onclik = function(){
//     console.log("You clicked me !!!");
// }

//3.add ----------> addeventlistener


// normal function
let btn = document.querySelector(".btn_headline")
function ClickMe(){
    console.log("You Clicked Me !!!");
    console.log("value of this");
    console.log(this);
}
btn.addEventListener("click", ClickMe)


// arrow function
let btn1 = document.querySelector(".btn_headline")

btn1.addEventListener("click", () => {
        console.log("You Clicked Me !!!");
        console.log("value of this");
        console.log(this);
})



// add and remove todo 


let todoForm = document.querySelector(".Form_todo")
let Text = document.querySelector(".Form_todo input[type='text']")
let ul = document.querySelector(".todo-list")

todoForm.addEventListener("submit", function(e){
    e.preventDefault();    // stop refreshing
    let newText = Text.value;   // whatever we write 
    Text.value = "";            // clear after write

    let newLi = document.createElement("li")                        // it will create todo bar as in html code line no:46
    newLiInnerHTML = `<span class="text">${newText}</span>           
    <div class="todo-buttons">
        <button class="todo-btn Done">Done</button>
        <button class="todo-btn Remove">Remove</button>
    </div>`

    newLi.innerHTML = newLiInnerHTML                               // insert html block 

    ul.append(newLi)                                               // append li in ul 

})


ul.addEventListener("click", function(e){

    if(e.target.classList.contains("Done")){
        let LiSpan = e.target.parentNode.previousElementSibling;
        LiSpan.style.textDecoration = "line-through"
    }
    if(e.target.classList.contains("Remove")){
        let removeIt = e.target.parentNode.parentNode;
        removeIt.remove()
    }  
})