import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(form);
      alert('Login successful!');
      navigate('/home'); // Redirect to /home
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto mt-20 p-8 bg-white shadow-xl rounded-2xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
      
      <input 
        type="text" 
        placeholder="Email" 
        onChange={e => setForm({ ...form, email: e.target.value })} 
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <input 
        type="password" 
        placeholder="Password" 
        onChange={e => setForm({ ...form, password: e.target.value })} 
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <button 
        type="submit" 
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Login
      </button>
      
      <p 
        onClick={() => navigate('/signup')} 
        className="text-center text-sm text-blue-600 hover:underline cursor-pointer"
      >
        Don't have an account? Sign up
      </p>
    </form>
  );
}

export default Login;
