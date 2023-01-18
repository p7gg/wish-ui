/* @refresh reload */
import { Component, createSignal } from 'solid-js'
import { render } from 'solid-js/web'

const App: Component = () => {
  const [count, setCount] = createSignal(0)
  const increment = () => setCount(count() + 1)

  return (
    <div>
      <h4>Counter component</h4>
      <p>it's very important...</p>
      <button onClick={increment}>{count()}</button>
    </div>
  )
}

render(() => <App />, document.getElementById('root')!)
