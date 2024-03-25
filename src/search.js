import React, { useEffect, useState } from 'react'
import InfiniteScroll from './infiniteScroll';

const Search = (props) => {
    const [val, setVal] = useState();
    const [data, setData] = useState([])
    const url = "https://gist.githubusercontent.com/reitwiec/708b4ec1b036aea2a8bac2b983223121/raw/433520cd58f1446c08631c59cef0a0f4bdcf15ca/states.json";

    function debounce(func, timeout = 300){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { console.log('in async func223');});
        };
      }

    let count = 0;
    const getData = () => {
        console.log("inside func334", count)
        count++;
    }
    return (
        <>
            <div style={{ marginTop: '100px' }}>
                <input value={val} onChange={(e) => debounce(() => getData(), 300)} />
            </div>
            {/* <InfiniteScroll query={val}/> */}
        </>
    )

}

export default Search;