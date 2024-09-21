import { useEffect, useState } from "react"
import { getAllCategories } from "../api"
import { CategoryList } from "../components/CategoryList" 
import { Preloader } from "../components/Preloader" 
import { Search } from "../components/Search"
import { useLocation, useNavigate } from "react-router-dom"

function Home() {

    const [categories, setCategories] = useState([])
    const [filteredCatalog, setFilteredCatalog] = useState([])
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        getAllCategories()
            .then(data => {
                setCategories(data.categories);
                const searchTerm = new URLSearchParams(location.search).get('search') || '';
                setFilteredCatalog(
                    searchTerm 
                        ? data.categories.filter(item => 
                            item.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
                          )
                        : data.categories
                );
            })
            .catch(error => console.error('Ошибка:', error.name, error.message));
    }, [location.search]);

    function handleSearch(str) {
        setFilteredCatalog(categories.filter(item => 
            item.strCategory.toLowerCase().includes(str.toLowerCase())
        ));
        
        navigate({
            pathname: location.pathname,
            search: `?search=${str}`
        });
    }




    return (
        <>
        <Search cb={handleSearch}/>
        {!categories.length ? <Preloader /> : <CategoryList categories={filteredCatalog} />}
        </>
    )
}


export {  Home  }