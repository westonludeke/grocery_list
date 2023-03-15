$(document).ready(function() {
  $('#grocery-form').submit(function(event) {
    event.preventDefault();

    var itemName = $('#item-name').val();
    var itemQuantity = $('#item-quantity').val();

    if (!itemQuantity){ 
      itemQuantity = 1;
    } else if (isNaN(itemQuantity)){
      alert('Please enter a valid number');
      $('#item-quantity').val('');
      return;
    }

    var listItem = '<li>' + itemQuantity + ' ' + itemName + '</li>';

    $('#grocery-list').append(listItem);
    $('#grocery-form')[0].reset();
  });
});
