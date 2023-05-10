import { IOrder, IProduct } from "types/types";
import s from "./FullProduct.module.scss";
import { TrashFill } from "react-bootstrap-icons";
import { useState } from "react";
import { CustomModal } from "components/Modal/Modal";

interface Props {
  product: IProduct;
  order: IOrder;
}

export const FullProduct = ({ product, order }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={s.item}>
      <div className={s.title}>
        <h1 className="text-primary">{product.title}</h1>
        <h3 className="text-secondary">{product.serialNumber}</h3>
      </div>

      <div className={s.delete} onClick={() => setIsOpen(true)}>
        <TrashFill color="#95A3AA" />
      </div>
      <CustomModal
        product={product}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        type="order"
        order={order}
      />
    </div>
  );
};
