import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { IOrder, IProduct } from "types/types";
import s from "./Modal.module.scss";
import Badge from "react-bootstrap/Badge";
import { TrashFill, X } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { deleteOrderProduct, deleteProduct } from "redux/slice/appSlice";
import { useAppSelector } from "redux/app/hooks";
import { useTranslation } from "react-i18next";

type Type = "product" | "order";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  product: IProduct;

  // if type == product you should specify order
  order?: IOrder;
  type: Type;
}

export const CustomModal = ({ isOpen, setIsOpen, product, type, order }: Props) => {
  const handleClose = () => setIsOpen(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const deleteItem = () => {
    if (type === "product") dispatch(deleteProduct(product.id));
    if (type === "order")
      dispatch(deleteOrderProduct({ orderId: order!.id, productId: product.id }));
    handleClose();
  };

  return (
    <Modal show={isOpen} onHide={handleClose} className={s.modal} size="lg">
      <Modal.Header className={s.header}>
        <Modal.Title className={s.title}>{t("are_delete")}</Modal.Title>
        <Badge onClick={handleClose} bg="light" className={s.badge}>
          <X fill="gray" width={20} />
        </Badge>
      </Modal.Header>
      <Modal.Body className={s.body}>
        <div className={s.image}>
          {/*<Image src={product.photo} alt="preview" width={70} height={70} />*/}
        </div>
        <div className={s.title}>
          <h1 className="text-primary">{product.title}</h1>
          <h3 className="text-secondary">{product.serialNumber}</h3>
        </div>
      </Modal.Body>
      <Modal.Footer className={s.footer}>
        <Button variant="error" className={`${s.btn} ${s.btnSecondary}`} onClick={handleClose}>
          {t("cancel")}
        </Button>
        <Button variant="error" className={`${s.btn} ${s.btnPrimary}`} onClick={() => deleteItem()}>
          <TrashFill color="rgb(255, 90, 90)" />
          {t("delete")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
