class Scenes {
    scenes = [];
    sceneIds = {};
    currentSceneId = null;

    constructor(props) {
    }

    addScene(scene) {
        this.sceneIds[scene.id] = scene.id;
        this.scenes.push(scene);
    }
}
