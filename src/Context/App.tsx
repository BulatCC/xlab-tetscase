import { createContext, ReactNode, useReducer, Dispatch } from 'react';

type UserContextProviderProps = {
    children: ReactNode;
}

type AppState = {
    isBurgerOpen: boolean;
}

type ContextType = {
    state: AppState;
    dispatch: Dispatch<ActionType>;
}

type ActionType = {
    type: string;
    payload: boolean;
}

const actionBurger = (payload: boolean) => {
    return {
        type: 'mobileMenuOpenClose',
        payload: payload,
    }
}

const initialState: AppState = {
    isBurgerOpen: false,
};

const reducer = (state: AppState, action: ActionType) => {
    const { type, payload } = action;
    switch (type) {
        case 'mobileMenuOpenClose':
            return {
                ...state,
                isBurgerOpen: payload,
            };
        default:
            return state;
    }
};

const appContext = createContext<ContextType>({
    state: initialState,
    dispatch: () => null,
});

const AppContextProvider = ({ children }: UserContextProviderProps): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <appContext.Provider value={{ state, dispatch }}>
            {children}
        </appContext.Provider>
    )
}

export { AppContextProvider, appContext, initialState, reducer, actionBurger };
