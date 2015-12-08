$(document).ready(function(){

  var menuUrl = "https://galvanize-eats-api.herokuapp.com/menu";
  var postOrderUrl = "https://galvanize-eats-api.herokuapp.com/orders";


  var foodOrders = [];
  var $menuItemList = document.getElementById('menuList');
  var $burgerList = document.getElementById('burgers');
  var $pizzaList = document.getElementById('pizza');

  function loadMenu (){
    var request = $.ajax({
      method: "GET",
      url: menuUrl,
      dataType: "json",
      success: function(data){
        for(i=0;i<data.menu.length;i++){
          var $menuItemName = data.menu[i].name;
          var $menuItemType = data.menu[i].type;
          var $menuItemPrice = data.menu[i].price;
          var $displayItem = document.createElement('option');
          $displayItem.innerText = $menuItemName + $menuItemPrice;
          $($displayItem).attr('class', 'menuItem');
          $menuItemList.appendChild($displayItem);
          // if($menuItemType === "burger"){
          //   $burgerList.appendChild($displayItem);
          //  } else if ($menuItemType === "pizza") {
          //    $pizzaList.appendChild($displayItem);
          //  }
          }
        }
    })
  }

  loadMenu();

  // $('#menuList div').click(function(){
  //   console.log('clicked menu');
  //   $(this).css("backgroundColor", "red")
  // })
  //


  // trying to get menu to work as divs instead of select

  // $('.menuItem').click(function(){
  //   console.log('clicked');
  // })


  var $displayFoods = document.getElementById('orderList');


  function displayOrders(){
    clearOrderList();
    for(m=0;m<foodOrders.length;m++){
      var $listItem = document.createElement('div');
      $listItem.innerHTML = "<p>" + foodOrders[m] + "</p>";
      $displayFoods.appendChild($listItem);
      var foodID = $(this).attr('id');
    }
  }


  function clearOrderList(){
      $displayFoods.innerHTML = "";
  }

  function orderSubmit(){
    var $submission = document.getElementById('menuList').value;
    var $subId = document.getElementById('menuList').class;
    console.log($subId);
    var $quantity = document.getElementById('quantity').value;
      if ($quantity > 0 && $quantity < 100){
        for (i=0;i<$quantity;i++){
          console.log($submission);
          foodOrders.push($submission);
        }
        console.log(foodOrders);
        displayOrders();
      }
    else {
      console.log('not a valid number');
    }
    addUp();
  }

var holdSum = 0;


  var $orderData = {
    orders: foodOrders,
    totalCost: 0
  };

function addUp(){
  var totalCost = [];
  for(m=0;m<foodOrders.length;m++){
    var thenum = foodOrders[m].replace( /^\D+/g, '');
    totalCost.push(parseFloat(thenum));
  }
  console.log(totalCost);
  var totalSum = 0;
  for (i=0;i<totalCost.length;i++){
    totalSum = (totalSum + totalCost[i]);
  }
  holdSum = totalSum.toFixed(2);
  console.log(holdSum);

  var $totalAppend = document.getElementById('orderTotal');
  $totalAppend.innerText = holdSum;
  $orderData.totalCost = holdSum;

  var $computedTax = (holdSum * 0.083).toFixed(2);
  console.log($computedTax);
  var $taxAppend = document.getElementById('orderTax');
  $taxAppend.innerText = $computedTax;

  var $grandTotal = (parseFloat(holdSum) + parseFloat($computedTax)).toFixed(2);
  console.log($grandTotal);
  var $grandAppend = document.getElementById('grandTotal');
  $grandAppend.innerText = $grandTotal;
}



  var foodSubmit = document.getElementById('orderSubmit');
  foodSubmit.addEventListener('click', orderSubmit);




  var postOrderSubmit = document.getElementById('postOrderBtn');
  postOrderSubmit.addEventListener('click', postOrder);




  function postOrder (){
    var $userName = document.getElementById('name').value;
    var $userPhone = document.getElementById('phone').value;
    var $userAddress = document.getElementById('address').value;
    $orderData.name = $userName;
    $orderData.phone = $userPhone;
    $orderData.address = $userAddress;

    var request = $.ajax({
      method: "POST",
      url: postOrderUrl,
      data: $orderData,
      success: function(){
        console.log('Posted!')
        console.log($orderData);
      }
    })
  }




});
