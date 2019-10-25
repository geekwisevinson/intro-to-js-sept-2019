function addSkill(name) {
    const button = document.createElement('button');
    button.innerHTML = name;

    // document.querySelector('.buttons').innerHTML += '<button></button>';
    document.querySelector('.buttons').appendChild(button);
    button.addEventListener('click', chooseTheRightUtility);
}


const utilityGetElementReference = 'get element reference';
const utilityCreateElement = 'create element and reference';


addSkill(utilityGetElementReference);
addSkill(utilityCreateElement);

function chooseTheRightUtility() {
    //"this" is the button in this case
    //"this" always refers to what call the function
    console.log('chooseTheRightUtility', this);
    const utility = this.innerHTML;
    switch (utility) {
        case utilityGetElementReference:
            return getElementReference();
        case utilityCreateElement:
            return createElement();
        default:
            console.log('these are not the same', utility)
    }
}

function beltText(text) {
    const belt = document.querySelector('.belt');
    belt.innerHTML = text;
}
function getElementReference() {
  beltText(`
        
            const element = document.querySelector('div');
            </br>
            const elementList = document.querySelector('.item');
       
    `)
}

function createElement() {
    beltText(`
        
            const button = document.createElement('button');
            </br>
            body.innerHTML = '<span>< button</span>>I'm a little button <span><</span>/button>';
       
    `)
}

