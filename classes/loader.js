import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

class LoadModel {
    constructor(paths = []) {
        this.paths = paths;
        this.data = [];
    }

    async mount() {
        for (const key of this.paths) {
            const loaded = await loader.loadAsync("../" + key)
            this.data.push(loaded)
        }
        return this
    }

    getScenes() {
        return this.data.map(e => e.scene)
    }

}

export {
    LoadModel
}