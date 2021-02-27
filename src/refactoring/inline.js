const aDriver = {
  numberOfLateDeliveries: 10,
};

const rating = (aDriver) => {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
};

console.log(rating(aDriver));

const aCustomer = {
  name: 'ditto',
  location: 'seoul',
};

const reportLines = (aCustomer) => {
  const lines = [];
  lines.push(['name', aCustomer.name]);
  lines.push(['location', aCustomer.location]);
  return lines;
};

console.log(reportLines(aCustomer));
