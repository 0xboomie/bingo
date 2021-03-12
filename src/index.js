import CardModel from "./model/card-model"
import CardView from "./view/card-view"

import CardController from './controller/card-controller'

new CardController(new CardModel(), new CardView())