import { useState } from "react";

function Search(props) {

    const [value, setValue] = useState('')

    function handleClick(e) {
        if(e.key === 'Enter')  {
            handleSubmit()
        }
    }

    function handleSubmit() {
        props.cb(value)
        setValue('')
    }

    return (
        <div className="input_box">
            <input 
            type="search" 
            id="search-field"
            value={value}
            onKeyDown={handleClick}
            onChange={(e) => setValue(e.target.value)}
            />

            <button
            className="waves-effect waves-light btn"
            onClick={handleSubmit}
            >
            Seacrh
            </button>
        </div>
    )

}

export {  Search  }