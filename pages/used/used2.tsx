import { useState } from "react";

export const getServerSideProps = () => {
  return { props: { initialCount: 10 } }; // カウンターの初期値を10にする
};

export default function Home({ initialCount }) {
  // initialCountがgetServerSidePropsから受け取れる
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount((cnt) => cnt + 1)}>increment</button>
        <button onClick={() => setCount((cnt) => cnt - 1)}>decrement</button>
      </div>
    </div>
  );
}
