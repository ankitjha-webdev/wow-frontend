import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import Login from '../services/Login.service';
// import { baseUrl } from './ApiUrls'
import { redirect, } from 'react-router-dom'

// import { useNavigate } from 'react-router'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState('');

    const [inputs, setInputes] = useState({
        userName:"",
        password: ""
    })

    const [errors, setErrors] = useState(null)


    const handleChange = (e) => {
        setInputes((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const navigate = useNavigate();

    const data = {
        "userName": "190101150099",
        "userId": 663,
        "role": "STUDENT",
        "userStatus": "ACTIVE",
        "apiStatus": "SUCCESS",
        "userInfo": {
            "name": "Omkar Kumar",
            "dept": "CSE",
            "project": "ERP for Centurion",
            "campus": "pkd",
            "username": null
        }
    }

    // const handleLogin= (e) => {
    //     e.preventDefault()
    //     useEffect(() => {
    //         axios.post(`http://localhost:8080/user/login?userName=${username}&${password}`)
    //             .then((res) => {
    //                 // setData(res.data)
    //                 // setUserData(res.data)
    //                 // console.log(res);
    //                 // setUserData(res.data)
    //                 if (!res.data.apiStatus === 'SUCCESS') {
    //                     return navigate(0);
    //                 }
    
    //                 if (res.data.apiStatus === 'SUCCESS') {
    //                     // setUserData(res.data)
    //                     localStorage.setItem('userInfo', JSON.stringify(res.data))
    
    //                     if (res.data.role === 'STUDENT') {
    //                         return redirect('/student');
    //                     } else if (res.data.role === 'GUIDER') {
    //                         return redirect('/guider')
    //                     } else if (res.data.role === 'ADMIN') {
    //                         return redirect('/admin')
    //                     } else {
    //                         return navigate(0);
    //                     }
    //                 }
    
    //             }).catch((err) => {
    //                 console.log(err);
    //             })
    //     }, [userData])
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8080/user/login?userName=${inputs.userName}&password=${inputs.password}`);
            if (res.data.apiStatus === 'Failed') {
                alert('Wrong Credentials!')
                return navigate(0)
            }
            if (res.data.apiStatus === 'SUCCESS') {
                localStorage.setItem('userInfo', JSON.stringify(res.data))
                if (res.data.role === 'STUDENT') {
                    return navigate('/student');
                } else if (res.data.role === 'GUIDE') {
                    return navigate('/guider')
                } else if (res.data.role === 'ADMIN') {
                    return navigate('/admin')
                } else {
                    return navigate(0);
                }
            }

            navigate("/")
        } catch (error) {
            setErrors(error)
        }

    }

    
    return (
        <>
            <div className="container my-5">
                <div className="card w-25 mx-auto shadow">
                    <div className="card-body">
                        <h3 className='text-center mb-3 text-primary h3'>Login </h3>
                        <form>
                            <div className="mb-3">
                                <input type="text" name='userName' className='form-control' placeholder='Username' onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <input type="password" name='password' className='form-control' placeholder='Password' onChange={handleChange} />
                            </div>
                            <button onClick={handleSubmit} type='submit' className='btn btn-primary w-100'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login