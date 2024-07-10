import {SearchOtions,SearchInput, SearcheStatus } from 'model/Serch'

export const searchInitialOtions:SearchOtions = "planets"
export const searchInitialInput:SearchInput  = null
export const searchInitialStatus:SearcheStatus  = {
    error: false,
    loading: false,
    empty: false,
    loaded: false,
}
