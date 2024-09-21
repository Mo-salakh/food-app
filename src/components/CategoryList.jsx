import { CategoryItem } from "./CategoryItem";

function CategoryList(props) {
    const { categories } = props;
    return (
        <div className="categories_content">
            {categories.map(category => {
                return <CategoryItem key={category.idCategory} {...category} />
            })}
        </div>
    )
}

export {  CategoryList  }