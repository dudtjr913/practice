const aDriver = {
  numberOfLateDeliveries: 10,
};

const rating = (aDriver) => {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
};

console.log(rating(aDriver));
