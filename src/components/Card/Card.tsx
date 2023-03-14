import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExerciseStructure } from "../../store/features/exercises/types";
import CardStyled from "./CardStyled";

interface ExerciseCardProps {
  exercise: ExerciseStructure;
}

const Card = ({ exercise }: ExerciseCardProps): JSX.Element => {
  return (
    <CardStyled className="exercise">
      <img
        className="exercise__image"
        src={exercise.image}
        alt={exercise.name}
        width={350}
        height={225}
      />
      <div className="exercise__container">
        <div className="exercise__heading heading">
          <h2 className="heading__title">{exercise.name}</h2>
          <FontAwesomeIcon icon={faHeart} className="heading__icon" />
        </div>
        <div className="exercise__data data">
          <div className="data-container">
            <span className="data__title">Type: </span>
            <span className="data__value">{exercise.type}</span>
          </div>
          <div className="data-container">
            <span className="data__title">Primary muscle: </span>
            <span className="data__value">{exercise.muscles.primary}</span>
          </div>
          <div className="data-container">
            <span className="data__title">Secondary muscles: </span>
            <span className="data__value">
              {exercise.muscles.secondary[0]} {exercise.muscles.secondary[1]}
            </span>
          </div>
          <div className="data-container">
            <span className="data__title">Difficulty: </span>
            <span className="data__value">{exercise.difficulty}</span>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;
