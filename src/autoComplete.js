import React, { useEffect, useState } from 'react'
import { Autocomplete, Box, TextField, Typography } from '@mui/material'


const AutoCompleteInput = (props) => {
    const [api ,setApi] = useState();
    const handleChange = async () => {
        const apiData = await fetch();
        const data = apiData.json();
        setApi(data.json());
    }
    return (
        <>
            <h1>Restaurant Search Data</h1>
            <Autocomplete onChange={handleChange}  renderInput={(params) => <TextField {...params} />} value="sb" options={[]}/>
            <Box mt={10}>
                <Typography variant="h5" color="initial">Filters</Typography>
                <Typography variant="body1" color="initial">Rating</Typography>
                <Typography variant="body1" color="initial">Distance</Typography>
                <Typography variant="body1" color="initial">Price Range</Typography>
            </Box>
        </>
    )

}

export default AutoCompleteInput;