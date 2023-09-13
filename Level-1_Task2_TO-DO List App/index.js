const items = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
console.log(items);
var button = document.getElementById("enter");

button.addEventListener('click',() =>{
    const item = document.getElementById("input");
    createItem(item);
})

function createItem(item){
    items.push(item.value);
    localStorage.setItem("items",JSON.stringify(items));
    location.reload();
}

function displayItems()
{
    let real_item="";
    for(let i=0;i<items.length;i++)
    {
        real_item+=` <div class="data">
        <div class="input-controller">
        <textarea disabled>${items[i]}</textarea>
        <div class="edit-controller">
        <i class="fa-regular fa-pen-to-square editbtn"></i>
        <i class="fa-solid fa-trash-alt deletebtn"></i>
        </div>
        </div>

    <div class="update-controller">
        <button class="save" >Save</button>
        <button class="edit" >Cancel</button>
    </div>

    </div>`;
    }
    document.querySelector(".result").innerHTML = real_item;

    activateDeleteListeners();
    activateEditListeners();
    activateSaveListeners();
    activateCancelListeners();
}

function activateDeleteListeners()
{
    let deletebtn = document.querySelectorAll(".deletebtn")
    deletebtn.forEach((db, i) =>{
        db.addEventListener('click', () => {
            deleteItem(i); 
        })
    })
}

function deleteItem(index){  
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
    location.reload();
}

function activateEditListeners() {
    let editbtns = document.querySelectorAll(".editbtn");
    const updateControllers = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller textarea");

    editbtns.forEach((eb, i) => {
        eb.addEventListener('click', () => {
            updateControllers[i].style.display = "block";
            inputs[i].disabled = false;
        });
    });
}

function activateSaveListeners() {

    const savebtns = document.querySelectorAll(".save");
    const inputs = document.querySelectorAll(".input-controller textarea");

    savebtns.forEach((sb, i) => {
        sb.addEventListener('click', () => {
            updateItem(inputs[i].value,i);
        });
    });
}
function updateItem(text,i)
{
    items[i]=text;
    localStorage.setItem("items", JSON.stringify(items));
    location.reload();
}

function activateCancelListeners() {

    const cancelbtns = document.querySelectorAll(".edit");
    const updatecontroller=document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller textarea");

    cancelbtns.forEach((cb, i) => {
        cb.addEventListener('click', () => {
            updatecontroller[i].style.display="none";
            inputs[i].disabled=true;
        });
    });
}

window.onload = function()
{
    displayItems();
}
