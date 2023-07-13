import { ChangeEvent } from "react";

import SearchSharpIcon from '@mui/icons-material/SearchSharp';

interface props {
    getSearchQuery: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function TopSection ({ getSearchQuery }: props) {
    function changeInputHandler (event: ChangeEvent<HTMLInputElement>) {getSearchQuery(event)}

    return (
        <div className='top-container'>
            <div className="top-store-logo-container">
            
            </div>
            <div className="top-search-input-container">
                <div className="search-input-box">
                    <input className="search-input" onChange={changeInputHandler} type="text" />
                    <button><SearchSharpIcon fontSize="large" /></button>
                </div>
            </div>
        </div>
    )
}