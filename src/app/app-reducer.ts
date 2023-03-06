import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isInitialized: false,
    status: 'idle' as RequestStatusType,
    error: ""
}

export const slice = createSlice({
    name:"app",
    initialState:initialState,
    reducers:{
        setAppErrorAC(state , action:PayloadAction<{error:string}>) {
            state.error = action.payload.error
        },
        setAppStatusAC (state , action:PayloadAction<{status:RequestStatusType}>) {
            state.status = action.payload.status
        },
        setInitializedAC (state , action:PayloadAction<{isInitialized: boolean}>) {
            state.isInitialized = action.payload.isInitialized
        }
    }
})

export const appReducer = slice.reducer
export const {setAppErrorAC,setAppStatusAC,setInitializedAC} = slice.actions

/*
export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case "APP/SET-INITIALIZED":
            return {...state,isInitialized:action.isInitialized}
        default:
            return {...state}
    }
}
*/

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


/*export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setInitializedAC = (isInitialized: boolean) => ({type: 'APP/SET-INITIALIZED', isInitialized} as const)*/

/*export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type  SetInitializedActionType = ReturnType<typeof setInitializedAC>*/
/*
type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | SetInitializedActionType*/
