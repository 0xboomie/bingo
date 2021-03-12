import Card from "./card";

export default class CardModel {

    constructor() {
        this.cards = [];
        this.numbers = [];
        this.addCards()
        this.initializeCards()
    }

    addNumber(number) {
        this.numbers.push(number);
        this.saveNumbers()
    }

    resetNumbers() {
        this.numbers = [];
        this.saveNumbers();
    }

    saveNumbers() {
        localStorage.setItem("numbers", JSON.stringify(this.numbers))
    }

    getNumbers() {
        return JSON.parse(localStorage.getItem("numbers"));
    }

    addCards() {
        for (let i = 0; i < 12; i++) {
            this.cards[i] = new Card(i + 1);
        }
    }

    initializeCards() {
        this.cards[0].grid[0] = [2, 0, 0, 30, 0, 52, 0, 71, 83];
        this.cards[0].grid[1] = [0, 11, 20, 0, 45, 0, 62, 72, 0];
        this.cards[0].grid[2] = [0, 17, 29, 0, 0, 58, 64, 0, 85];

        this.cards[1].grid[0] = [3, 0, 23, 0, 44, 57, 0, 0, 87];
        this.cards[1].grid[1] = [0, 0, 25, 31, 0, 59, 0, 70, 88];
        this.cards[1].grid[2] = [4, 15, 0, 36, 49, 0, 61, 0, 0];

        this.cards[2].grid[0] = [0, 10, 22, 0, 41, 52, 0, 70, 0];
        this.cards[2].grid[1] = [1, 0, 24, 32, 0, 0, 60, 0, 80];
        this.cards[2].grid[2] = [0, 18, 0, 38, 47, 0, 0, 73, 89];

        this.cards[3].grid[0] = [5, 0, 0, 33, 0, 54, 0, 75, 82];
        this.cards[3].grid[1] = [7, 0, 21, 0, 40, 0, 65, 78, 0];
        this.cards[3].grid[2] = [0, 12, 0, 34, 47, 0, 66, 0, 86];

        this.cards[4].grid[0] = [0, 14, 22, 30, 0, 0, 61, 0, 82];
        this.cards[4].grid[1] = [6, 0, 0, 0, 42, 51, 0, 77, 90];
        this.cards[4].grid[2] = [8, 0, 25, 0, 48, 0, 67, 79, 0];

        this.cards[5].grid[0] = [0, 15, 0, 34, 0, 50, 66, 79, 0];
        this.cards[5].grid[1] = [9, 0, 0, 37, 42, 56, 0, 0, 80];
        this.cards[5].grid[2] = [0, 16, 27, 0, 43, 0, 68, 0, 83];

        this.cards[6].grid[0] = [4, 0, 0, 35, 44, 0, 0, 75, 86];
        this.cards[6].grid[1] = [0, 10, 29, 0, 0, 53, 62, 76, 0];
        this.cards[6].grid[2] = [0, 12, 0, 38, 0, 58, 67, 0, 90];

        this.cards[7].grid[0] = [2, 0, 20, 0, 45, 55, 0, 72, 0];
        this.cards[7].grid[1] = [0, 11, 0, 32, 48, 0, 65, 74, 0];
        this.cards[7].grid[2] = [5, 0, 21, 39, 0, 56, 0, 0, 85];

        this.cards[8].grid[0] = [0, 13, 0, 33, 0, 51, 63, 0, 89];
        this.cards[8].grid[1] = [1, 0, 28, 0, 46, 0, 69, 74, 0];
        this.cards[8].grid[2] = [9, 18, 0, 36, 0, 53, 0, 78, 0];

        this.cards[9].grid[0] = [3, 0, 27, 35, 0, 0, 63, 0, 81];
        this.cards[9].grid[1] = [0, 16, 0, 37, 41, 55, 0, 76, 0];
        this.cards[9].grid[2] = [0, 19, 28, 0, 46, 59, 0, 0, 84];

        this.cards[10].grid[0] = [6, 14, 0, 0, 40, 0, 60, 0, 81];
        this.cards[10].grid[1] = [7, 0, 23, 31, 0, 57, 0, 77, 0];
        this.cards[10].grid[2] = [0, 19, 26, 0, 43, 0, 69, 0, 88];

        this.cards[11].grid[0] = [0, 13, 24, 0, 0, 50, 64, 0, 84];
        this.cards[11].grid[1] = [0, 17, 26, 0, 49, 0, 68, 71, 0];
        this.cards[11].grid[2] = [8, 0, 0, 39, 0, 54, 0, 73, 87];

        console.log(this.cards)
    }


}