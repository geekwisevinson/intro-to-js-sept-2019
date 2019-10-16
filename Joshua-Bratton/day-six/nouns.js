class Viewable {
    element = document.createElement('div');
    height = 200;
    width = 200;
    backgroundColor = 'red';
    x = 0;
    y = 0;
    constructor() {
        const view = document.getElementById('view');
        view.appendChild(this.element);
        this.applyAdj();
    }

    applyAdj() {
        this.element.style.backgroundColor = this.backgroundColor;
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        this.element.style.display = 'inline-block';
        this.element.style.position = 'absolute';
        this.element.style.left =  this.x + 'px';
        this.element.style.top = this.y + 'px';
    }
}
class Floor extends Viewable{
    backgroundColor = 'brown';
    constructor() {
        super();
        this.applyAdj();
    }
}

class Jumper extends Viewable{
    fallSpeed = 3;
    lift = 0;
    applyGravity(){
        if (this.isAboveFloor()){
            this.y += this.fallSpeed + - this.lift;
        }

        if(this.isMovingUp()){
            this.lift-= .2;
        }
    }

    isAboveFloor(){
        return this.y < floor.y - this.height;
    }

    isMovingUp(){
        return this.lift > 0;
    }

    jump(){
        this.fallSpeed = -3;
    }

}


const floor = new Floor();
const jumper = new Jumper();
console.log('nouns', floor, jumper);

floor.y = 300;
floor.applyAdj();

function gameloop(){
    jumper.applyGravity();
    jumper.applyAdj();
    window.requestAnimationFrame(gameloop);
}
gameloop();

window.addEventListener('keydown', function(){
    jumper.jump();
});