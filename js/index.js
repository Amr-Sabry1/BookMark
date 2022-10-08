var bookmarkName = document.getElementById('bookmarkName')
var websiteUrl = document.getElementById('websiteUrl')
var bookList;

if (localStorage.getItem("list") != null) {
    bookList = JSON.parse(localStorage.getItem("list"))
    displayBookmark(bookList)
} else {
    productList = []
}


var submit = document.getElementById("submit")
submit.addEventListener("click", function() {

        function warnName() {
            document.getElementById("warnName").innerHTML = `<p class="m-1 text-danger">Name Is required</p>`
        }

        function warnUrl() {
            document.getElementById("warnUrl").innerHTML = `<p class="m-1 text-danger">URL Is required</p>`
        }



        if (bookmarkName.value == "" || websiteUrl.value == "") {
            warnName()
            warnUrl()
            return;
        }
        var mark = {
            name: bookmarkName.value,
            url: websiteUrl.value
        }
        bookList.push(mark);
        clearForm()
        document.getElementById("warnName").innerHTML = ``
        document.getElementById("warnUrl").innerHTML = ``
        localStorage.setItem("list", JSON.stringify(bookList))
        displayBookmark(bookList)
    }

)


function clearForm() {
    bookmarkName.value = "",
        websiteUrl.value = ""
}

function deleteMark(index) {
    bookList.splice(index, 1)

    displayBookmark(bookList)
    localStorage.setItem("list", JSON.stringify(bookList))
}

function displayBookmark(list) {
    cartona = ""
    for (var i = 0; i < list.length; i++) {
        cartona += ` <div class="website">
                <div class="display">
                <h6 class="fs-5 fw-bold">${list[i].name}</h6>
                <div>
              <button class=" btn btn-outline-primary"><a href="${list[i].url}" target="_blank">Visit</a></button>
                    <button class=" btn btn-outline-danger" onclick="deleteMark()" >Delete</button>
                </div>
                </div> 
                </div>`
    }
    document.getElementById("website").innerHTML = cartona

}