import { useState, useEffect } from "react";

// export default function Home() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <div>{count}</div>
//       <div>
//         <button onClick={() => setCount((cnt) => cnt + 1)}>increment</button>
//         <button onClick={() => setCount((cnt) => cnt - 1)}>decrement</button>
//       </div>
//     </div>
//   );
// }

// export const getServerSideProps = () => {
//   return { props: { initialCount: 10 } }; // カウンターの初期値を10にする
// };

// export default function Home({ initialCount }) {
//   // initialCountがgetServerSidePropsから受け取れる
//   const [count, setCount] = useState(initialCount);
//   return (
//     <div>
//       <div>{count}</div>
//       <div>
//         <button onClick={() => setCount((cnt) => cnt + 1)}>increment</button>
//         <button onClick={() => setCount((cnt) => cnt - 1)}>decrement</button>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   // 動かない例だがしかし動いた
//   const [holidays, setHolidays] = useState([]);
//   useEffect(() => {
//     fetch("https://date.nager.at/api/v2/PublicHolidays/2022/JP")
//       .then((r) => r.json())
//       .then((data) => {
//         setHolidays(data);
//       });
//   }, []);
//   return (
//     <div>
//       {holidays.map((day) => (
//         <div key={day.name}>{day.localName}</div>
//       ))}
//     </div>
//   );
// }

export default function Home() {
  const [holidays, setHolidays] = useState([]);
  useEffect(() => {
    fetch("/api/holidays") // ここをProxyしたAPIにする
      .then((r) => r.json())
      .then((data) => {
        setHolidays(data);
      });
  }, []);
  return (
    <div>
      {holidays.map((day) => (
        <div key={day.name}>{day.localName}</div>
      ))}
    </div>
  );
}
