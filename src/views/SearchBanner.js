import React from 'react'
import { InputGroup, FormControl } from "react-bootstrap";


const SearchBanner = ({ searchQuery, onChange}) => {



    return (
        <div className='searchBannerCon'>
            <div className='searchBar'>
                <InputGroup className="col-6">
                    <FormControl
                        style={{ background: '#A8014E'}}
                        placeholder="Search characters"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        value={searchQuery}
                        onChange={(e) => onChange(e)}
                        id='searchInput'
                        // onChange={setValueHandle}
                    />

                </InputGroup>
            </div>
        </div>
    )
}

export default SearchBanner