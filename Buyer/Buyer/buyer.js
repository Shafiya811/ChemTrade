const toggle_btn = document.getElementById("checkbox");


toggle_btn.addEventListener("change", () => {
  if (toggle_btn.checked) {
    // console.log(`checked`);
    document.body.classList.add("dark-mode");
    card.style.color= "black";
  } else {
    // console.log(`unchecked`);
    document.body.classList.remove("dark-mode");
  }
});


document.addEventListener('DOMContentLoaded', function () {
  console.log("data loaded");

  const products = [
      {
          name: "Toluene",
          image: "../images/chemicals2.jpg",
          quantity: "1Kg",
          price: "100",
          seller: "xyz",
      },
      {
          name: "Chemical 1",
          image: "../images/chemimg.jpg",
          quantity: "1Kg",
          price: "100",
          seller: "xyz",
      },
      {
          name: "Chemical 2",
          image: "../images/chemicals.jpg",
          quantity: "1Kg",
          price: "100",
          seller: "xyz",
      },
      {
          name: "Chemical 3",
          image: "../images/chemimg.jpg",
          quantity: "1Kg",
          price: "100",
          seller: "xyz",
      },
      {
          name: "Chemical 7",
          image: "../images/chemimg.jpg",
          quantity: "1Kg",
          price: "100",
          seller: "xyz",
      },
  ];

  function displayProducts(products) {
      const productList = document.getElementById('productList');
      productList.innerHTML = ''; // Clear existing products
      products.forEach(product => {
          const productCard = `
              <div class="col-md-4">
                  <div class="card">
                      <img src="${product.image}" class="card-img-top" alt="${product.name}">
                      <div class="card-body">
                          <h5 class="card-title">${product.name}</h5>
                          <p class="card-text">Seller: ${product.seller}</p>
                          <p class="card-text">Price: $${product.price}</p>
                          <button class="btn btn-primary add-to-cart" data-product='${JSON.stringify(product)}'>Add to Cart</button>
                          <button class="btn btn-primary buy-now" data-product='${JSON.stringify(product)}' style="margin-left: 5px;">Buy Now</button>
                      </div>
                  </div>
              </div>
          `;
          productList.insertAdjacentHTML('beforeend', productCard);
      });

      document.querySelectorAll('.add-to-cart').forEach(button => {
          button.addEventListener('click', function () {
              const product = JSON.parse(this.getAttribute('data-product'));
              addToCart(product);
          });
      });

      document.querySelectorAll('.buy-now').forEach(button => {
          button.addEventListener('click', function () {
              const product = JSON.parse(this.getAttribute('data-product'));
              buyNow(product);
          });
      });
  }

  function addToCart(product) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart');
  }

  function displayCart() {
      const productList = document.getElementById('productList');
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      productList.innerHTML = ''; // Clear existing products
      if (cart.length === 0) {
          productList.innerHTML = '<p>Your cart is empty</p>';
          return;
      }
      cart.forEach(product => {
          const productCard = `
              <div class="col-md-4">
                  <div class="card">
                      <img src="${product.image}" class="card-img-top" alt="${product.name}">
                      <div class="card-body">
                          <h5 class="card-title">${product.name}</h5>
                          <p class="card-text">Seller: ${product.seller}</p>
                          <p class="card-text">Price: $${product.price}</p>
                          <button class="btn btn-primary buy-now" data-product='${JSON.stringify(product)}'>Buy Now</button>
                          <button class="btn btn-danger delete-order" data-id="${product.name}">Delete</button>

                      </div>
                  </div>
              </div>
          `;
          productList.insertAdjacentHTML('beforeend', productCard);
      });

      document.querySelectorAll('.buy-now').forEach(button => {
          button.addEventListener('click', function () {
              const product = JSON.parse(this.getAttribute('data-product'));
              buyNow(product);
          });
      });
  }

  function buyNow(product) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = {
        id: Date.now(), // Unique ID for each order
        ...product,
        orderDate: new Date().toLocaleDateString(),
        expectedDelivery: calculateExpectedDeliveryDate(),
        status: "Pending"
    };
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    alert('Product added to orders');
    // Redirect to the orders page
    window.location.href = 'orders.html'; // Adjust this path as needed
}
  function calculateExpectedDeliveryDate() {
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 7); // Set delivery date to one week from now
      return deliveryDate.toLocaleDateString();
  }

  document.getElementById('searchBar').addEventListener('input', function () {
      const query = this.value.toLowerCase();
      const filteredProducts = products.filter(product => {
          return product.name.toLowerCase().includes(query) ||
              product.seller.toLowerCase().includes(query) ||
              product.price.toString().includes(query);
      });
      displayProducts(filteredProducts);
  });

  const viewCartLink = document.getElementById('viewCartLink');
  if (viewCartLink) {
      viewCartLink.addEventListener('click', function (event) {
          event.preventDefault();
          displayCart();
      });
  }

  displayProducts(products);

  const updateProfileLink = document.getElementById('updateProfileLink');
  const changePasswordLink = document.getElementById('changePasswordLink');
  const updateProfileSection = document.getElementById('updateProfileSection');
  const changePasswordSection = document.getElementById('changePasswordSection');

  if (updateProfileLink && changePasswordLink && updateProfileSection && changePasswordSection) {
      updateProfileLink.addEventListener('click', function (event) {
          event.preventDefault();
          updateProfileSection.style.display = 'block';
          changePasswordSection.style.display = 'none';
      });

      changePasswordLink.addEventListener('click', function (event) {
          event.preventDefault();
          updateProfileSection.style.display = 'none';
          changePasswordSection.style.display = 'block';
      });

      // Initially show the update profile section and hide the change password section
      updateProfileSection.style.display = 'block';
      changePasswordSection.style.display = 'none';
  }

  // For orders page
  function displayOrderHistory() {
    const orderList = document.getElementById('orderList');
    if (!orderList) return;

    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    orderList.innerHTML = '';

    if (orders.length === 0) {
      orderList.innerHTML = '<p>No orders yet.</p>';
      return;
    }

    orders.forEach(order => {
      const orderCard = `
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${order.name}</h5>
              <p class="card-text">Price: $${order.price}</p>
              <p class="card-text">Ordered On: ${order.orderDate}</p>
              <p class="card-text">Expected Delivery: ${order.expectedDelivery}</p>
              <p class="card-text">Status: ${order.status}</p>
              <button class="btn btn-danger delete-order" data-id="${order.id}">Delete Order</button>
            </div>
          </div>
        </div>
      `;
      orderList.insertAdjacentHTML('beforeend', orderCard);
    });

    // Add event listeners for delete buttons
    orderList.addEventListener('click', function (event) {
      if (event.target.matches('.delete-order')) {
        const orderId = parseInt(event.target.dataset.id, 10);
        deleteOrder(orderId);
        displayOrderHistory();
      }
    });
  }


    // Add event listeners for delete buttons
    document.querySelectorAll('.delete-order').forEach(button => {
        button.addEventListener('click', function () {
            const orderId = parseInt(this.getAttribute('data-id'), 10);
            deleteOrder(orderId);
            displayOrderHistory(); // Refresh order history after deletion
        });
    });


function deleteOrder(orderId) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders = orders.filter(order => order.id !== orderId);
    localStorage.setItem('orders', JSON.stringify(orders));
}
  

  // Load order history if on the order page
  if (document.getElementById('orderList')) {
      displayOrderHistory();
  }
  console.log(orderList);
});
