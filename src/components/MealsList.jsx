import { useNavigate } from "react-router-dom";
import { MealItem } from "./MealItem";


function MealsList(props) {

    const { meals } = props;
    const navigate = useNavigate()

    return(
        <div className="meals_content">
            <button className="btn btn-back" onClick={() => navigate(-1)}>Go back</button>
            {meals.map(meal => {
                return <MealItem key={meal.idMeal} {...meal} />
            })}
        </div>
    )

}

export {  MealsList  }