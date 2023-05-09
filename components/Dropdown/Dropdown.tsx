import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/app/hooks";
import { setFilter } from "redux/slice/appSlice";
import s from "./Dropdown.module.scss";

interface Props {
  filterType: "type" | "specification";
}

export const CustomDropdown = ({ filterType }: Props) => {
  const { products } = useAppSelector((state) => state.app);
  const [uniqueProducts, setUniqueProducts] = useState<string[]>([]);
  const [localFilter, setLocalFilter] = useState<string>("");

  useEffect(() => {
    // set unique products
    products.forEach((product) =>
      !uniqueProducts.includes(filterType === "type" ? product.type : product.specification)
        ? setUniqueProducts([
            ...uniqueProducts,
            filterType === "type" ? product.type : product.specification,
          ])
        : null
    );
  }, [products]);

  const dispatch = useDispatch();

  const handleSetFilter = (filter: string) => {
    setLocalFilter(filter);
    dispatch(
      setFilter({
        filter,
        filterType,
      })
    );
  };

  return (
    <Dropdown onSelect={(val) => handleSetFilter(val ? val : "")}>
      <Dropdown.Toggle id="dropdown-custom-components" className={s.toggle}>
        {localFilter}
      </Dropdown.Toggle>
      <Dropdown.Menu className={s.menu}>
        <Dropdown.Item eventKey={""} className={s.item}>
          None
        </Dropdown.Item>
        {uniqueProducts &&
          uniqueProducts.map((product, i) => (
            <Dropdown.Item eventKey={product} className={s.item} key={i}>
              {product}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
