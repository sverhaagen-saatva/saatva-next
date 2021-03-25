import Types from './types'

class PromotionActions {
    constructor (dispatch, state) {
        this.dispatch = dispatch
        this.state = state
    }

    UpdatePromotion = (promotion) => {
        this.dispatch({ type: Types.UPDATE_PROMOTION, payload: promotion })
    }
}

export default PromotionActions
    