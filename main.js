import { getOrders, addNewOrder } from "./orders.js";

document.getElementById("app").innerHTML = `
<h1>Steven's Sub Shop</h1>
<div>
  <h3>Please Create Your Sub</h3>
  <div class="subForm">
      <div class="subBread">
        <p>Pick your Bread</p>
        <label for="sourdough">Sourdough</label>
        <input id="sourdough" name="bread" type="radio" value="sourdough" />
        <label for="wholeWheat">Whole Wheat</label>
        <input id="wholeWheat" name="bread" type="radio" value="wholeWheat" />
        <label for="white">White</label>
        <input id="white" name="bread" type="radio" value="white" />
      </div>
      <div class="subProtein">
        <p>Pick your Protein</p>
        <label for="chichen">Chicken</label>
        <input id="chicken" name="protein" type="radio" value="chicken" />
        <label for="beef">Beef</label>
        <input id="beef" name="protein" type="radio" value="beef" />
        <label for="turkey">Turkey</label>
        <input id="turkey" name="protein" type="radio" value="turkey" />
      </div>
      <div class="subCheese">
        <p>Pick Your Cheese</p>
        <label for="chedder">Chedder</label>
        <input id="chedder" name="cheese" type="radio" value="chedder" />
        <label for="provolone">Provolone</label>
        <input id="provolone" name="cheese" type="radio" value="provolone" />
        <label for="mozzarella">Mozzarella</label>
        <input id="mozzarella" name="cheese" type="radio" value="mozzarella" />
      </div>
      <div class="toppings">
        <p>Pick Your Toppings (Select all that apply)</p>
        <ul>
            <li>
            <input id="lettuce" name="toppings" type="checkbox" value="lettuce" />
            <label for="lettuce">Lettuce</label>
            </li>
            <li>
            <input id="tomato" name="toppings" type="checkbox" value="tomato" />
            <label for="tomato">Tomato</label>
            </li>
            <li>
            <input id="Black Olives" name="toppings" type="checkbox" value="Black Olives" />
            <label for="Black Olives">Black Olives</label>
            </li>
            <li>
            <input id="Green Peppers" name="toppings" type="checkbox" value="Green Peppers" />
            <label for="Green Peppers">Green Peppers</label>
            </li>
            <li>
            <input id="Onions" name="toppings" type="checkbox" value="Onions" />
            <label for="Onions">Onions</label>
            </li>
        </ul>
      </div>
    <div>
      <button id="submitOrder">Order Sub</button>
    </div>
  </div>
  <h3>Orders</h3>
  <div id="orders"></div>
</div>
`;

const displayOrders = () => {
  const orders = getOrders();
  let html = "<ul>";
  for (const order of orders) {
    html += `<li>
      <p>Bread: ${order.bread}</p>
      <p>Protein: ${order.protein}</p>
      <p>Cheese: ${order.cheese}</p>
      <p>Toppings: ${order.toppings.join(", ")}</p>
    </li>`;
  }
  html += "</ul>";
  document.getElementById("orders").innerHTML = html;
};

document.addEventListener("click", (e) => {
  if (e.target.id === "submitOrder") {
    console.log("submitting order");
    // Need logic to get all the values from the form,
    const bread = document.querySelector("input[name=bread]:checked")?.value;
    const protein = document.querySelector("input[name=protein]:checked")?.value;
    const cheese = document.querySelector("input[name=cheese]:checked")?.value;

    const toppingsElements = document.querySelectorAll("input[name=toppings]:checked");

    const toppingsArray = [];
    const toppings = toppingsElements.forEach((toppingElement) => {
      toppingsArray.push(toppingElement.value);
    });
    console.log(toppingsArray);

    // format them into an object and
    const newOrder = {
      bread: bread,
      protein: protein,
      cheese: cheese,
      toppings: toppingsArray,
    };

    console.log(newOrder);

    //add that object to the `orders` array in `orders.js`
    addNewOrder(newOrder);
  }
});

document.addEventListener("stateChanged", (event) => {
  // One line of code should do it.
  displayOrders();
});

// //This is called when the page is loaded only
displayOrders();
