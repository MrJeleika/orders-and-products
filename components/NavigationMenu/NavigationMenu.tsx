import Stack from "react-bootstrap/Stack";
import s from "./NavigationMenu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Badge from "react-bootstrap/Badge";
import { GearFill } from "react-bootstrap-icons";

export const NavigationMenu = () => {
  const router = useRouter();
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
            Приход
          </Link>
        </li>
        <li>
          <Link href={"/groups"} className={router.pathname == "/groups" ? s.active : ""}>
            Группы
          </Link>
        </li>
        <li>
          <Link href={"/products"} className={router.pathname == "/products" ? s.active : ""}>
            Продукты
          </Link>
        </li>
        <li>
          <Link href={"/users"} className={router.pathname == "/users" ? s.active : ""}>
            Пользователи
          </Link>
        </li>
        <li>
          <Link href={"/settings"} className={router.pathname == "/settings" ? s.active : ""}>
            Настройки
          </Link>
        </li>
      </ul>
    </Stack>
  );
};
