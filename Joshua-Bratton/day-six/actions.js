console.log('nouns loaded');

class Viewable {
    element = document.createElement('div');
    height = '200px';
    width = '200px';
    backgroundColor = 'red';
    constructor(){
        const view = document.getElementById('view');
        view.appendChild(this.element);
        this.applyAdj();
    };
    
    
    applyAdj() {
        this.element.style.backgroundColor = this.backgroundColor;
        
    }
}


class Floor extends Viewable{

}