class Actor {
    id = null;
    element = null;
    config = {};
    scene = null;
    changeQue = [];
    changeQueIndex = 0;
    constructor(config) {
        this.config = config;
        this.id = config.id;
    }
    createElement() {
        this.element = document.createElement('div');
        this.listenForTransitionEnd();
        document.querySelector('#view').appendChild(this.element);
        this.element.style.position = 'absolute';
        console.log('actor created', this.element);
    }
    render() {
        if (!this.element) {this.createElement()}
        this.setStyles(this.config);
    }
    setStyles(config) {
        if (config.transition) {
            this.element.style['transition'] = config.transition;
        }
        Object.keys(config).forEach( style => {
            if (!['id'].includes(style)) {
                let styleName = style;
                let value = config[style];
                switch (style) {
                    case 'x':
                        styleName = 'left';
                        break;
                    case 'y':
                        styleName = 'top';
                        break;
                }

                switch (style) {
                    case 'x':
                        value += 'px';
                        break;
                    case 'y':
                        value += 'px';
                        break;
                    case 'width':
                        value += 'px';
                        break;
                    case 'height':
                        value += 'px';
                        break;
                }

                this.element.style[styleName] = value;
            } else {
            }
        })
    }
    updateStyles(config) {
        this.config = {...this.config, ...config};
        setTimeout(function () {
            this.render();
        }.bind(this),0);

        console.dir(this.element);
    }

    listenForTransitionEnd() {
        this.element.addEventListener('transitionend', () => {
            console.log('transend', this.changeQue[0]);
            if (this.changeQue.length) {
                this.changeQue.shift();
                this.runNextChange();
            }
        })
    }

    addChange(change) {
        const empty = this.changeQue.length === 0;
        this.changeQue.push(change);
        if (empty) {
            this.runNextChange();
        }
    }
    runNextChange() {
        console.log('run next', this.changeQue[0]);
        if (this.changeQue.length) {
            this.updateStyles(this.changeQue[0]);
        }
    }
}
