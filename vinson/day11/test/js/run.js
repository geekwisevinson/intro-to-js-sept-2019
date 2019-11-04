const scenes = new Scenes();
const scene = new Scene(1);
scenes.addScene(scene);
scene.addActor(new Actor({id: 1, x:'100', y: '400', width: '50px', height: '50px', backgroundColor: 'blue'}));
scene.addActor(new Actor({id: 2, x: '200', y: '300', width: '50px', height: '50px', backgroundColor: 'yellow', borderRadius: '50%'}));
scenes.renderScene();
scene.actors[1].addChange({
    ...this.convertCssStringToObject(shapes.invader),
    name: 'go triangle',
    transition: 'all 2s ease 0s',
});

scene.actors[1].addChange({name: 'go white',
    transition: 'all 1s ease 0s',
    backgroundColor: 'rgb(255, 255, 255)', width: '400px'});

scene.actors[1].addChange({
    name: 'go black',
    left: '500px',
    top: '200px',
    transition: 'all 1s ease 0s',
    backgroundColor: 'rgb(255, 255, 255)', width: '50px'});




scene.actors[1].addChange({
    ...this.convertCssStringToObject(shapes.triangle),
    name: 'go triangle',
});
scene.actors[1].addChange({
    ...this.convertCssStringToObject(shapes.pacMan),
    name: 'go pacMan',
    transition: 'all 2s ease 0s',
});
scene.actors[1].addChange({
    ...this.convertCssStringToObject(shapes.triangle),
    name: 'go triangle',
    transition: 'all 2s ease 0s',
});
scene.actors[1].addChange({
    ...this.convertCssStringToObject(shapes.pacMan),
    name: 'go pacMan',
    transition: 'all 2s ease 0s',
});

function convertCssStringToObject(input) {
    let result = {},
        attributes = input.trim().split(';');

    for (let i = 0; i < attributes.length; i++) {
        let entry = attributes[i].split(':').map( item => item.trim());
        result[entry.splice(0,1)[0].replace(/\s/g, "")] = entry.join(':');
    }
    return result;
}
