const scenes = new Scenes();
const scene = new Scene(1);
scenes.addScene(scene);
scene.addActor(new Actor({id: 1, x:'100', y: '400', width: '50', height: '50', backgroundColor: 'blue'}));
scene.addActor(new Actor({id: 2, x: '200', y: '300', width: '50', height: '50', backgroundColor: 'yellow', borderRadius: '50%'}));
scenes.renderScene();


scene.actors[1].addChange({name: 'go white',
    transition: 'all 1s',backgroundColor: 'white', width: '400'});

scene.actors[1].addChange({
    name: 'go black',
    x: 500,
    y: 200,
    transition: 'all 2s',backgroundColor: 'black', width: '50'});



const triangle = {
    ...this.convertCssStringToObject(shapes.triangle),
    name: 'go triangle2',
    backgroundColor: 'transparent',
    transition: 'all .5s',


};
scene.actors[1].addChange(triangle);


const pac = {
    ...this.convertCssStringToObject(shapes.pacMan),
    name: 'go triangle2',
    backgroundColor: 'transparent',
    transition: 'all .5s',


};
scene.actors[1].addChange(pac);

const egg = {
    ...this.convertCssStringToObject(shapes.triangle),
    name: 'go triangle2',
    backgroundColor: 'transparent',
    transition: 'all .5s',


};
scene.actors[1].addChange(egg);

function convertCssStringToObject(input) {
    let result = {},
        attributes = input.trim().split(';');

    for (let i = 0; i < attributes.length; i++) {
        let entry = attributes[i].split(':');
        result[entry.splice(0,1)[0].replace(/\s/g, "")] = entry.join(':');
    }
    console.log("**** result", result)
    return result;
}
