
class Ticker {
    count = 0;
    subCounter = 0;

    constructor(a, b, subTickAmount = 1) {
        this.subTickAmount = subTickAmount;
        this.outerTickAmount = b - a;
        this.from = a;
        this.to = b;
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