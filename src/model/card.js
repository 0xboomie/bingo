export default class Card {
    constructor(id) {
        this.id = id;
        this.grid = [
            [],
            [],
            []
        ];

        this.owner = "";
    }

    setOwner(owner) {
        this.owner = owner;
    }
}