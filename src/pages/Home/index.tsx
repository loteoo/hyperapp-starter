import StateViewer from '/src/components/StateViewer';
import { State } from '/src/lib/state';
import utils from '/src/lib/utils.module.css';

const Increment = (state: State) => ({
  ...state,
  count: state.count + 1,
});

const HomePage = (state: State) => {
  return (
    <div class={utils.container}>
      <h1>👋 Welcome to hyperapp</h1>
      <div class={utils.group}>
        <h4 style={{ margin: '0' }}>Current count: {state.count}</h4>
        <button onclick={Increment}>Increment</button>
      </div>
      <StateViewer state={state} />
      <a href="/?a=2&b=2">Query params test</a>
    </div>
  );
};

export default HomePage;
