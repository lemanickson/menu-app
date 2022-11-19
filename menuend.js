var food = ["Pizza", "Burger", "Snacks", "Omlett", "Sausage", "Sandwich"];
var orderList;
var foodOrder = 0;
var popUp;
var menu = false;
setTimeout(popUp, 6000);
function popUp() {
	for (var i = 0; i < food.length; i = i + 1) {
		orderList = prompt("WELCOME TO OUR MENU (Please place your order:");
		if (orderList == food[0]){
			alert("You Ordered Pizza");	
		}else if(orderList == food[1]){
			alert("You Ordered Burger");
		}else if(orderList == food[2]){
			alert("You Ordered Snacks");
		}else if(orderList == food[3]){
			alert("You Ordered Omlett");
		}else if(orderList == food[4]){
			alert("You Ordered Sausage");
		}else if (orderList == food[5]){
			alert("You Ordered Sandwich");
		}else {
			alert("Sorry.. That food is not Available in Our menu");
		}


		if (orderList == "Pizza"){
			foodOrder = foodOrder + 1;
			alert("Your Order is Placed, Wait for five(5) minutes.");
		}else if (orderList == "Burger"){
			foodOrder = foodOrder + 1;
			alert("Your Order is Placed, Wait for five(5) minutes.");
		}else if (orderList == "Snacks"){
			foodOrder = foodOrder + 1;
			alert("Your Order is Placed, Wait for five(5) minutes.");
		}else if(orderList == "Omlett"){
			foodOrder = foodOrder + 1;
			alert("Your Order is Placed, Wait for five(5) minutes.");
		}else if(orderList == "Sandwich"){
			foodOrder = foodOrder + 1;
			alert("Your Order is Placed, Wait for five(5) minutes.");
		}
			if (foodOrder == 1){
			menu = true;
			alert("THANKS FOR USING OUR APP, PLEASURE TO SERVE YOU");
		}else{
			alert("Your Order is not Placed");
		}
	}
	}
		