const invoice = {
  customer: 'ditto',
  orders: [
    {
      amount: 3000,
    },
    {
      amount: 5000,
    },
  ],
  dueDate: null,
};

const printOwing = (invoice) => {
  printBanner();
  recordDueDate(invoice);
  printDetails(invoice, calculateOutstanding(invoice.orders));
};

const printBanner = () => {
  console.log('*****************');
  console.log('**** 고객 채무 ****');
  console.log('*****************');
};

const printDetails = (invoice, outstanding) => {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
};

const recordDueDate = (invoice) => {
  invoice.dueDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  );
};

const calculateOutstanding = (orders) => {
  let outstanding = 0;
  for (const o of orders) {
    outstanding += o.amount;
  }

  return outstanding;
};

printOwing(invoice);
