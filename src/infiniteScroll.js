import React, { useCallback, useEffect, useRef, useState } from 'react'

/**
* @author
* @function InfiniteScroll
**/

const InfiniteScroll = ({ query = '' }) => {
  const [hasMore, setHasMore] = useState(false);
  const [data, setData] = useState([]);
  const dataRef = useRef([])
  const [page, setPage] = useState(1)
  const [loader, setLoader] = useState(false);
  const controllerRef = useRef(null);
  function debounce(func, delay) {
    let timer = null;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => func(...args), delay);
    };
  }
  useEffect(() => {
    console.log("ins query22")
    debounce(() => console.log('in***',query), 100);
  }, [query])
 
  const fetchData = useCallback(async (page, query) => {
    setLoader(true)
    try {
      // if (controllerRef.current) controllerRef.current.abort();
      // controllerRef.current = new AbortController();
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}&page=${page}`);
      const res = await response.json();
      dataRef.current = [...dataRef.current, ...res.docs]
      const prevData = [...data, ...res.docs];
      setLoader(false);
      setData(prevData);
    } catch (error) {
      console.log("error");
    }
  }, [page])
  return (
    <div>
      {loader ? <p>Loading</p> : data.map((item) => {
        return (<div>
          <h3>{item.title}</h3>
        </div>)
      })}
    </div>
  )

}

export default InfiniteScroll;