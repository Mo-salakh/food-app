import { Link } from "react-router-dom"

function CategoryItem(props) {

    const {strCategory : categoryName, strCategoryThumb:categoryImg,strCategoryDescription:categoryDescrp} = props


    return (
        <div className="card">
            <div className="card-image">
                <img src={categoryImg} alt={categoryName} />
            </div>
            <div className="card-content">
                <span className="card-title">{categoryName}</span>
                <p>{categoryDescrp.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/categories/${categoryName}`} className="btn"> Watch more </Link>
            </div>
        </div>
    )
}

export {  CategoryItem  }