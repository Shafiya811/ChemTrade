const toggle_btn = document.getElementById("checkbox");
const searchBar = document.getElementById("search");

console.log(toggle_btn);

toggle_btn.addEventListener("change", () => {
  if (toggle_btn.checked) {
    console.log(`checked`);
    document.body.classList.add("dark-mode");
    searchBar.style.backgroundColor = "#f2f2f2";
    card.style.color = "black";
  } else {
    console.log(`unchecked`);
    document.body.classList.remove("dark-mode");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Dummy data for chemicals
  const chemicalsData = [
    {
      name: "Toluene",
      imgURL: "../../images/chemimg.jpg",
      quantity: "1Kg",
      price: "100",
      seller: "xyz",
    },
    {
      name: "Chemical 1",
      imgURL: "../../images/chemimg.jpg",
      quantity: "1Kg",
      price: "100",
      seller: "xyz",
    },
    {
      name: "Chemical 2",
      imgURL: "../../images/chemimg.jpg",
      quantity: "1Kg",
      price: "100",
      seller: "xyz",
    },
    {
      name: "Chemical 3",
      imgURL: "../../images/chemimg.jpg",
      quantity: "1Kg",
      price: "100",
      seller: "xyz",
    },
    {
      name: "Chemical 7",
      imgURL: "../../images/chemimg.jpg",
      quantity: "1Kg",
      price: "100",
      seller: "xyz",
    },
    {
      name: "Chemical 4",
      type: "packaging",
      company: "GHI Chemicals",
      imgURL: "../../images/chemimg.jpg",
    },
    {
      name: "Chemical 4",
      type: "packaging",
      company: "GHI Chemicals",
      imgURL: "../../images/chemimg.jpg",
    },
    {
      name: "Chemical 4",
      type: "packaging",
      company: "GHI Chemicals",
      imgURL: "../../images/chemimg.jpg",
    },

    // Add more chemicals as needed
  ];

  // didnot add yet may include in future
  // Function to display chemicals based on filter
  function displayChemicals(filter) {
    const chemicalsContainer = document.getElementById("chemicals");
    chemicalsContainer.innerHTML = "";

    chemicalsData.forEach((chemical) => {
      if (filter === "all" || chemical.type === filter) {
        const card = document.createElement("div");
        card.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");
        card.innerHTML = `
                  <div class="card" id="chemCard">
                      <img src="${chemical.imgURL}" class="card-img-top" alt="${chemical.name}">
                      <div class="card-body" style="font-size: 15px;">
                          <h5 class="card-title" style="font-size: 20px;">${chemical.name}</h5>
                          <p class="card-text">Company: ${chemical.seller}</p>
                          <button class="btn btn-primary" style="font-size: 15px;">RFQ</button>
                      </div>
                  </div>
              `;
        chemicalsContainer.appendChild(card);
      }
    });
  }

  // Display all chemicals by default
  displayChemicals("all");

  // Filter options click event
  const filterOptions = document.querySelectorAll(".filter-option");
  filterOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");
      displayChemicals(filter);
    });
  });
});

