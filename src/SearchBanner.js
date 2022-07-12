import React from 'react'
import './SearchBanner.css';
import { InputGroup, FormControl } from "react-bootstrap";


const SearchBanner = ({ searchedValue , onChange}) => {



    return (
        <div className='searchBannerCon'>
            <div className='searchBar'>
                <InputGroup className="col-6">
                    <FormControl
                        style={{ background: '#A8014E'}}
                        placeholder="Search characters"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        value={searchedValue}
                        onChange={(e) => onChange(e)}
                        // onChange={setValueHandle}
                    />

                </InputGroup>
            </div>
        </div>
    )
}

export default SearchBanner