const scenes = new Scenes();
const scene = new Scene(1);
scenes.addScene(scene);
scene.addActor(new Actor({id: 1, x:'100', y: '400', width: '50px', height: '50px', backgroundColor: 'blue'}));
scene.addActor(new Actor({id: 2, x: '300', y: '300', width: '50px', height: '50px', backgroundColor: 'yellow', borderRadius: '50%'}));
scenes.renderScene();


// scene.actors[1].addChange({name: 'go white',
//     transition: 'all 1s ease 0s',
//     backgroundColor: 'rgb(255, 255, 255)', width: '400px'});
//
// scene.actors[1].addChange({
//     name: 'go black',
//     left: '500px',
//     top: '200px',
//     transition: 'all 1s ease 0s',
//     backgroundColor: 'rgb(255, 255, 255)', width: '50px'});
//
//
//
//
// scene.actors[1].addChange({
//     ...this.convertCssStringToObject(shapes.mountain),
//     name: 'go triangle',
// });
// scene.actors[1].addChange({
//     ...this.convertCssStringToObject(shapes.pacMan),
//     name: 'go pacMan',
//     transition: 'all 2s ease 0s',
//     left: '100px',
//     top: '100px',
// });
// scene.actors[1].addChange({
//     ...this.convertCssStringToObject(shapes.triangle),
//     name: 'go triangle',
//     transition: 'all 2s ease 0s',
// });
// scene.actors[1].addChange({
//     ...this.convertCssStringToObject(shapes.pacMan),
//     name: 'go pacMan',
//     transition: 'all 2s ease 0s',
// });

function convertCssStringToObject(input) {
    let result = {},
        attributes = input.trim().split(';');

    for (let i = 0; i < attributes.length; i++) {
        let entry = attributes[i].split(':').map( item => item.trim());
        result[entry.splice(0,1)[0].replace(/\s/g, "")] = entry.join(':');
    }
    return result;
}


const s = Snap();
const bigCircle = s.circle(100, 100, 50);
bigCircle.attr({
    fill: "#bada55",
    stroke: "#000",
    strokeWidth: 5,
});
const smallCircle = s.circle(70, 100, 40);
const discs = s.group(smallCircle, s.circle(130, 100, 40));
discs.attr({
    fill: Snap('#pattern')
});
bigCircle.drag();
bigCircle.attr({
    mask: discs,
});

smallCircle.animate({r: 50}, 1000);
Snap.load('mascot.svg', function (fragment) {
    const yell = '#eed509';
    const other = '#f0d602';
    console.log('fragment', fragment);
    const item = fragment.select('#layer1');
    console.log('item', item);
    const items = item.selectAll('[fill="'+yell+'"]');
    console.log('items', items);
    // item.select(`path[id='path4547']`).attr({fill: '#000000'});
    const head = item.selectAll(`path[style*='#eed509']`)[4];
    item.selectAll(`path[style*='#eed509']`).attr({fill: '#ffffff'});
    item.selectAll(`path[style*='#f0d602']`).attr({fill: 'purple'});
    // head.attr({
    //     fill: '#cbacab'
    // });
    s.append(item);

    item.drag();

    item.animate({ d: fancyCupPoints }, 1000, mina.backout, toSimple)
});
const svg = document.getElementById("cups");

const simpleCup = Snap.select('#simple-cup');
simpleCup['d'] = simpleCupPoints;
const fancyCup = Snap.select('#fancy-cup');
fancyCup['d'] = fancyCupPoints;
console.log('fancy', fancyCupPoints);
console.log('simple', simpleCupPoints);
simpleCup.drag();
fancyCup.drag();
const toFancy = function(){
    simpleCup.animate({ d: fancyCupPoints }, 1000, mina.backout, toSimple);

};
const toSimple = function(){
    simpleCup.animate({ d: simpleCupPoints }, 1000, mina.backout, toFancy);
};

toSimple();
