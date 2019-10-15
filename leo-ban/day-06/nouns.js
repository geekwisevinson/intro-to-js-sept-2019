console.log('nouns is loaded');

class Viewable {
    element = document.createElement('div');
    height = 200;
    width = 200;
    backgroundColor = 'lightgreen'; 
    x = 0;
    y = 0;

    constructor() {
        const view = document.getElementById('view');
        view.appendChild(this.element);
        this.applyAdj();
    }

    applyAdj(){
        this.element.style.backgroundColor = this.backgroundColor;
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';// 'this' refers to itself
        this.element.style.display = 'inline-block';
        this.element.style.position = 'absolute';
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }
}

class Floor extends Viewable {
    backgroundColor = 'lightpink';
    constructor() {
        super();
        this.applyAdj();
    }
};

class Jumper extends Viewable {
    fallSpeed = 2;
    lift = 0;
    canJump = true;
    applyGravity(){
        if (this.isAboveFloor()) {
            if(this.isMovingUp()) {
                this.lift -= .2;
            }
        } else {
            this.lift = 0;
        }
        this.y += this.fallSpeed + -this.lift;
    }

    isAboveFloor() {
        return this.y + this.height < floor.y;
    }

    isMovingUp () {
        return this.lift > 0;
    }

    jump() {
        console.log('jump');
        this.lift = 5;
    }
}

const floor = new Floor();
const jumper = new Jumper();
console.log('nouns', floor, jumper);

floor.y = 300;
floor.applyAdj();

function gameLoop() {
    jumper.applyGravity();
    jumper.applyAdj();
    window.requestAnimationFrame(gameLoop);
}

gameLoop();

// const floor = document.createElement('div'); //creates a div;
// const jumper = document.createElement('div'); //creates a div;
// console.log('nouns', floor, jumper);

window.addEventListener('keydown', function (){
    console.log('keydown');
    jumper.jump();
});