import { SectionTitle } from "components/SectionTitle/SectionTitle";
import s from "./Orders.module.scss";
import { Plus } from "react-bootstrap-icons";
import { wrapper } from "redux/app/store";
import { IOrder } from "types/types";
import { useDispatch } from "react-redux";
import { setOrders } from "redux/slice/appSlice";
import { useEffect, useState } from "react";
import { useAppSelector } from "redux/app/hooks";
import { Order } from "components/Order/Order";
import { FullProducts } from "components/FullProducts/FullProducts";
import "animate.css";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_HOST}/orders`);
  const data: IOrder[] = await res.json();
  // Pass data to the page via props

  return { props: { data } };
});

interface Props {
  data: IOrder[];
}

const Orders = ({ data }: Props) => {
  const { orders } = useAppSelector((state) => state.app);
  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState<number>(0);

  useEffect(() => {
    dispatch(setOrders(data));
  }, [data]);

  return (
    <div>
      <div className={s.title}>
        <div className={s.add}>
          <Plus color="white" />
        </div>
        <SectionTitle items={["Приходы", "25"]} />
      </div>
      <div className={s.body}>
        <div
          className={
            orderId
              ? `${s.orders} + ${s.orders_active} animate__animated animate__fadeInRight animate__faster`
              : `${s.orders} animate__animated animate__fadeIn animate__faster`
          }
        >
          {orders &&
            orders.map((item, i) => (
              <Order key={i} order={item} setOrder={setOrderId} isOrder={Boolean(orderId)} />
            ))}
        </div>
        <div className={orderId ? s.fullOrder : "none"}>
          <FullProducts orderId={orderId} setOrder={setOrderId} />
        </div>
      </div>
    </div>
  );
};

export default Orders;
