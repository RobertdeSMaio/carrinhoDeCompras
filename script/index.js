document.addEventListener("DOMContentLoaded", () => {
  const cart = [];
  const cartList = document.getElementById("cartList");
  const totalPriceElement = document.getElementById("totalPrice");

  function updatecart() {
    cartList.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `produto ${item.id} - R$${item.price}`;
      cartList.appendChild(listItem);
      totalPrice += item.price;
    });
    totalPriceElement.textContent = totalPrice;
  }
  document.querySelectorAll(".addToCart").forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.parentElement;
      const id = product.getAttribute("data-id");
      const price = parseFloat(product.getAttribute("data-price"));

      cart.push({ id, price });
      updatecart();
    });
  });
});
