var extraTextElements = document.getElementsByClassName("extra-text");
var extraInfoTexts = [];

console.log(`Expandable text file ran..`);
console.log(`Found this many: ${extraTextElements.length}`);

for(let i = 0; i < extraTextElements.length; i++){
    const thisElement = extraTextElements[i];
    storeMyOriginalText(thisElement);
    givePiorElementOnClick(thisElement, i);
    clearMyText(thisElement);
}

function storeMyOriginalText(thisEl){
    const textToStore = thisEl.innerHTML;
    extraInfoTexts.push(textToStore);
}

function givePiorElementOnClick(thisEl, arrayIndexToAccess){
    thisEl.previousElementSibling.addEventListener("click", function(){
        addBackMyText(arrayIndexToAccess, thisEl);
    });
    console.log(`Giving prior element on click function....`);
}

function clearMyText(thisEl){
    console.log(`Clearing text....`);
    thisEl.innerHTML = "";
}

function addBackMyText(arrayIndexToAccess, elementToPutText){
    if(elementToPutText.innerHTML.length == 0){
        elementToPutText.innerHTML = `- ${extraInfoTexts[arrayIndexToAccess]} -`;
    } else {
        elementToPutText.innerHTML = "";
    }
}



/*

Get all elements

1: 
add on click to element before(?)
give each element before an ID. i=0 up to len.
ID would be like "before-element-3"

2: Make an array of all the contents of each element
after step 1, access this element of the array

*/

