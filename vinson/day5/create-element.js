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
