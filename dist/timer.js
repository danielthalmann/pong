export default class Timer {
    constructor() {
        this.delta = 0.0;
        this.begin = 0.0;
        this.enable = true;
        this._current = (new Date()).getTime();
        this.delta = 0.0;
        this.begin = 0.0;
        this.enable = true;
        window.addEventListener("focus", (event) => {
            this.enable = true;
            this._current = (new Date()).getTime();
        });
        window.addEventListener("blur", (event) => {
            this.enable = false;
            this.delta = 0.0;
        });
    }
    tick() {
        if (!this.enable)
            return 0;
        let newT = (new Date()).getTime();
        this.delta = (newT - this._current) / 1000;
        this._current = newT;
        this.begin += this.delta;
        return this.delta;
    }
}
//# sourceMappingURL=timer.js.map