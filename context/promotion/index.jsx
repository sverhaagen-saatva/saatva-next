import React, { createContext, useReducer } from 'react'
import Types from './types'
import promotionStateReducer from './reducer'
import promotionState from './state'
import PromotionActions from './actions'

const Context = createContext()
const Consumer = Context.Consumer

const Provider = (props) => {
    const updatedPromotion = {
        ...promotionState,
        ...props.value
    }

    const [promotion, promotionDispatch] = useReducer(promotionStateReducer, updatedPromotion)
    const promotionActions = new PromotionActions(promotionDispatch, promotion)
    return (
        <Context.Provider value={{ promotion, promotionActions }}>
            {props.children}
        </Context.Provider>
    )
}

export default {
    Provider,
    Context,
    Consumer,
    Types
}
