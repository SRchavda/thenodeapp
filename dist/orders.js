var orders = [
    { id: "1", customerName: "John Doe", items: ["item1", "item2"], total: 100 },
    { id: "2", customerName: "Jane Smith", items: ["item3"], total: 50 },
    { id: "3", customerName: "Peter Jones", items: ["item1", "item3", "item4"], total: 150 },
];
function getAllOrders() {
    return orders;
}
function getOrderById(id) {
    return orders.find(function (order) { return order.id === id; });
}
function createOrder(customerName, items, total) {
    var newOrderId = (orders.length + 1).toString();
    var newOrder = { id: newOrderId, customerName: customerName, items: items, total: total };
    orders.push(newOrder);
}
//# sourceMappingURL=orders.js.map