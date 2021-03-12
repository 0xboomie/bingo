export default class CardView {

    constructor() {
        this.app = document.getElementById("root")
    }

    showCards(cards, submitNumber, resetNumbers) {
        let input = document.getElementById("numberInput")

        input.addEventListener("keypress", function(event) {
            if (event.key === 'Enter') {
                submitNumber(input.value)
                input.value = "";
            }
        })

        let button = document.getElementById("resetNumbers")

        button.addEventListener("click", function(event) {
            resetNumbers();
        })

        let cardFactory = new CardFactory();
        cards.forEach((card, index) => {
            this.app.appendChild(cardFactory.createView(card, index))
        });
    }

    updateCards(number) {
        let fields = document.getElementsByClassName(number)

        console.log(fields)

        for (let i = 0; i < fields.length; i++) {
            fields[i].className += " crossed"
        }
    }

}

class CardFactory {
    createView(card, index) {
        let table = document.createElement("table");
        table.setAttribute("id", index)
        table.setAttribute("class", "card")

        table.appendChild(this.setHeader(card.owner, card.id))

        card.grid.forEach(grid => {
            let tr = document.createElement("tr");
            grid.forEach(number => {
                let td = document.createElement("td");

                if (number === 0) {
                    td.setAttribute("class", "zero" + number)
                } else {
                    td.setAttribute("class", "filled " + number)
                }

                td.innerHTML += number;

                tr.appendChild(td)
            });

            table.appendChild(tr)
        });

        return table;
    }

    setHeader(owner, id) {
        let header = document.createElement("h2");
        header.innerText = owner + " " + id
        return header;
    }
}