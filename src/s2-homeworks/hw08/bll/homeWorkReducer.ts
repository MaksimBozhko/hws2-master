import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return action.payload === 'up'
                ? [...state.sort((a: UserType, b: UserType) => a.name > b.name ? 1 : -1)]
                : [...state.sort((a: UserType, b: UserType) => a.name < b.name ? 1 : -1)]
        }
        case 'check': {
            return state.filter(u => action.payload < u.age).sort((a: UserType, b: UserType) => a.name > b.name ? 1 : -1)
        }
        default:
            return state
    }
}
