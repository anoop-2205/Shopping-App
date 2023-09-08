function renderCart() {
    const cartContainer = document.querySelector(".shopping-cart");
  
    
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    
    cartContainer.innerHTML = "";
  
    
    cart.forEach((item, index) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("box");
  
      cartItemDiv.innerHTML = `
       <i class="fa fa-trash" onclick="removeCartItem(${index})"></i>
       <h4 class="sign" onclick="addproductincart(${index})">+</h4>
          <h4 class="negsign" onclick="removeproductincart(${index})">-</h4>
        <img src="${item.imageUrl}">
        <div class="content">
          <h3>${item.name}</h3>
          <span class="price">₹${item.price}</span>
          <span class="quantity">Quantity: ${item.quantity}</span>
          

        </div>
      `;
  
      cartContainer.appendChild(cartItemDiv);
    });
  
    
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price.replace("Price: ₹", "")) * item.quantity, 0);
    const totalElement = document.createElement("div");
    totalElement.classList.add("total");
    totalElement.textContent = `Total: ₹${totalPrice}`;
    cartContainer.appendChild(totalElement);
  }
  
  
  function removeCartItem(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
  
  
  window.addEventListener("load", renderCart);


  function openThank() {
    window.open('Last_page.html', '_blank');
  }


  function addproductincart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
  
  function removeproductincart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    } else {
      cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  
		function backtocart() {
        window.open('index.html', '_blank');
        }
  







  
  