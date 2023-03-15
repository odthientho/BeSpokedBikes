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
    document.getElementById("sales-section").innerHTML = "";
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

    customerGrid.on('cellClick', async (...args) => {
      var text = args[1].data;
      var result = prompt("You want to change " + args[2].name.toLowerCase() + "?", text);
      if (result == null || result == text) {
      } else {
        var response = await fetch('/api/customers/'+args[3]._cells[0].data, {
          method: 'PUT',
          body: JSON.stringify({[args[2].id]: result}),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.reload(); 
        } else {
          alert("Not Able To Update Data");
        }
      }
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
    document.getElementById("sales-section").innerHTML = "";
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
    productGrid.on('cellClick', async (...args) => {
      var text = args[1].data;
      var result = prompt("You want to change " + args[2].name.toLowerCase() + "?", text);
      if (result == null || result == text) {
      } else {
        var response = await fetch('/api/products/'+args[3]._cells[0].data, {
          method: 'PUT',
          body: JSON.stringify({[args[2].id]: result}),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.reload(); 
        } else {
          alert("Not Able To Update Data");
        }
      }
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
    document.getElementById("sales-section").innerHTML = "";
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
    salespersonGrid.on('cellClick', async (...args) => {
      var text = args[1].data;
      var result = prompt("You want to change " + args[2].name.toLowerCase() + "?", text);
      if (result == null || result == text) {
      } else {
        var response = await fetch('/api/salespersons/'+args[3]._cells[0].data, {
          method: 'PUT',
          body: JSON.stringify({[args[2].id]: result}),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.reload(); 
        } else {
          alert("Not Able To Update Data");
        }
      }
    });
  }
}

const salesBtnHandler = async function(event) {
  const response = await fetch('/api/sales/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    var salesData = await response.json();
    var sales = salesData.map(aSale => {
      return {
        'id': aSale.id,
        'salesDate': aSale.sales_date,
        'customerName': aSale.customer.first_name+" "+aSale.customer.last_name,
        'salespersonName': aSale.salesperson.first_name+" "+aSale.salesperson.last_name,
        'productName': aSale.product.name,
        'price': "$"+aSale.product.sale_price,
        'commission': "$"+(aSale.product.sale_price-aSale.product.purchase_price)*aSale.product.commission_percentage
      }
    });
    document.getElementById("customer-section").innerHTML = "";
    document.getElementById("product-section").innerHTML = "";
    document.getElementById("salesperson-section").innerHTML = "";
    const salesGrid = new gridjs.Grid({
      columns: [
        {
          id: 'id',
          name: 'salesId',
          hidden: true
        },
        {
          id: 'salesDate',
          name: 'Date Of Sales'
        },
        {
          id: 'customerName',
          name: 'Customer Name'
        },
        {
          id: 'salespersonName',
          name: 'Salesperson Name'
        },
        {
          id: 'productName',
          name: 'Product Name'
        },
        {
          id: 'price',
          name: 'Sale Price'
        },
        {
          id: 'commission',
          name: 'Commission for Salesperson'
        },
      ],
      search: true,
      sort: true,
      data: sales,
      className: {
        tr: 'view-section-table-tr'
      }
    }).render(document.getElementById("sales-section"));
  }
}

document.getElementById('customer-btn').addEventListener('click', customerBtnHandler);
document.getElementById('product-btn').addEventListener('click', productBtnHandler);
document.getElementById('salesperson-btn').addEventListener('click', salespersonBtnHandler);
document.getElementById('sales-btn').addEventListener('click', salesBtnHandler);