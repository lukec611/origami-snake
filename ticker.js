
class Ticker {
    constructor(a, b, subTickAmount = 1) {
        this.subTickAmount = subTickAmount;
        this.outerTickAmount = b - a;
        this.from = a;
        this.to = b;
        this.count = 0;
        this.subCounter = 0;
    }

    innerTick() {
        const nextSubCounter = this.subCounter + 1;
        if (nextSubCounter === this.subTickAmount - 1) this.count++;
        this.count %= this.outerTickAmount;
        this.subCounter = nextSubCounter % this.subTickAmount;
    }

    getTick() {
        return this.count + this.from;
    }
}