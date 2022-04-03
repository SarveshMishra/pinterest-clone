export const ADD_USER = 'ADD_USER'

export const addUser = (user) => { 
    return {
        type: ADD_USER,
        user
    }
}