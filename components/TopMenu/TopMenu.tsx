import s from "./TopMenu.module.scss";
import moment from "moment";
import "moment/locale/ru";
import "moment-timezone";
import { useState } from "react";
import { Clock } from "react-bootstrap-icons";
import { Logo } from "components/svg/Logo";
moment().locale("ru");

interface DateTime {
  time: string;
  date: string;
  day: string;
}

export const TopMenu = () => {
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
    <nav className={s.menu}>
      <div className="d-flex align-items-center">
        <div className={s.menu__logo}>
          <Logo color="#88C048" height={50} width={50} />
        </div>
        <h1 className={s.menu__title}>Inventory</h1>
      </div>
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
    </nav>
  );
};
