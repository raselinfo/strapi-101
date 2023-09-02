module.exports = {
  routes: [
    {
      method: "GET",
      path: "/order/pretransaction",
      handler: "custom.exampleAction"  // this is the name of controller and it's action
    },
  ],
};
