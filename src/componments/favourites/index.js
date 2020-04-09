import React, {useEffect, useReducer} from "react";
import {getHomeFavourites} from "../../api/request";
import DuduStatusComponent from "../status";
import "./style.scss"
import GoBack from "../back";
import Loading from "../loading";

const initialState = {
    data: [],
    isLoading: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                data: action.payload,
                isLoading: false
            }
        case 'LOADING_TRUE':
            return {
                data: [],
                isLoading: true
            }
        default:
            return state
    }
}

function HomeFavouritesComponent() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({ type: 'LOADING_TRUE' })
        getHomeFavourites()
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res })
            })
        return undefined
    }, [])

    console.log(state.data)
    return (
        <section className="favourites">
            <GoBack/>
            <div>喜欢</div>
            {state.isLoading ? <Loading/>: <DuduStatusComponent featchData={state.data} />}
        </section>
    )
}

export default HomeFavouritesComponent