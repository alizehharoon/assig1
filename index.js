function addBook() {
    // Get title and author input values
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;

    if (title && author) {
        var newBookSection = document.createElement("div");
        newBookSection.className = "book-section mb-3";

        var titleParagraph = document.createElement("p");
        titleParagraph.textContent = title;
        var authorParagraph = document.createElement("p");
        authorParagraph.textContent = author;

        var removeButton = document.createElement("button");
        removeButton.className = "btn btn-danger";
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            newBookSection.remove();
        };

        newBookSection.appendChild(titleParagraph);
        newBookSection.appendChild(authorParagraph);
        newBookSection.appendChild(removeButton);

        document.querySelector(".container").insertBefore(newBookSection, document.querySelector(".form-group"));

        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
    } else {
        alert("Please enter both title and author.");
    }
}

function removeBookSection(element) {
    var bookSection = element.closest(".book-section");
    if (bookSection) {
        bookSection.remove();
    }
}