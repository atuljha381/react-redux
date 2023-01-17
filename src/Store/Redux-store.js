
import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            //In react you must never change the original state as we are doing in the next line, which may result in issues later on (especially in big projects with more date). Though Redux Toolkit automatically detects code like this and creates a copy of the same state which is similar to not changing the original state
            state.counter++;
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})



const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store
