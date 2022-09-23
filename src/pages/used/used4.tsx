import { useState, useEffect } from "react";

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
