import Breadcrumb from "react-bootstrap/Breadcrumb";

interface Props {
  items?: string[];
}

export const SectionTitle = ({ items }: Props) => {
  return (
    <Breadcrumb>
      {items &&
        items.map((item, i) => (
          <Breadcrumb.Item className="font-weight-bold h2" active key={i}>
            {item}
          </Breadcrumb.Item>
        ))}
    </Breadcrumb>
  );
};
