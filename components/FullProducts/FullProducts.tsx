import { IOrder } from "types/types";
import s from "./FullProducts.module.scss";
import { FullProduct } from "./FullProduct/FullProduct";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import { Badge3d, Plus, X } from "react-bootstrap-icons";
import "animate.css";
import { useAppSelector } from "redux/app/hooks";

interface Props {
  orderId: number;
  setOrder: (number: number) => void;
}

export const FullProducts = ({ orderId, setOrder }: Props) => {
  const { orders } = useAppSelector((state) => state.app);
  const order = orders.find((order) => order.id === orderId);

  return (
    <>
      {order && (
        <div className={`${s.wrapper} animate__animated animate__fadeInRight animate__faster`}>
          <div className="product-item">
            <div className={s.title}>
              <h1 className="text-primary">{order.title}</h1>
            </div>
            <Badge onClick={() => setOrder(0)} bg="light" className={s.badge}>
              <X fill="gray" width={20} />
            </Badge>
            <div className={s.add}>
              <div>
                <Plus color="white" />
              </div>
              <h1>Добавить продукт</h1>
            </div>

            <div className={s.body}>
              {order.products &&
                order.products.map((product, i) => (
                  <FullProduct product={product} key={i} order={order} />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
