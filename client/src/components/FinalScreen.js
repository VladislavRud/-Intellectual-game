import React from 'react'
import { Box, Button, Typography, ImageListItem } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleAmountChange, handleScoreChange } from '../redux/Actions/actions'

const FinalScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { score } = useSelector(state => state)


  const handleBackToMain = () => {
    dispatch(handleScoreChange(0))
    dispatch(handleAmountChange(50))
    navigate('/')
  }

  if (score === 300) {
    return (
      <Box>
        <Typography variant="h3" fontWeight="bold" mb={3}>Final score: {score}</Typography>
        <img src='https://www.graycell.ru/picture/big/traktorist.jpg' alt='traktor'></img>
        <Button onClick={handleBackToMain} variant="outlined">Back to main</Button>
      </Box>
    )
  }
  else {


    return (
      <Box>
        <Typography variant="h3" fontWeight="bold" mb={3}>Final score: {score}</Typography>
        <Button onClick={handleBackToMain} variant="outlined">Back to main</Button>
      </Box>

    )
  }
}

export default FinalScreen
