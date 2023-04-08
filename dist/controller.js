export default class Controller {
    constructor(_type, _keyboard) {
        this.keyboard = _keyboard;
        this.type = _type;
    }
    up() {
        if (this.type === 'arrow') {
            return this.keyboard.up;
        }
        if (this.type === 'alpha') {
            return this.keyboard.isKeyDown('q');
        }
    }
    down() {
        if (this.type === 'arrow') {
            return this.keyboard.down;
        }
        if (this.type === 'alpha') {
            return this.keyboard.isKeyDown('a');
        }
    }
}
//# sourceMappingURL=controller.js.map