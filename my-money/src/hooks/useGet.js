import { useReducer, useEffect } from 'react'
import axios from 'axios'

const reducer = (state, action) => {
	//manipulação de estado
	//recebe o estado atual, e uma ação a ser aplicada nesse estado atual, retorna o novo estado em 'data'
	if(action.type === 'REQUEST') {
		return {
			...state,
			loading: true
		}
	}
	if(action.type === 'SUCCESS') {
		return {
			...state,
			loading: false,
			data: action.data
		}
	}
	return state
}
	

const useGet = url => {
	//reducer
	const [state, dispatch] = useReducer(reducer, {
		//estado interno inicial
		loading: true,
		data: {}
	})
	useEffect(() => {
		dispatch({ type: 'REQUEST' })
		axios
			.get(url)
			.then(res => {
				dispatch({
					type: 'SUCCESS',
					data: res.data
				})
			})
	},[])
	return state
}

export default useGet