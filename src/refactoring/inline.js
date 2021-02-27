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
  gatherCustomerData(lines, aCustomer);
  return lines;
};

const gatherCustomerData = (out, aCustomer) => {
  out.push(['name', aCustomer.name]);
  out.push(['location', aCustomer.location]);
};

console.log(reportLines(aCustomer));
