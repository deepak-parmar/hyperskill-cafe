document.getElementById("reviewForm")
.addEventListener("submit", (event) => {
    event.preventDefault();

    const reviewTitle = document.getElementById("reviewTitle").value,
        reviewText = document.getElementById("reviewText").value,
        reviewName = document.getElementById("reviewName").value;

    const card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-6", "py-3");

    card.innerHTML = `
    <div class="card h-100">
      <div class="card-body">
        <h4 class="card-title">${ reviewTitle }</h4>
        <blockquote class="blockquote mb-0">
          <p>${ reviewText }</p>
          <footer class="blockquote-footer text-end">
            <i>${ reviewName !== '' ? reviewName : "Anonymous" }</i>
          </footer>
        </blockquote>
      </div>
    </div>
    `;

    document.getElementById("reviewsRow").append(card);
})

/*
    // LOOOONG WAY TO DO THE ABOVE

    const cardCol = document.createElement("div");
    cardCol.classList.add("col-lg-4", "col-md-6", "my-3");

    const card = document.createElement("div");
    card.classList.add("card", "h-100");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = reviewTitle;

    const blockquote = document.createElement("blockquote");
    blockquote.classList.add("blockquote", "mb-0");

    const comment = document.createElement('p');
    comment.textContent = reviewText;

    const blockquoteFooter = document.createElement("footer");
    blockquoteFooter.classList.add("blockquote-footer", "text-end");
    blockquoteFooter.innerHTML = `<i>${ reviewName !== '' ? reviewName : "Anonymous" }</i>`;

    blockquote.append(comment);
    blockquote.append(blockquoteFooter);

    cardBody.append(cardTitle);
    cardBody.append(blockquote);

    card.append(cardBody);

    cardCol.append(card);

    document.getElementById("reviewsRow").append(cardCol);
* */