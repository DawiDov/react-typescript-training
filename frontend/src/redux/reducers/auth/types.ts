export interface AuthState {
  isAuth: boolean
  isLoading: boolean
  error: string
}

/* eslint-disable */
export enum AuthActionEnum {
  SET_AUTH = 'SET-AUTH',
  SET_USER = 'SET-USER',
  SET_IS_LOADING = 'SET-IS-LOADING',
  SET_ERROR = 'SET-ERROR',
}
/* eslint-enable */

export interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH
  payload: boolean
}

export interface SetUserAction {
  type: AuthActionEnum.SET_USER
  payload: string
}

export interface SetIsLoadingAction {
  type: AuthActionEnum.SET_IS_LOADING
  payload: boolean
}

export interface SetErrorAction {
  type: AuthActionEnum.SET_ERROR
  payload: string
}

export type AuthAction =
  | SetAuthAction
  | SetUserAction
  | SetIsLoadingAction
  | SetErrorAction
