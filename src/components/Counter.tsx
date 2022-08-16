import { createSignal, onCleanup } from "solid-js";

import type { Component } from "solid-js";

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0);

  const interval = setInterval(() => setCount((c) => c + 1), 1000);

  onCleanup(() => clearInterval(interval));

  return <div>Count value is {count()}</div>;
};
