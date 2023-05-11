import Breadcrumb from "react-bootstrap/Breadcrumb";
import s from "./SectionTitle.module.scss";
import { useTranslation } from "react-i18next";

interface Props {
  items?: string[];
}

export const SectionTitle = ({ items }: Props) => {
  const { t } = useTranslation();
  return (
    <Breadcrumb>
      {items &&
        items.map((item, i) => (
          <Breadcrumb.Item className={s.title} active key={i}>
            {t(item)}
          </Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
};
