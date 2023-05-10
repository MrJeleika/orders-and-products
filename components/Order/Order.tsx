import { IOrder, IProduct } from "types/types";
import s from "./Order.module.scss";
import { ListUl } from "react-bootstrap-icons";
import { formatWordCount } from "utils";
import moment from "moment";

interface Props {
  order: IOrder;
  setOrder: (number: number) => void;
  isOrder: boolean;
}

export const Order = ({ order, setOrder, isOrder }: Props) => {
  return (
    <div className="product-item" onClick={() => setOrder(order.id)}>
      <div className={s.wrapper}>
        {!isOrder ? (
          <div className={s.title}>
            <h1 className="text-primary">{order.title}</h1>
          </div>
        ) : null}
        <div className={s.list}>
          <ListUl width={20} height={20} color="#454b4e" />
        </div>
        <div className={s.count}>
          <h1 className="text-primary">{order.products.length}</h1>
          <h3 className="text-secondary">
            {formatWordCount(order.products.length, ["Продукт", "Продукта", "Продуктов"])}
          </h3>
        </div>
        <div className={s.date}>
          <span className="text-secondary">
            {moment(order.date).format("L").split("/")[1]} / 12
          </span>
          <h1 className="text-primary">{moment(order.date).format("ll")}</h1>
        </div>
      </div>
    </div>
  );
};
