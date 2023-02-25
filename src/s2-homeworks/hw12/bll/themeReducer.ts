const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): {themeId: number} => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            const newS = {themeId: action.id}
            console.log(newS)
            return newS
        default:
            return state
    }
}

type changeThemeIdType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) as const  // fix any
