import { Box, Button, Typography, CircularProgress } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UseAxios from '../hooks/UseAxios'
import { useNavigate } from 'react-router-dom'
import { handleScoreChange } from '../redux/Actions/actions'
import { decode } from 'html-entities';

const getRandomInteger = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score
  } = useSelector((state) => state)
  // console.log(question_category, question_difficulty, question_type, amount_of_question)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  let apiUrl = `/api.php?amount=${amount_of_question}`

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`)
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
    console.log(question_difficulty)
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`)
  }

  const { response, error, loading } = UseAxios({ url: apiUrl })

  const [questionIndex, setQuestionIndex] = useState(0)
  const [options, setOptions] = useState([])

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex]
      let answers = [...question.incorrect_answers]
      answers.splice(getRandomInteger(question.incorrect_answers.length), 0, question.correct_answer)
      setOptions(answers)
    }
  }, [response, questionIndex])

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex]
    if (e.target.textContent === question.correct_answer) {
      if (question_difficulty === "easy") {
        dispatch(handleScoreChange(score + 100))
      } else if (question_difficulty === "medium") {
        dispatch(handleScoreChange(score + 200))
      } else if (question_difficulty === "hard") {
        dispatch(handleScoreChange(score + 300))
      }
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1)
    } else {
      navigate('/score')
    }
  }

  return (
    <Box>
      <Typography variant="h4">Question {questionIndex + 1}</Typography>
      <Typography mt={5}>{decode(response.results[questionIndex].question)}</Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">{decode(data)}</Button>
        </Box>
      ))}
      <Box mt={5}>
        Score: {score}
      </Box>
    </Box>
  )
}

export default Questions
