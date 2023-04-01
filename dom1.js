// TO GRAB id='items'
var itemList = document.querySelector('#items');

//TO GET THE PARENT NODE OF itemList
console.log(itemList.parentElement);

//Background color of PARENT NODE OF itemList changes to grey
itemList.parentElement.style.backgroundColor = 'grey';

//TO GET THE PARENT NODE OF PARENT NODE of itemList
console.log(itemList.parentElement.parentElement);