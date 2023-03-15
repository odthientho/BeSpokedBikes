const salesnewBtnHandler = async (event) => {
    event.preventDefault();
    var salespersonId = document.querySelector('#salespersonNameId').value;
    var customerId = document.querySelector('#customerNameId').value;
    var productId = document.querySelector('#productNameId').value;
    var salesDate = document.querySelector('#salesDateId').value;

    console.log(salespersonId, customerId, productId, salesDate);
  
    if (salespersonId && customerId && productId && salesDate) {
      var response = await fetch('/api/sales/', {
        method: 'POST',
        body: JSON.stringify({ 
          salespersonId: salespersonId, 
          customerId: customerId,
          productId: productId,
          salesDate: salesDate,
        }),
        headers: { 'Content-Type': 'application/json' }, 
      });
      if (response.ok) {
        document.location.replace('/salesnew');
      } else alert("No sales saved.");
    } else alert("Please fill all info.");
  };
  
  
  document
  .querySelector('#salesnewBtn')
  .addEventListener('click', salesnewBtnHandler);