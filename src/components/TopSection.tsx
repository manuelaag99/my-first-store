import { ChangeEvent } from "react";

interface props {
    getSearchQuery: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function TopSection ({ getSearchQuery }: props) {
    function changeInputHandler (event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
        const textInSearchBar = event.target.value;
        getSearchQuery(event);
    }

    return (
        <div className='top-container'>
            <div className="top-store-logo-container">

            </div>
            <div className="top-search-input-container">
                <div className="search-input-box">
                    <input className="search-input" onChange={changeInputHandler} type="text" />
                    <button></button>
                </div>
            </div>
        </div>
    )
}