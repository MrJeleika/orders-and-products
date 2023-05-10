import moment from "moment";
import "moment-timezone";
import { useState } from "react";
import { Clock } from "react-bootstrap-icons";
import s from "./Clock.module.scss";

interface DateTime {
  time: string;
  date: string;
  day: string;
}

export const MenuClock = () => {
  const tz = moment.tz.guess();
  const [dateTime, setDateTime] = useState<DateTime>({ time: "", date: "", day: "" });
  const [date, month, year] = dateTime.date.split(" ");
  setInterval(() => {
    setDateTime({
      time: moment().tz(tz).format("HH:mm"),
      date: moment().tz(tz).format("LL"),
      day: moment().tz(tz).format("dddd"),
    });
  }, 1000);
  return (
    <div>
      {date && (
        <>
          <p>{dateTime.day}</p>
          <p>
            <span className={s.day}>{date} </span>
            {month}, {year}
            <span className="mx-2">
              <Clock fill="#88C048" />
            </span>
            {dateTime.time}
          </p>
        </>
      )}
    </div>
  );
};
