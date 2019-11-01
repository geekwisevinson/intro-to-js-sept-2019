const scenes = new Scenes();
const scene = new Scene(1);
scenes.addScene(scene);
scene.addActor(new Actor({id: 1, x:'100', y: '400', width: '50', height: '50', backgroundColor: 'blue'}));
scene.addActor(new Actor({id: 2, x: '200', y: '300', width: '50', height: '50', backgroundColor: 'yellow', borderRadius: '50%'}));
scenes.renderScene();
scene.actors[1].addChange({transition: 'all 2s',backgroundColor: 'white', width: '400'});

scene.actors[1].addChange({transition: 'all 4s',backgroundColor: 'black', width: '50'});

scene.actors[1].addChange({
    transition: 'all 10s',
    width: 0,
height: 0,
borderLeft: '50px solid transparent',
borderRight: '50px solid transparent',
borderBottom: '100px solid red',
    backgroundColor: 'transparent'
});
