// TO GRAB id='items'
var itemList = document.querySelector('#items');
// FIRST CHILD
console.log(itemList.firstChild); //It shows the text space after the element <ul>

// FIRST ELEMENT CHILD
console.log(itemList.firstElementChild);  // It shows the item 1 
itemList.firstElementChild.style.color = 'blue';