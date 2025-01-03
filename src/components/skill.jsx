import Col from "react-bootstrap/Col";

const Skill = ({ name, icon }) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-5">
      <div class="skill">
        <img src={icon} width={100} alt={name + " icon."} />
        <p>{name}</p>
      </div>
    </Col>
  );
};

export default Skill;
