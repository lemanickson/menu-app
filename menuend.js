let food = ["Pizza", "Burger", "Pasta", "Omlett", "Sausage", "Sandwich"];
let foodOrdered = 0;
setTimeout(popUp, 5000);
menu = true;
function popUp() {
		let orderList = prompt("WELCOME TO OUR MENU (Please place your order:");
		for (let i = 0; i < food.length; i++){
			if (food[i] == orderList){
				foodOrdered = foodOrdered + 1;
				reply = alert(`You Ordered ${food[i]}`);
				if (foodOrdered == 1){
					menu = true;
					alert("Thanks for using our app, Pleasure to serve you");
				}
				return reply;
			}
		alert("Sorry.., That food is not Available in our menu");
		return;
		}

}