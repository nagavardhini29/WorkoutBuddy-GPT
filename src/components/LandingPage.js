import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Navigate to the signup page
    navigate('/signup');
  };

  const handleLogin = () => {
    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to WorkoutBuddy-GPT 🏋️‍♂️🤖</h1>
      <p className="text-xl mb-8">Get personalized workout plans and track your fitness journey!</p>
      <div className="flex space-x-4">
        <button
          onClick={handleGetStarted}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
        >
          Get Started
        </button>
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;