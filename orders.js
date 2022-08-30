const orders = [
  {
    id: 1,
    bread: "White",
    protein: "Beef",
    cheese: "Provolone",
    toppings: ["Green Peppers", "Onions"],
  },
  {
    id: 2,
    bread: "Sourdough",
    protein: "Chicken",
    cheese: "Mozzarella",
    toppings: ["Tomato", "Lettuce", "Green Peppers"],
  },
];

const getNewOrderId = () => {
  let highestOrderId = orders.sort((a, b) => b.id - a.id)[0].id;
  return highestOrderId + 1;
};

export const getOrders = () => {
  // Add logic here to return a copy of your orders
  return orders.map((order) => ({ ...order }));
};

export const addNewOrder = (order) => {
  console.log("new order", order);
  const newId = getNewOrderId();
  order.id = newId;
  // need to add logic
  orders.push(order);
  console.log(orders);
  document.dispatchEvent(new CustomEvent("stateChanged"));
};
