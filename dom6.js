var newDiv=document.createElement('div');   //NEW ELEMENT div IS CREATED
var newDivText= document.createTextNode('HELLO WORLD !');  //TEXT NODE IS CREATED 
newDiv.appendChild(newDivText);  // APPENDING CHILD i.e. HELLO WORLD !
console.log(newDiv);