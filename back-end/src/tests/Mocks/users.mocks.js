const userOkMock = {
        email: "fulana@deliveryapp.com",
        id: 2,
        name: "Fulana Pereira",
        password: "3c28d2b0881bf46457a853e0b07531c6",
        role: "seller",
      };

const userNotOkMock =  {
    email: "godofredo@deliveryapp.com",
    id: 4,
    name: "Godofredo Asdrúbal",
    password: "f46457a6eff8fdedapooy853e0b07531c6",
    role: "customer",
  };

const usersMock = [
    {
      email: "adm@deliveryapp.com",
      id: 1,
      name: "Delivery App Admin",
      password: "a4c86edecc5aee06eff8fdeda69e0d04",
      role: "administrator",
    },
    {
      email: "fulana@deliveryapp.com",
      id: 2,
      name: "Fulana Pereira",
      password: "3c28d2b0881bf46457a853e0b07531c6",
      role: "seller",
    },
    {
      email: "zebirita@email.com",
      id: 3,
      name: "Cliente Zé Birita",
      password: "1c37466c159755ce1fa181bd247cb925",
      role: "customer",
    },
  ];

const usersEmptyMock = [];

module.exports = {
    userOkMock,
    userNotOkMock,
    usersMock,
    usersEmptyMock
  }
