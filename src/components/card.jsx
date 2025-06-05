import {Badge, Card, CardBody, CardFooter, CardImg, Carousel} from "react-bootstrap";
/**
 * A basic Bootstrap card template for projects.
 * @param {id} id of the dynamically generated element
 * @param {name} name of the project
 * @param {date} release date
 * @param {description} project description
 * @param {link} url used in button element to link to project
 * @param {linkText} text displayed in button
 * @returns a bootstrap card element containing project information.
 */
const CustomCard = ({
  id,
  images,
  name,
  loop,
  audio,
  date,
  description,
  link,
  linkText,
  tags,
}) => {
  return (
    <Card key={id} className="m-2 p-2 bg-dark text-white">
      {
        images ? images?.length > 1 ? (
            <Carousel interval={null} touch>
              {
                images.map(image => (
                    <Carousel.Item>
                      <CardImg
                          variant="top"
                          src={process.env.PUBLIC_URL + "/img/" + image}
                          alt="${name}"
                      />
                    </Carousel.Item>
                ))
              }
            </Carousel>
          ) : <CardImg
            variant="top"
            src={process.env.PUBLIC_URL + "/img/" + images[0]}
            alt="${name}"
        /> : ""
      }
      {audio ? (
        <audio controls loop={loop} class="project-cover col w-100">
          <source
            src={process.env.PUBLIC_URL + "/audio/" + audio}
            type="audio/mp3"
          />
          Your browser does not support the audio element.
        </audio>
      ) : (
        ""
      )}
      <CardBody>
        <h2 class="card-title">{name}</h2>
        <p class="project-date">
          Date: {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
        </p>
        <p class="card-text project-description">{description ? description[0].length > 250 ? `${description[0]?.substring(0, 250)}...`:description : ""}</p>
        {link && linkText ? (
          <a
            href={link.startsWith("/") ? process.env.PUBLIC_URL + link : link}
            target="_blank"
            class="btn btn-primary repo-button">
            {linkText}
          </a>
        ) : (
          ""
        )}
      </CardBody>
      <CardFooter className="row">
        <small class="text-light">{tags ?
            tags.map((tag, i) => (
                <Badge bg="secondary" className={"me-1"}>{tag}</Badge>
            ))
            : tags}</small>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
