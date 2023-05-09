import { IOrder, IProduct } from "types/types";
import s from "./Product.module.scss";
import { TrashFill } from "react-bootstrap-icons";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "moment/locale/en-gb";
import { CustomModal } from "components/Modal/Modal";

export interface Props {
  product: IProduct;
}

interface IDate {
  from: string;
  to: string;
  current: string;
}

export const Product = ({ product }: Props) => {
  const [date, setDate] = useState<IDate>({ current: "", to: "", from: "" });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setDate({
      from: moment(product.guarantee.start).format("L"),
      to: moment(product.guarantee.end).format("L"),
      current: moment(product.date).format("ll"),
    });
  }, []);

  return (
    <div className="product-item">
      <div className={s.wrapper}>
        {/* <div className={s.image}>
        <Image src={product.photo} alt="preview" width={70} height={70} />
      </div> */}
        <div className={s.title}>
          <h1 className="text-primary">{product.title}</h1>
          <h3 className="text-secondary">{product.serialNumber}</h3>
        </div>
        <div className={s.guarantee}>
          <div className="d-flex">
            <span className="text-secondary">с</span>
            <h1 className="text-primary">{date.from}</h1>
          </div>
          <div className="d-flex">
            <span className="text-secondary">по</span>
            <h1 className="text-primary">{date.to}</h1>
          </div>
        </div>
        <div className={s.isNew}>
          <h1 className="text-primary">{product.isNew ? "Новый" : "Б / У"}</h1>
        </div>
        <div className={s.price}>
          {product.price.map((price, i) => (
            <React.Fragment key={i}>
              {price.isDefault ? (
                <h1 className="text-primary"> {price.value + " " + price.symbol} </h1>
              ) : (
                <span className="text-secondary">{price.value + " " + price.symbol}</span>
              )}
            </React.Fragment>
          ))}
          <span></span>
        </div>
        <div className={s.date}>
          <span className="text-secondary">06 / 12</span>
          <h1 className="text-primary">{date.current}</h1>
        </div>
        <div className={s.delete} onClick={() => setIsOpen(true)}>
          <TrashFill color="#95A3AA" />
        </div>
      </div>
      <CustomModal product={product} isOpen={isOpen} setIsOpen={setIsOpen} type="product" />
    </div>
  );
};
