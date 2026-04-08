



const T = document.querySelector(".textarea"); //this is connect text area
const B = document.querySelector(".buttoninput"); //this is connect button
const TDLIST = document.querySelector(".todolist");


const jbutton = document.querySelector(".buttoninput"); // this method is used for clicking button logic
jbutton.addEventListener("click", tabclick);


function tabclick() {
    //CREATE TASK CONTAINER
    const tododiv = document.createElement("div");
    tododiv.classList.add("divas");
    //CREATED PARAGRAPGH FOR TASK TEXT
    const item = document.createElement("p");
    item.classList.add("para");
    item.innerText = T.value;

    if (T.value === "") {   //  ///this is for when you are clicking unnesesaary inside box 
        // will not occur when you write something inside then it will occur
        alert(`HELLO I AM JAY PLEASE 
            PUT SOME TEXT INSIDE🙏`);
        return;
    }



    //CREATED DELETE BUTTON
    const dltbutton = document.createElement("button");
    dltbutton.classList.add("delete-btn");  // ✅ add class
    dltbutton.innerHTML = '<i class="fa-solid fa-xmark fa-2x"></i>'
    dltbutton.classList.add("delete-btn")
    
// ADDTEXT + BUTTON INSIDE CONTAINER
    tododiv.appendChild(item);
    TDLIST.appendChild(tododiv);
    tododiv.appendChild(dltbutton);
  
//DELETE TASK WHEN X BUTTON IS
    TDLIST.addEventListener("click", deleteitem);

    function deleteitem(e) {
        const item = e.target;

        // 🔥 check if clicked element OR its parent is delete button
        if (item.classList.contains("delete-btn") || item.parentElement.classList.contains("delete-btn")) {

            const btn = item.classList.contains("delete-btn") ? item : item.parentElement;
            const parent = btn.parentElement;

            parent.remove();
        }
    }

//CLEAR INPUT BOX
    T.value = "";// this is for when you write and click input box text alWAYS gone
}
function UpperCase() {
    const input = document.querySelector("T");
    T.value = T.value.toUpperCase();

}

const video = document.querySelector(".bg-video");
video.muted = true;
video.playsInline = true;
video.loop = true;
video.addEventListener('click', () => {
    video.play();
});

// Attempt autoplay
video.play().catch(() => {
    console.log("Autoplay blocked. Tap video to play.");
});

