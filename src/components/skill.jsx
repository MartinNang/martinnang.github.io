import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

const Skill = ({ name, icon }) => {
  return (
    <Col xs={6} sm={6} md={4} className="mb-5">
      <Card class="skill text-white">
        <img src={icon} width={100} alt={name + " icon."} />
        <p>{name}</p>
      </Card>
    </Col>
  );
};

export default Skill;
