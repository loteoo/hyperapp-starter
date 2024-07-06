import { State } from '/src/lib/state';

const StateViewer = ({ state }: { state: State }) => {
  return (
    <details>
      <summary>Show app state</summary>
      <pre>
        <code>{`state: ${JSON.stringify(state, null, 2)}`}</code>
      </pre>
    </details>
  );
};

export default StateViewer;
