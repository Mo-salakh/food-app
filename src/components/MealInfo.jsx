import { useEffect, useState } from "react"
import { getMealInfo } from "../api"
import { useNavigate, useParams } from "react-router-dom"
import { Preloader } from "./Preloader"



function MealInfo() {

    const {id} = useParams()
    const [mealInfo, setMealInfo] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getMealInfo(id).then(meal => {
            return setMealInfo(meal.meals[0])
        })
    }, [id])

    console.log(mealInfo);
    
    const {strMeal:mealName,strCategory:mealCategory, strMealThumb:mealImg} = mealInfo    


    return (
        <div className="meal-recept_content">
            <button className="btn btn-back" onClick={() => navigate(-1)}>Go back</button>
            {!mealInfo.idMeal ? <Preloader /> :
            <>  
                <h3 className="title">Meal name: {mealName}</h3>
                <img src={mealImg} alt={mealName} /> 
                <h4 className="title">Meal category: {mealCategory}</h4>
                <p className="paragraph"><b>Instruction: </b>{mealInfo.strInstructions}</p>
                
                <h4 className="title">
                    ingredients
                </h4>

                <table>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Object.keys(mealInfo).map((key) => {
                            if(key.includes('Ingredient') && mealInfo[key]) {
                                return (
                                    <tr key={key}>
                                        <td>{mealInfo[key]}</td>
                                        <td>{
                                            mealInfo[`strMeasure${key.slice(13)}`]    
                                        }</td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
                <h4 className="title">video Recipe</h4>
                {mealInfo.strYoutube ? <iframe width='700px' height='350px' title={mealInfo.idMeal} src={`https://www.youtube.com/embed/${mealInfo.strYoutube.slice(-11)}`} allowFullScreen /> 
                
                : 'not found video' }
                
            </>
            }
        </div>
    )
}

export {  MealInfo  }