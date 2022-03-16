// set current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();


// Hangle reviewForm submit
document.getElementById("reviewForm")
.addEventListener("submit", (event) => {
    event.preventDefault();

    const reviewTitle = document.getElementById("reviewTitle").value,
      reviewText = document.getElementById("reviewText").value,
      reviewName = document.getElementById("reviewName").value;

    const card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-6", "py-3");

    card.innerHTML = `
    <div class="card h-100 bg-light text-dark">
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


// Function to toggle theme
const toggleTheme = () => {
    document.body.classList.toggle("bg-dark");

    document.querySelectorAll(".themeSwitchLabel").forEach(label => label.classList.toggle("text-light"));

    document.querySelector("nav").classList.toggle("navbar-dark");
    document.querySelector("nav").classList.toggle("bg-dark");

    document.getElementById("home").classList.toggle("bg-dark");
    document.getElementById("home").classList.toggle("text-light");

    document.getElementById("about").classList.toggle("bg-dark");
    document.getElementById("about").classList.toggle("text-light");
    
    document.getElementById("products").classList.toggle("bg-dark");
    document.getElementById("products").classList.toggle("text-light");
    
    document.getElementById("reviews").classList.toggle("bg-dark");
    document.getElementById("reviews").classList.toggle("text-light");

    document.getElementById("contact").classList.toggle("bg-dark");
    document.getElementById("contact").classList.toggle("text-light");
}


// Handle theme switching
document.getElementById("themeSwitch").addEventListener("change", (event) => {
  
  // toggle theme button icon
  if (event.target.checked) {
    document.querySelector("label[for=themeSwitch]").classList.remove("bi-moon-fill");
    document.querySelector("label[for=themeSwitch]").classList.add("bi-brightness-high-fill");
  } else {
    document.querySelector("label[for=themeSwitch]").classList.add("bi-moon-fill");
    document.querySelector("label[for=themeSwitch]").classList.remove("bi-brightness-high-fill");
  }

  // toggle theme
  toggleTheme()
});