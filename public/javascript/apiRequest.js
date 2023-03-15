const customerBtnHandler = async function(event) {
  const response = await fetch('/api/customers/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    var customers = await response.json();
    console.log(customers);
    document.getElementById("product-section").innerHTML = "";
    document.getElementById("salesperson-section").innerHTML = "";
    const customerGrid = new gridjs.Grid({
      columns: [
        {
          id: 'id',
          name: 'customerId',
          hidden: true
        },
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
      search: true,
      data: customers,
      className: {
        tr: 'view-section-table-tr'
      }
    }).render(document.getElementById("customer-section"));

    customerGrid.on('rowClick', (...args) => {
      console.log(args);
    });
  }
}

const productBtnHandler = async function(event) {
  const response = await fetch('/api/products/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    var products = await response.json();
    document.getElementById("customer-section").innerHTML = "";
    document.getElementById("salesperson-section").innerHTML = "";
    const productGrid = new gridjs.Grid({
      columns: [
        {
          id: 'id',
          name: 'productId',
          hidden: true
        },
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
      search: true,
      data: products,
      className: {
        tr: 'view-section-table-tr'
      }
    }).render(document.getElementById("product-section"));
    productGrid.on('rowClick', (...args) => {
      console.log(args);
    });
  }
}

const salespersonBtnHandler = async function(event) {
  const response = await fetch('/api/salespersons/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    var salespersons = await response.json();
    document.getElementById("customer-section").innerHTML = "";
    document.getElementById("product-section").innerHTML = "";
    const salespersonGrid = new gridjs.Grid({
      columns: [
        {
          id: 'id',
          name: 'salespersonId',
          hidden: true
        },
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
        {
          id: 'termination_date',
          name: 'Termination Date'
        },
        {
          id: 'manager',
          name: 'Manager'
        },
      ],
      search: true,
      data: salespersons,
      className: {
        tr: 'view-section-table-tr'
      }
    }).render(document.getElementById("salesperson-section"));
    salespersonGrid.on('rowClick', (...args) => {
      console.log(args);
    });
  }
}

document.getElementById('customer-btn').addEventListener('click', customerBtnHandler);
document.getElementById('product-btn').addEventListener('click', productBtnHandler);
document.getElementById('salesperson-btn').addEventListener('click', salespersonBtnHandler);