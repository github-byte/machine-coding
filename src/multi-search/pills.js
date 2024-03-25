import React from 'react'
import './index.css'
import CloseIcon from '@mui/icons-material/Close';

const Pills = ({ user = {}, removeUser = () => { } }) => {
    const { email = '', firstName = '', lastName = '', image = '' } = user || {}
    return (
        <div key={email} className='pills'>
            <img height="20px" width="20px" src={image} alt={`${firstName} ${lastName}`} />
            <span>{`${firstName} ${lastName}`}</span>
            <CloseIcon onClick={() => removeUser(user)} sx={{ color: 'white' }} />
        </div>
    )

}

export default Pills;