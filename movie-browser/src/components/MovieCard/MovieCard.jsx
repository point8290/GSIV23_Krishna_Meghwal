import Card from "react-bootstrap/Card";
import "./MovieCard.css";
function MovieCard(props) {
  console.log(props);
  return (
    <Card className="p-2 m-2 xs-2 col-sm-2">
      <Card.Img
        variant="top"
        src={"https://image.tmdb.org/t/p/original" + props.movie.poster_path}
      />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text className="wrapToTwoLines">{props.movie.overview}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
