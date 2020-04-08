
export class Item {
    private _id: number;
    private _title: string;
    private _ean: string;

    constructor(i: {id: number, title: string, ean: string}) {
        this._id = i.id;
        this._title = i.title;
        this._ean = i.ean;
    }

    get id () {
        return this._id;
    }
    get title () {
        return this._title;
    }
    get ean () {
        return this._ean;
    }
}