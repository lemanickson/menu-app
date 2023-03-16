let food = ["Pizza", "Burger", "Pasta", "Omlett", "Sausage", "Sandwich"];
let foodOrdered = 0;
setTimeout(popUp, 1000);
menu = true;
function popUp() {
		let orderList = prompt("WELCOME TO OUR MENU (Please place your order:");
		for (let i = 0; i < food.length; i++){
			if (food[i].toLowerCase() == orderList.toLowerCase()){
				foodOrdered = foodOrdered + 1;
				alert(`You Ordered ${food[i]}`);
				welc();
				return;
			}
		}
		alert("Sorry.., That food is not available in our menu");
	}
function welc() {
	if(foodOrdered == 1){
		menu = true;
		alert("Thanks for using our app, Pleasure to serve you");
	}
}

