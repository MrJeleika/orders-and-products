import { CustomDropdown } from "components/Dropdown/Dropdown";
import { Product } from "components/Product/Product";
import { SectionTitle } from "components/SectionTitle/SectionTitle";
import { useEffect, use } from "react";
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { setLang, setProducts } from "redux/slice/appSlice";
import { IProduct } from "types/types";
import s from "./index.module.scss";
import { wrapper } from "redux/app/store";
import { useDispatch } from "react-redux";
import "animate.css";

// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
//   // Fetch data from external API
//   const res = await fetch(`${process.env.API_HOST}/products`);

//   const data: IProduct[] = await res.json();
//   // Pass data to the page via props

//   return { props: { data } };
// });

async function getProducts() {
  const res = await fetch(`${process.env.API_HOST}/products`);
  const data: IProduct[] = await res.json();
  return data;
}

const Products = () => {
  const { filter, products } = useAppSelector((state) => state.app);
  const data = use(getProducts());
  const dispatch = useAppDispatch();

  const { type, specification } = filter;
  useEffect(() => {
    dispatch(setProducts(data));
  }, [data]);

  return (
    <div>
      <div className={s.title}>
        <div>
          <SectionTitle items={["Продукты", "25"]} />
        </div>
        <div className={s.filter}>
          <span className="text-secondary">Тип:</span>
          <CustomDropdown filterType="type" />
        </div>
        <div className={s.filter}>
          <span className="text-secondary">Спецификация:</span>
          <CustomDropdown filterType="specification" />
        </div>
      </div>
      <div className={`${s.content} animate__animated animate__fadeIn animate__faster`}>
        {products &&
          products
            .filter((item) => (type ? (item.type === type ? item : null) : item))
            .filter((item) =>
              specification ? (item.specification === specification ? item : null) : item
            )
            .map((item, i) => <Product key={i} product={item} />)}
      </div>
    </div>
  );
};

export default Products;
