db.Orders.insertOne({
    user_id: ObjectId("USER_ID"),
    products: [
      { name: "Tablet", price: 4500 },
      { name: "Klavye", price: 300 }
    ],
    total_price: 4800,
    delivery_address_id: ObjectId("DELIVERY_ID"),
    billing_address_id: ObjectId("BILLING_ID")
  });
  