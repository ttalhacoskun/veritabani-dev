db.Orders.updateOne(
    { _id: ObjectId("ORDER_ID") },
    { $set: { delivery_address_id: ObjectId("NEW_DELIVERY_ID") } }
  );
  