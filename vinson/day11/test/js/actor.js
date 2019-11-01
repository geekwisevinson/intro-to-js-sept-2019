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
        console.log('update name', config.name);
        setTimeout(function () {
            this.render();
        }.bind(this),0);
    }

    listenForTransitionEnd() {
        this.element.addEventListener('transitionend', (e) => {
            const originalPropName = e.propertyName;
            console.log('propName', e.propertyName);
            console.log(this.changeQue[0])
            const prop = this.convertKebabToCamel(e.propertyName);
            if (this.changeQue.length) {
                this.cleanUpTransition()
                if (this.changeQue[0].hasOwnProperty(prop)) {
                    this.tryDeleteProp(prop);
                    this.isChangeQueFinished();
                } else {
                    console.log('!!!!! t does not have this prop', prop, this.changeQue[0], originalPropName);
                    console.log(this.changeQue[0]);
                    switch (prop) {
                        case 'left':
                            this.tryDeleteProp('x');
                            break;
                        case 'top':
                            this.tryDeleteProp('y');
                            break;
                        default:
                            break;
                    }
                    this.isChangeQueFinished();
                }

            }
        })
    }

    isChangeQueFinished() {
        if (Object.keys(this.changeQue[0]).length === 0) {
            this.changeQue.shift();
            this.runNextChange();
        } else {
            console.log('not done', Object.keys(this.changeQue[0] ));
        }
    }

    tryDeleteProp( prop ){
        const isDeleted = delete this.changeQue[0][prop];
        console.log(prop, 'is', isDeleted)
    }

    addChange(change) {
        const empty = this.changeQue.length === 0;
        this.changeQue.push(change);
        if (empty) {
            this.runNextChange();
        }
    }
    runNextChange() {
        if (this.changeQue.length) {
            console.log('run next', this.changeQue[0]);
            this.updateStyles(this.changeQue[0]);
        }
    }

    convertKebabToCamel(str) {
        return str.replace(/-\w/g, function(m) {
            return m[1].toUpperCase();
        })
    }

    cleanUpTransition() {
        const borders = [
            "border-left",
            "border-right",
            "border-bottom",
            "border-radius"
        ];

        const removable = ['', 'name', 'transition', ...borders];
        removable.forEach(item => {
            delete this.changeQue[0][item];

        });
        const keys = Object.keys(this.changeQue[0]);
        keys.forEach( key => {
            console.log(key, this.changeQue[0], this.changeQue[0][key]);
            if (
                (this.changeQue[0][key]) &&
                ((this.changeQue[0][key].toString().trim() === this.element.style[key].trim())
                || (this.changeQue[0][key].toString().trim() + 'px' === this.element.style[key].trim()))
            ) {
                delete this.changeQue[0][key];
            } else {
                console.log('it is not the same', key);
                console.log( this.changeQue[0][key]);
                console.log( this.element.style[key]);
            }
        });

        console.log(this.changeQue[0], this.element.style)

    }
}
