class Scene {
    id = 0;
    actors = [];
    actorIds = {};
    scenes = null;
    constructor(id) {
        this.id = id;
    }
    addActor(actor) {
        this.actorIds[actor.id] = actor.id;
        this.actors.push(actor);
        actor.scene = this;
    }
    renderView() {
        this.actors.forEach( actor => {
            actor.render();
        });
    }
}
