"use client"
import ButtonGroup from '@mui/material/ButtonGroup'
import  Button  from '@mui/material/Button'
import  Typography  from '@mui/material/Typography'
import React from 'react'
import Container from '@mui/material/Container'

function CreatePage() {
  return (
    <Container> 
        <Typography
            variant="h6"
            component="h2"
            align="center"
            gutterBottom
        >
            Create a new note!
        </Typography>
        <Typography
            align="left"
            noWrap // to truncate the text to show a snippet or preview
        >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae debitis harum nulla tempore minima quasi eaque, ex quae laudantium officiis quibusdam, corrupti maxime? Quae sint praesentium, unde nulla recusandae quos.
        </Typography>
       <Button
        variant='contained'
       >
            Sign up
       </Button>
       <Button
        variant='contained'
        color='secondary'
        type='submit'
        size='large'
        disableElevation // removes drop shadow
        onClick={() => console.log('Something ')}
       >
        Submit
       </Button>

       <ButtonGroup
            variant='outlined'
       >
            <Button>ONe</Button>
            <Button variant='contained'>Two</Button>
            <Button>THree</Button>
       </ButtonGroup>

    </Container>
  )
}

export default CreatePage