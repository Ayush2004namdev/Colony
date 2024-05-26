import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [err, setErr] = useState('');
    const {id} = useParams();

    const handleSubmit = (e) => {
        console.log(id);
        e.preventDefault();
        if(password !== confirmPassword) return alert('Passwords do not match');
        else{
            axios.post(import.meta.env.VITE_BASE_URL + '/user/reset-password/v1/'+id, {password})
            .then((res) => console.log(res.data))
            .catch(err => {
                console.log(err)
                setErr(err.response.data.message);
            });
        }
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-6">Reset Password</h1>
            <form className="w-64" onSubmit={handleSubmit}>
                <p>{err}</p>
                <div className="mb-4">

                    <label htmlFor="password" className="block mb-2 font-medium">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block mb-2 font-medium">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;