import { Link } from "react-router-dom";

function MealItem (props) {
    const {idMeal: mealID, strMeal: mealName, strMealThumb: mealImg} = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={mealImg} alt={mealName} />
            </div>
            <div className="card-content">
                <span className="card-title">{mealName}</span>
            </div>
            <div className="card-action">
                <Link to={`/meals/${mealID}`} className="btn"> Show recept </Link>
            </div>
        </div>
    )
}

export {  MealItem  }