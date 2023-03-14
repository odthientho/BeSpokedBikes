const customerBtnHandler = async function(event) {
  const response = await fetch('/api/customers/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    var customers = await response.json();
    console.log(customers);
    new gridjs.Grid({
      columns: [
        {
          id: 'first_name',
          name: 'First Name'
        },
        {
          id: 'last_name',
          name: 'Last Name'
        },
        {
          id: 'phone',
          name: 'Phone Number'
        },
        {
          id: 'address',
          name: 'Address'
        },
        {
          id: 'start_date',
          name: 'Start Date'
        },
      ],
      data: customers
    }).render(document.getElementById("customer-section"));
  }
}

const productBtnHandler = async function(event) {
  const response = await fetch('/api/products/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    var products = await response.json();
    console.log(products);
    new gridjs.Grid({
      columns: [
        {
          id: 'name',
          name: 'Name'
        },
        {
          id: 'manufacturer',
          name: 'Manufacturer'
        },
        {
          id: 'style',
          name: 'Style'
        },
        {
          id: 'purchase_price',
          name: 'Purchase Price'
        },
        {
          id: 'sale_price',
          name: 'Sale Price'
        },
        {
          id: 'quantity_on_hand',
          name: 'Quantity On Hand'
        },
        {
          id: 'commission_percentage',
          name: 'Commission Percentage'
        },
      ],
      data: products
    }).render(document.getElementById("product-section"));
  }
}

const salespersonBtnHandler = async function(event) {
  const response = await fetch('/api/customers/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    var customers = await response.json();
    console.log(customers);
  }
}

document.getElementById('customer-btn').addEventListener('click', customerBtnHandler);
document.getElementById('product-btn').addEventListener('click', productBtnHandler);
document.getElementById('salesperson-btn').addEventListener('click', salespersonBtnHandler);