const BUY_CAKE = 'BUY_CAKE';

function BuyCake () {
    return {
        type:BUY_CAKE,
        info:"First Redux Action"
    }
}

const initialState = {
    numOfCakes = 10
}

const reducer =  (state = initialState, action) => {
    switch (action.type) {

    case typeName:
        return { ...state, ...payload }

    default:
        return state
    }
}
