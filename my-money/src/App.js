import React from 'react'
import useGet from './hooks/useGet'

const url = 'https://mymoney-diego.firebaseio.com/movimentacoes/2020-01.json'
const url2 = 'https://mymoney-diego.firebaseio.com/movimentacoes/2020-02.json'

const App = () => {
	const data = useGet(url)
	const data2 = useGet(url2)
	return (
    <div>
			{data.loading && <p>Loading...</p>}
			<h1>My money</h1>
			<pre>{JSON.stringify(data)}</pre>
			<pre>{JSON.stringify(data2)}</pre>
    </div>
  )
}

export default App
