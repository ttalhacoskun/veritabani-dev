db.Users.aggregate([
    {
      $lookup: {
        from: "Orders",
        localField: "_id",
        foreignField: "user_id",
        as: "orders"
      }
    },
    {
      $project: {
        first_name: 1,
        last_name: 1,
        email: 1,
        birth_date: 1,
        orders: 1
      }
    }
  ]);
  