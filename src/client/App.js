import React from 'react'
import useAxios from 'axios-hooks'

function App() {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://api.myjson.com/bins/820fc'
  )

  console.log(data, loading, error)

  return (
    <div>
      <button onClick={refetch}>refetch</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error!!!</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default App
