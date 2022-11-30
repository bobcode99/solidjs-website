import { Component, createSignal, onCleanup } from 'solid-js';


const Count: Component = () => {
  const [num, setNum] = createSignal(0);
  setInterval(() => setNum((num() + 1) % 255), 30)

  return (
    <div style={{
      color: `rgb(${num()}, 180, ${num()})`,
      "font-weight": 800,
      "font-size": `${num()}px`}}
    >${num}</div>
  );
};

export default Count;
