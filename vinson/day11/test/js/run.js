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

scene.actors[1].addChange({
    name: 'go triangle',
    transition: 'all .5s',
    width: 0,
    height: 0,
    borderLeftStyle: 'solid',
    borderLeftWidth: '50px',
    borderLeftColor: 'transparent',
    borderRightStyle: 'solid',
    borderRightWidth: '50px',
    borderRightColor: 'transparent',
    borderBottomStyle: 'solid',
    borderBottomWidth: '100px',
    borderBottomColor: 'red',
    backgroundColor: 'transparent'
});


scene.actors[1].addChange({
    name: 'go triangle2',
    transition: 'all .5s',
    width: 0,
    height: 0,
    borderLeftStyle: 'solid',
    borderLeftWidth: '50px',
    borderLeftColor: 'transparent',
    borderRightStyle: 'solid',
    borderRightWidth: '50px',
    borderRightColor: 'transparent',
    borderBottomStyle: 'solid',
    borderBottomWidth: '100px',
    borderBottomColor: 'blue',
    backgroundColor: 'transparent'
});
