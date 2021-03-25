import Types from './types'

const promotionStateReducer = (state, action) => {
    switch (action.type) {
        case Types.UPDATE_PROMOTION:
            return {
                ...state,
                showBanner: action.payload
            }
        default:
            return state
    }
}

export default promotionStateReducer
