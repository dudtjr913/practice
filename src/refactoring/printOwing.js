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
  let outstanding = 0;

  printBanner();

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  invoice.dueDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  );

  printDetails(invoice, outstanding);
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

printOwing(invoice);
