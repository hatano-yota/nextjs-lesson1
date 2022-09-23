import { useState, useEffect } from "react";

export default function Home() {
  // 動かない例だがしかし動いた
  const [holidays, setHolidays] = useState([]);
  useEffect(() => {
    fetch("https://date.nager.at/api/v2/PublicHolidays/2022/JP")
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
