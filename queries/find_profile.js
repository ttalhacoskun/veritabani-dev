db.Users.find({}, {
    first_name: 1,
    last_name: 1,
    email: 1,
    birth_date: 1,
    _id: 0
  });
  