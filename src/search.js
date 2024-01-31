import React, { useState } from 'react'
import InfiniteScroll from './infiniteScroll';

const Search = (props) => {
    const [val, setVal] = useState();

    return (
        <>
            <div style={{ marginTop: '100px' }}>
                <input value={val} onChange={(e) => setVal(e.target.value)} />
            </div>
            <InfiniteScroll query={val}/>
        </>
    )

}

export default Search;