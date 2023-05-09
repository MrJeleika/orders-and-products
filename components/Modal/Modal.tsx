import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { IOrder, IProduct } from "types/types";
import s from "./Modal.module.scss";
import Badge from "react-bootstrap/Badge";
import { X } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { deleteProduct } from "redux/slice/appSlice";
import { useAppSelector } from "redux/app/hooks";

type Items = IProduct | IOrder;
type Type = "product";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  product: Items;
  type: Type;
}

export const CustomModal = ({ isOpen, setIsOpen, product, type }: Props) => {
  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);
  const { products } = useAppSelector((state) => state.app);
  console.log(products);

  const dispatch = useDispatch();

  const deleteItem = (item: Items) => {
    if (type === "product") dispatch(deleteProduct(product.id));
    handleClose();
  };

  return (
    <Modal show={isOpen} onHide={handleClose} className={s.modal} size="lg">
      <Modal.Header className={s.header}>
        <Modal.Title className={s.title}>Вы уверены что хотите удалить этот приход?</Modal.Title>
        <Badge onClick={handleClose} bg="light" className={s.badge}>
          <X fill="gray" width={20} />
        </Badge>
      </Modal.Header>
      <Modal.Body className={s.body}>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer className={s.footer}>
        <Button variant="secondary" onClick={handleClose}>
          отменить
        </Button>
        <Button variant="primary" onClick={() => deleteItem(product)}>
          удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
