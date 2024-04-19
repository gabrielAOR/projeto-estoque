import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import NavBar from '../../components/NavBar/NavBar';
import './Home.css'

function Home() {

    return (
        <div className='home-container'>
            <NavBar/>
            <RegisterForm/>
        </div>

    );
}




export default Home;