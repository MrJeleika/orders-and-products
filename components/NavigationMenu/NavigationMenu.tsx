import Stack from "react-bootstrap/Stack";
import s from "./NavigationMenu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Badge from "react-bootstrap/Badge";
import { GearFill } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

export const NavigationMenu = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Stack direction="vertical" className={s.menu}>
      <div className={s.ava}>
        <div>
          <Image
            src={"https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg"}
            alt="Avatar"
            width={100}
            height={100}
          />
          <Badge bg="light" className={s.badge}>
            <GearFill fill="gray" />
          </Badge>
        </div>
      </div>
      <ul className={s.nav}>
        <li>
          <Link href={"/orders"} className={router.pathname == "/orders" ? s.active : ""}>
            {t("orders")}
          </Link>
        </li>
        <li>
          <Link href={"/groups"} className={router.pathname == "/groups" ? s.active : ""}>
            {t("groups")}
          </Link>
        </li>
        <li>
          <Link href={"/products"} className={router.pathname == "/products" ? s.active : ""}>
            {t("products")}
          </Link>
        </li>
        <li>
          <Link href={"/users"} className={router.pathname == "/users" ? s.active : ""}>
            {t("users")}
          </Link>
        </li>
        <li>
          <Link href={"/settings"} className={router.pathname == "/settings" ? s.active : ""}>
            {t("settings")}
          </Link>
        </li>
      </ul>
    </Stack>
  );
};
