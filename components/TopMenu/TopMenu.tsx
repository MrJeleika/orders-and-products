import s from "./TopMenu.module.scss";
import { Logo } from "components/svg/Logo";
import "moment/locale/ru";
import "moment/locale/en-gb";
import { MenuClock } from "components/Clock/Clock";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const TopMenu = () => {
  const [lang, setLang] = useState<string>("en");

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <nav className={s.menu}>
      <div className="d-flex align-items-center">
        <div className={s.menu__logo}>
          <Logo color="#88C048" height={50} width={50} />
        </div>
        <h1 className={s.menu__title}>Inventory</h1>
      </div>
      <div className={s.info}>
        <MenuClock />
        <div className={s.lang}>
          <h1 className="text-primary" onClick={() => setLang("en")}>
            EN
          </h1>
          <h1 className="text-primary" onClick={() => setLang("ru")}>
            RU
          </h1>
        </div>
      </div>
      {/* <SessionCounter /> */}
    </nav>
  );
};
