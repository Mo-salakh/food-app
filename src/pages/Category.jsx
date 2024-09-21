import { useParams } from "react-router-dom"
import { getCategory } from "../api"
import { useEffect } from "react"
import { useState } from "react"
import { Preloader } from "../components/Preloader"
import { MealsList } from "../components/MealsList"
// import { MealList } from "../components/MealList"

function Category(catName) {
    const [meals, setMeals] = useState([])

    const { name } = useParams()

    useEffect(() => {
        getCategory(name).then(data => setMeals(data.meals))
    }, [name])
    

    return (
        <>
        {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
        </>
    )
}   


export {  Category  }