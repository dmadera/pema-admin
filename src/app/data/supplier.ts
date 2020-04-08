
export class Supplier {
    private _id: number;
    private _name: string;
    private _feed: string;

    constructor(i: {id: number, name: string, feed: string}) {
        this._id = i.id;
        this._name = i.name;
        this._feed = i.feed;
    }

    get id () {
        return this._id;
    }
    get name () {
        return this._name;
    }
    get feed () {
        return this._feed;
    }

    public toString() {
        return this._id + ": " + this._name;
    }
}