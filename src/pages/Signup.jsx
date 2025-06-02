import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';

function Signup() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', password: '', birthDate: '', gender: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signup(form);
      alert('Signup successful!');
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto mt-12 p-8 bg-white shadow-xl rounded-2xl space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Signup</h2>

      <input 
        type="text" 
        placeholder="First Name" 
        onChange={e => setForm({ ...form, firstName: e.target.value })} 
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <input 
        type="text" 
        placeholder="Last Name" 
        onChange={e => setForm({ ...form, lastName: e.target.value })} 
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <input 
        type="email" 
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
      
      <input 
        type="text" 
        placeholder="Birth Date" 
        onChange={e => setForm({ ...form, birthDate: e.target.value })} 
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <input 
        type="text" 
        placeholder="Gender" 
        onChange={e => setForm({ ...form, gender: e.target.value })} 
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button 
        type="submit" 
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
      >
        Signup
      </button>

      <p 
        onClick={() => navigate('/')} 
        className="text-center text-sm text-blue-600 hover:underline cursor-pointer"
      >
        Already have an account? Login
      </p>
    </form>
  );
}

export default Signup;
