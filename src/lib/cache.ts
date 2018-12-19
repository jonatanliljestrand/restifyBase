export default class Cache {
    cacheTime: number;

    private value: any;

    private timeStamp: number = null;

    constructor(cacheTime: number = 20 * 60 * 1000, initialValue: any = null) {
        this.cacheTime = cacheTime;
        this.value = initialValue;

        if (initialValue !== null) {
            this.timeStamp = new Date().getTime();
        }
    }

    getValue() {
        if (!this.valid()) this.value = null;
        return this.value;
    }

    update(value) {
        this.value = value;
        this.timeStamp = new Date().getTime();
    }

    valid() {
        const currentDate = new Date().getTime();
        return this.timeStamp !== null && ((currentDate - this.timeStamp) < this.cacheTime);
    }
}
