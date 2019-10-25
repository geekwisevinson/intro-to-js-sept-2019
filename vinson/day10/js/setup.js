function addSkill(name, type) {
    const button = document.createElement('button');
    button.innerHTML = name;
    if (type) {
        button.classList.add(type);
    } else {
        button.classList.add('dom');
    }

    // document.querySelector('.buttons').innerHTML += '<button></button>';
    document.querySelector('.buttons').appendChild(button);
    button.addEventListener('click', chooseTheRightUtility);
}

// skill consts
const utilityGetElementReference = 'get element reference';
const utilityCreateElement = 'create element and reference';
const utilityAddCssClass = 'add CSS class';
const utilityAddEventListener = 'add event listener';
const utilityUpdateText = 'update text';
const utilityRandomNumber = 'get random number';
const utilityNestElements = 'nest elements';

// add buttons and listeners
addSkill(utilityGetElementReference);
addSkill(utilityCreateElement);
addSkill(utilityAddCssClass);
addSkill(utilityAddEventListener);
addSkill(utilityUpdateText);
addSkill(utilityRandomNumber, 'js');
addSkill(utilityNestElements);

// skill functions
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
            body.innerHTML = '<<span>button</span>>I'm a little button <span><</span>/button>';
       
    `)
}

function addCssClass() {
    beltText(`
        const button = document.querySelector('button');
        <br>
        button.classList.add('active');
        <br>
        button.classList.remove('active');
    `)
}

function addEventListenerText(){
    beltText(`
        const button = document.querySelector('button');
        <hr>
        <br>
        button.addEventListener('click', function () {
        <br>
           console.log('you clicked the button'); 
        <br>
        });
        <hr>
        function functionName() {
          <br>
           console.log('you clicked the button'); 
             <br>
        }
          <br>
          button.addEventListener('click', functionName );
          <br>
    `)
}

function updateText() {
    beltText(`
        const button = document.querySelector('button');
        <hr>
        button.innerText = 'I am new text';
          <br>
        button.innerHTML = 'I am also new text';
          <br>
        button.textContent = 'As am I';
    `)
}

function randomNumber() {
    beltText(`
        const highestNumber = 10;
        <br>
        const randomNumber = Math.ceil(Math.random() * highestNumber); // returns 1 - 10
        <hr>
        const highestNumberPlusOne = 10;
        <br>
        const randomNumber = Math.floor( Math.random() * highestNumberPlusOne); // returns 0 - 9
        <hr>
        function random ( high, plus ) {
        <br>
            return Math.floor( Math.random() * high) + ( plus ? plus : 0);
            <br>
         }
    `)
}

function nestElements() {
    beltText(`
        const newButton = document.createElement('button');
        <br>
        const buttonGroup = document.querySelector('.buttonGroup');
        <hr>
        buttonGroup.appendChild(newButton); // the button will be nested in the buttonGroup
       
        <hr>
        <span ><</span>div class='buttonGroup'> <span><</span>button> <span><</span>button>
        <span><</span>/div>
    `)
}

// helpers
function chooseTheRightUtility() {
    //"this" is the button in this case
    //"this" always refers to what call the function
    console.log('chooseTheRightUtility', this);
    const utility = this.innerHTML;
    addActiveClass(this);
    switch (utility) {
        case utilityGetElementReference:
            return getElementReference();
        case utilityCreateElement:
            return createElement();
        case utilityAddCssClass:
            return addCssClass();
        case utilityAddEventListener:
            return addEventListenerText();
        case utilityUpdateText:
            return updateText();
        case utilityRandomNumber:
            return randomNumber();
        case utilityNestElements:
            return nestElements();
        default:
            console.log('these are not the same', utility)
    }
}

function beltText(text) {
    const belt = document.querySelector('.belt');
    belt.innerHTML = text;
}

function addActiveClass(el) {
    const buttons = document.querySelectorAll('.buttons button');
    console.log('list', buttons);
    buttons.forEach( button => {
        if (button === el) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }

    })
}

