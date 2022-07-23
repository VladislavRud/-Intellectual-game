import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import UseAxios from '../hooks/UseAxios';
import SelectField from './SelectField/SelectField';
import TextFieldComp from './TextFieldComp/TextFieldComp';

const Settings = () => {
  const { response, error, loading } = UseAxios({ url: '/api_category.php' });
  const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something went wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: 'easy', name: '100 points', value: 100 },
    { id: 'medium', name: '200 points', value: 200 },
    { id: 'hard', name: '300 points', value: 300 },
  ];

  const typeOptions = [
    { id: 'multiple', name: 'Multiple Choice' },
    { id: 'boolean', name: 'True or False' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/questions');
  };

  return (
    <div>
      <Typography variant="h2" fontWeight="bold">
        Game
      </Typography>
      <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="category" />
        <SelectField options={difficultyOptions} label="difficulty" />
        <SelectField options={typeOptions} label="type" />
        <TextFieldComp />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Start the quiz
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Settings;
