class Scenes {
    scenes = [];
    sceneIds = {};
    currentSceneId = null;

    addScene(scene) {
        this.sceneIds[scene.id] = scene;
        this.scenes.push(scene);
        scene.scenes = this;


        if (!this.currentSceneId) {
            this.currentSceneId = scene.id;
        }
    }

    renderScene() {
        this.sceneIds[this.currentSceneId].renderView();
    }
}
