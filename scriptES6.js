
class Book{
    constructor(title, author, isbn)
    {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI{

    addBooktoList(book)
    {
        const list = document.querySelector("#book-list");
        const row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href="#" class="delete">X</td>`;
        list.appendChild(row);
        console.log(list);
    }
    clearFields(){
        document.querySelector("#title").value ="";
    document.querySelector("#Author").value ="";
    document.querySelector("#isbn").value ="";
    }

    showAlert(message,className){
        const div = document.createElement("div");
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);

        setTimeout(timeInt, 2000);
    }

    
}
//variables
const formId =  document.querySelector("#book-form");
const bookList = document.querySelector("#book-list");
//addEventListener
formId.addEventListener("submit", getLatestDetails);
bookList.addEventListener("click", deleteList);

function getLatestDetails(e){
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#Author").value;
    const isbn = document.querySelector("#isbn").value;

    //instantiate book details
    const book = new Book(title, author, isbn);
    // console.log(book);
    //instantiate ui
    const ui = new UI();
    // if input are null
    if(title ==="" || author ==="" || isbn ==="")
    {
        ui.showAlert("Please Fill all the details", "error");
       
    }
    else{
        //addBooktoList instantiate
    ui.addBooktoList(book);
    ui.showAlert("Book Added!", "success");

    //clear Fields
    ui.clearFields();
    }
    

    e.preventDefault();
}

function timeInt(){
    document.querySelector(".alert").remove();
}

function deleteList(e){
    if(bookList.contains(document.querySelector(".delete")))
    {
        const parEl = e.target.parentElement.parentElement;
        parEl.remove();
        const ui = new UI();
        ui.showAlert("Book removed!", "success");
    }
    
}