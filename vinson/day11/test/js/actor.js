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
                let value = String(config[style]);
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
                        if (!value.includes('px'))
                        value += 'px';
                        break;
                    case 'y':
                        if (!value.includes('px'))
                        value += 'px';
                        break;
                    case 'width':
                        if (!value.includes('px'))
                        value += 'px';
                        break;
                    case 'height':
                        if (!value.includes('px'))
                        value += 'px';
                        break;
                }

                this.element.style[styleName] = value;
            } else {
            }
        })
    }
    updateStyles(config) {
        console.log('update styles', config);
        this.config = {...this.config, ...config};
        console.log('update', config);
        setTimeout(function () {
            this.render();
        }.bind(this),0);
    }

    listenForTransitionEnd() {
        this.element.addEventListener('transitionend', (e) => {
            const originalPropName = e.propertyName;
            console.log('propName', e.propertyName);

            console.log('changeQue[0]', this.changeQue[0]);
            const prop = this.convertKebabToCamel(e.propertyName);
            console.log('que', this.changeQue);
            if (this.changeQue.length) {
                const testKeys = Object.keys(this.changeQue[0]);
                const ignore = ['name'];
                const missing = [];
                let destroy = false;
                testKeys.forEach( key => {
                    if (!key) return;

                    const computed = getComputedStyle(this.element);
                    switch (key) {
                        case 'name':
                            break;
                        default:
                            console.log('run this if valid');
                            if(!this.changeQue[0]) {return;}
                            if (this.changeQue[0][key] === computed[key]) {
                                console.log('same');
                                console.log(key);
                                console.log(this.changeQue[0][key]);
                                console.log(computed[key]);
                                if (!missing.length) {
                                   destroy = true;
                                } else {
                                    console.log('missing', missing);
                                    missing.forEach( item => {
                                        console.log(item);
                                        console.log(this.changeQue[0][item]);
                                        console.log(computed[item]);
                                        const update = {};
                                        update[this.convertKebabToCamel(item)] = this.changeQue[0][item];
                                        this.updateStyles(update);
                                        console.log(this.element)
                                    })
                                }
                            } else {
                                console.log('DIFFERENT');
                                console.log(key);
                                console.log(this.changeQue[0][key]);
                                console.log(computed[key]);
                                missing.push(key);
                                console.log('missing', key, missing);
                                console.log('????????????????????????');
                                destroy = false;
                            }
                    }


                });
                if (destroy) {
                    this.completeChange();
                }
            }
        })
    }

    completeChange() {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log('FINISHED', this.changeQue[0].name);
        this.changeQue.shift();
        this.runNextChange();
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
            console.log('**************************');
            console.log('run next', this.changeQue[0].name);
            this.updateStyles(this.changeQue[0]);
        }
    }

    convertKebabToCamel(str) {
        return str.replace(/-\w/g, function(m) {
            return m[1].toUpperCase();
        })
    }
}
