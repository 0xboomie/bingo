export default class CardController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.showCards(this.model.cards, this.submitNumber.bind(this), this.resetNumbers.bind(this))
        this.initializeCards()
    }

    initializeCards() {
        let numbers = this.model.getNumbers()

        numbers.forEach(number => {
            this.view.updateCards(number)
        });
    }

    submitNumber(number) {
        number = parseInt(number);
        if (number > 0) {

            this.model.addNumber(number);

            this.view.updateCards(number)
        }
    }

    resetNumbers() {
        this.model.resetNumbers()
        window.location.reload();
    }
}