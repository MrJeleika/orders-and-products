import { NavigationMenu } from "components/NavigationMenu/NavigationMenu";
import { TopMenu } from "components/TopMenu/TopMenu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <TopMenu />
      <Row>
        <Col sm={2}>
          <NavigationMenu />
        </Col>
        <Col sm={10}>
          <Container fluid className="bg-green">
            {children}
          </Container>
        </Col>
      </Row>
    </>
  );
};
