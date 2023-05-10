import Breadcrumb from "react-bootstrap/Breadcrumb";
import s from "./SectionTitle.module.scss";

interface Props {
  items?: string[];
}

export const SectionTitle = ({ items }: Props) => {
  return (
    <Breadcrumb>
      {items &&
        items.map((item, i) => (
          <Breadcrumb.Item className={s.title} active key={i}>
            {item}
          </Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
};
