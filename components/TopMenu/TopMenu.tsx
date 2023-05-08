import s from "./TopMenu.module.scss";
import moment from "moment";
import "moment/locale/he";
import "moment-timezone";
moment().locale("he");

export const TopMenu = () => {
  // const tz = moment.tz.guess();
  // let time: string = moment().tz(tz).format("HH:mm");
  // let date: string = moment().tz(tz).format("LL");

  // setTimeout(() => {
  //   time = moment().tz(tz).format("HH:mm");
  //   date = moment().tz(tz).format("LL");
  // }, 1000);

  return (
    <nav className={s.menu}>
      <div className="d-flex align-items-center">
        <div className={s.menu__logo}>
          <img src="" alt="Logo" />
        </div>
        <h1 className={s.menu__title}>Inventory</h1>
      </div>
      <div>
        <p>Today</p>
        <p>{/* {date} {time} */}</p>
      </div>
    </nav>
  );
};
