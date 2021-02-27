const aDriver = {
  numberOfLateDeliveries: 10,
};

const rating = (aDriver) => {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
};

const moreThanFiveLateDeliveries = (aDriver) => {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
};
