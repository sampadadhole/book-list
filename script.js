//BOOK constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI(){}

//Add Book to list
UI.prototype.addBooktoList =  function(book){
    const list = document.querySelector("#book-list");
    //const tr element
    const row = document.createElement("tr");
    //insert columns
    // console.log(row);
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class="delete" >X</td>`;
// console.log(row);
    list.appendChild(row);
    console.log(list);
    
}
//show alert
UI.prototype.showAlert= function(message, className){
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    setTimeout(noerror, 3000);
}
function noerror(){
    document.querySelector(".alert").remove();  
}
//clear fields
UI.prototype.clearFields = function(){
    document.querySelector("#title").value ="";
    document.querySelector("#Author").value ="";
    document.querySelector("#isbn").value ="";
}

//Variables
const formId = document.querySelector("#book-form");
const bookList = document.querySelector("#book-list");
const deleteBtn = document.querySelector(".delete");


//Event Listeners
formId.addEventListener("submit", getLatestDetails);
bookList.addEventListener("click", deleteItems);

//functions

function getLatestDetails(e){

// alert(1);
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#Author").value;
    const isbn = document.querySelector("#isbn").value;

    //instantiate book details
    const book = new Book(title, author, isbn);
    // console.log(book);
    // instantiate UI
    const ui = new UI();

    //validate inputs
    if(title ==="" || author ==="" || isbn==="")
    {
        
        ui.showAlert("Please Fill in all the fields","error");
    }else{
        
    ui.addBooktoList(book);
    ui.showAlert("Book Added!", "success");
    //clear inputs
    ui.clearFields();

    }


    e.preventDefault();
}

//delete items
function deleteItems(e){
    // console.log(e.target.parentElement);
    if(bookList.contains(document.querySelector(".delete")))
    {
        // alert(1);
        // console.log(bookList);
        const parEl = e.target.parentElement.parentElement;
        console.log(parEl);
        parEl.remove();
        const ui = new UI();
        
        ui.showAlert("Book Removed!","success");
    }
    
    e.preventDefault();
}




