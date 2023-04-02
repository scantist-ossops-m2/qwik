import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const count = useSignal(0);

  return (
    <>
      <button onClick$={() => count.value++}>Increment</button>
      <div>Count: {count.value}</div>
    </>
  );
});