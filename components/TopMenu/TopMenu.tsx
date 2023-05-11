import s from "./TopMenu.module.scss";
import { Logo } from "components/svg/Logo";
import "moment/locale/ru";
import "moment/locale/en-gb";
import { SessionCounter } from "components/SessionCounter/SessionCounter";
import { MenuClock } from "components/Clock/Clock";

export const TopMenu = () => {
  return (
    <nav className={s.menu}>
      <div className="d-flex align-items-center">
        <div className={s.menu__logo}>
          <Logo color="#88C048" height={50} width={50} />
        </div>
        <h1 className={s.menu__title}>Inventory</h1>
      </div>
      <MenuClock />
      {/* <SessionCounter /> */}
    </nav>
  );
};
