function createElement(type, innerHTML, parent) {
    let el = null;
    if (type) {
        el = document.createElement(type);
    } else {
        el = document.createElement('div');
    }

    if (innerHTML) {
        el.innerHTML = innerHTML;
    }
    parent ?
        parent.appendChild(el) :
        document.body.appendChild(el);

    return el;
}

console.log('create-element is loaded')

// function createElement(type, innerHTML, parent){ //lets us pick a type.  what kind of type??
//     const el = document.createElement(type);
//     el.innerHTML = innerHTML;
//     if (parent) {
//         parent.appendChild(el);
//     } else {
//         document.body.appendChild(el);
//     } //if there is content, append child, else, append to body

//     //if statement: if this is true, this block is going to run
//     // if statement is false, else will run


//     innerHTML ? el.innerHTML = innerHTML : void(null);
//     parent ?                            //this is a condition
//         parent.appendChild(el) :        //this runs if true; ":"
//         document.body.appendChild(el);  //this runs if not true
//     //ternary.  same code as lines 9-13

//     parent.appendChild(el);
// };