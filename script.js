async function fetchData() {
  
    const response = await fetch("https://my-json-server.typicode.com/anoop-2205/DatabaseShoping/Data");
       const data = await response.json();
    return data;
}

function renderData(data) {
  const main = document.getElementById("main");

  main.innerHTML = "";
  
  data.forEach((item) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <img src="${item.imageUrl}" />
      <div class="product-info">
        <h2>${item.name}</h2>
        
        <p class="price">Price: ₹${item.price}</p>
      </div>
      <div class="btn">
        <button class="addtocart" onclick="addToCart('${item.name}', '${item.price}','${item.imageUrl}')">Add to Cart</button>
       </div>

      <div class="btn">
          <button class="editproduct" onclick="editProduct('${item.id}')">Edit item</button>
         <button class="removeproduct" onclick="deleteProduct('${item.id}')">Delete item</button>
      </div>
    `;

    main.appendChild(productDiv);
  });
}
function addToCart(productName, productPrice, imageUrl) {
    const cartItem = {
    name: productName,
    price: productPrice,
    quantity: 1,
    imageUrl:imageUrl,
  };

  let cart = JSON.parse(localStorage.getItem("cart"));

  const existingItemIndex = cart.findIndex((item) => item.name === cartItem.name);
  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity++;
  } else {
    cart.push(cartItem);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function openAddToCartPage() {
  window.open('Addtocart/addtocart.html', '_blank');
}

window.addEventListener("load", async () => {
  const data = await fetchData();
  renderData(data);
});

function Aboutus(){
  window.open('About/Aboutus.html', '_blank');
}

function logout() {
  var confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
    window.open('Authantication/Registration-index.html', '_blank');
    }
}

function deleteProduct(itemId){
  const confirmDelete = confirm("Are you want to delete the product permanentlly?");
  if(confirmDelete){
    fetch(`https://my-json-server.typicode.com/anoop-2205/DatabaseShoping/Data/${itemId}`,{
      method:"DELETE",
    })
    .then((respose) =>respose.json())
    .then(()=>{
      fetchData()
      .then((data)=>{
        renderData(data);
      })
    })
  }
}

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", performSearch);

searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});

function performSearch() {
const searchQuery = searchInput.value.toLowerCase();
// console.log(searchQuery);

  fetchData()
    .then((data) => {
      const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
  );

  // console.log(filteredData);
  renderData(filteredData);
    })
}

function editProduct(productId) {

  fetch(`https://my-json-server.typicode.com/anoop-2205/DatabaseShoping/Data/${productId}`)
      .then((response) => response.json())
      .then((productData) => {
        
        const editNameInput = document.getElementById("editName");
        const editPriceInput = document.getElementById("editPrice");
        const editImageUrlInput = document.getElementById("editImageUrl");
        

        editNameInput.value = productData.name;
        editPriceInput.value = productData.price;
        editImageUrlInput.value = productData.imageUrl;

        
        const editModal = document.getElementById("editModal");
        editModal.style.display = "block";
      })
}

function closeEditModal() {
  const editModal = document.getElementById("editModal");
  editModal.style.display = "none";
}






   

























 


 
