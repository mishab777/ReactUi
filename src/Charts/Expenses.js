export const expenset = [
    {
      data: 250,
      source: 'Accounting',
    },
    {
      data: 450,
      source: 'Customer Service',
    },
    {
      data: 200,
      source: 'Human Resources',
    },
    {
      data: 300,
      source: 'Purchases',
    },
  ];
  
  export function valueFormatterexpense(value) {
    return `$${value}K`;
  }
  