import { CustomDropdown } from "components/Dropdown/Dropdown";
import { Product } from "components/Product/Product";
import { SectionTitle } from "components/SectionTitle/SectionTitle";
import { useAppSelector } from "redux/app/hooks";
import { setProducts } from "redux/slice/appSlice";
import { IProduct } from "types/types";
import s from "./index.module.scss";
import { wrapper } from "redux/app/store";
import "animate.css";
import { useTranslation } from "react-i18next";

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_HOST}/products`);

  const data: IProduct[] = await res.json();
  store.dispatch(setProducts(data));
  // Pass data to the page via props

  return { props: {} };
});

const Products = () => {
  const { filter, products } = useAppSelector((state) => state.app);
  const { t } = useTranslation();

  const { type, specification } = filter;

  return (
    <div>
      <div className={s.title}>
        <div>
          <SectionTitle items={["products", "25"]} />
        </div>
        <div className={s.filter}>
          <span className="text-secondary">{t("type")}</span>
          <CustomDropdown filterType="type" />
        </div>
        <div className={s.filter}>
          <span className="text-secondary">{t("specification")}</span>
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
