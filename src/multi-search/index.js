import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import Pills from './pills'

const MultiSearchInput = (props) => {
    const [search, setSearch] = useState('')
    const [userData, setUserData] = useState([])
    const [users, setUsers] = useState([])
    const [userInput, setUserInput] = useState(new Set())
    const [active, setActive] = useState({ idx: null, user: {} })
    const inputRef = useRef(null)
    const optionsRef = useRef(null);
    let timeout = useRef();
    const debounce = (cb, delay = 1000) => {
        return function (...args) {
            clearTimeout(timeout.current)
            timeout.current = setTimeout(() => {
                cb(...args)
            }, delay);
        }
    }
    console.log('options22')
    const handleSearch = (e) => {
        const searchVal = e.target.value.trim();
        const debouncedFunction = debounce(fetchUsers, 500);
        debouncedFunction(searchVal)
        setSearch(searchVal)
    }

    const fetchUsers = async (searchVal, allSearch = false) => {
        const url = allSearch ? `https://dummyjson.com/users` : `https://dummyjson.com/users/search?q=${searchVal}`
        const data = await fetch(url)
        const res = await data.json();
        const { users = [] } = res
        setUserData(users)
    }
    //border
    const handleInput = (item) => {
        const { email = '' } = item;
        setUsers([...users, { ...item }])
        const itemSets = new Set(userInput);
        itemSets.add(email);
        setUserInput(itemSets)
        setUserData([])
        setSearch("")
        inputRef.current.focus()
    }

    const removeUser = (item) => {
        const { email: removeMail = '' } = item
        const userList = [...users];
        const remaining = userList.filter((item) => item.email !== removeMail)
        setUsers(remaining)
        const userInputListSet = new Set(userInput);
        userInputListSet.delete(removeMail)
        setUserInput(userInputListSet)
    }

    const handleKey = (e) => {
        let idx = active.idx || 0;
        if (e.key === 'Backspace' && e.target.value === '' && users.length > 0) {
            removeUser(users[users.length - 1])
        }
        else if (e.key === 'ArrowDown') {
            idx++;
        }
        else if (e.key === 'ArrowUp') {
            idx--;
        }
        else if (e.key === 'Enter') {
            handleInput(userData[idx])
        }
        console.log('inside ref', optionsRef?.current?.target)
        // optionsRef?.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
        setActive({ idx, user: userData[idx] })
    }

    return (
        <div className='multi-search-parent'>
            <div className='multi-input'>
                <div className='pill-list'>
                    {users?.map((item) => {
                        return (<Pills removeUser={removeUser} user={item} />)
                    })}
                </div>
                <div className='input-div'>
                    <input ref={inputRef} onKeyDown={handleKey} type='text' placeholder='Search Any value' value={search} onChange={handleSearch} />
                </div>
            </div>
            {userData?.length > 0 && <div className='suggestion-list'>
                <ul ref={optionsRef}>
                    {userData?.map((item, index) => {
                        const { image = '', firstName = '', lastName = '', email = '' } = item
                        return (!userInput.has(email) ? <li className={active?.idx === index ? 'active' : {}} key={`${email}`} onClick={() => handleInput(item)}>
                            <img className='imgSugg' height="20px" width="20px" src={image} alt={`${firstName} ${lastName}`} />
                            <span>{`${firstName} ${lastName}`}</span>
                        </li> : <></>)
                    })}
                </ul>
            </div>}
        </div>
    )

}

export default MultiSearchInput;