export default function createStore(reducer){
// your code here!
  let state;
  let listeners = []

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach( listener => listener() )
  }

  const subscribe = (listener) => {
    listeners.push(listener)
  }

  dispatch({})

  const getState = () => {
    return state;
  }

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  }
}
