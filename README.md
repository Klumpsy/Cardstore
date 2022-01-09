# Cardstore
Cardstore for a friend of mine, build with React, SCSS and Commerse.js 

//Sandbox payment details for testing: 
cardNumber: 4242 4242 4242 4242
Expiry month: 01
Expiry year: 2023
Cvc: 123
Postal_zip_code: 94103

//Known bugs: 
When added to cart, the quantity of the item will decrease, however if you go back from the cart to the shop the quantity will
be back to the old quantity (I have to check the API solutions that Commerce.js provides to update the quantity). The 
quantity won't change as long as it is not bought. Bought items will update the state and quantity in the dashboard so on reload of the
shop the correct quantity will be shows again. You won't be able to but 3 items of a product that has 2 items available (this will result in an error that forces the buyer to change the cartquantity). 
