const reportBtnHandler = async (event) => {
    event.preventDefault();
    var salespersonId = document.querySelector('#salespersonNameId').value;
    var startDate = document.querySelector('#startDateId').value;
    var endDate = document.querySelector('#endDateId').value;
  
    if (salespersonId && startDate && endDate) {
      var response = await fetch('/api/sales/'+salespersonId, {
        method: 'POST',
        body: JSON.stringify({ 
          startDate: startDate,
          endDate: endDate,
        }),
        headers: { 'Content-Type': 'application/json' }, 
      });
      if (response.ok) {
        var salesData = await response.json();
        var sales = salesData.map(aSale => {
          return {
            "sales_date": aSale.sales_date,
            "product_name": aSale.product.name,
            "sale_price": aSale.product.sale_price,
            "commission": aSale.product.commission_percentage*(aSale.product.sale_price-aSale.product.purchase_price)
          }
        });
        console.log(sales);
        var salesGrid = new gridjs.Grid({
          columns: [
            {
              id: 'sales_date',
              name: 'Date Of Sales'
            },
            {
              id: 'product_name',
              name: 'Product Name'
            },
            {
              id: 'sale_price',
              name: 'Sale Price'
            },
            {
              id: 'commission',
              name: 'Commission for Salesperson'
            },
          ],
          data: sales,
          className: {
            tr: 'view-section-table-tr'
          }
        }).render(document.getElementById("quarterly-report"));
        document.querySelector('#reportBtn').remove();
        var totalCommission = sales.reduce((total, aSale) => total+aSale.commission, 0);
        console.log(totalCommission);
        document.getElementById("quaterlyReportAside").append("Total Commission: "+totalCommission);
      } else alert("Not found any records.");
    } else alert("Please fill all info.");
  };
  
  
  document
  .querySelector('#reportBtn')
  .addEventListener('click', reportBtnHandler);