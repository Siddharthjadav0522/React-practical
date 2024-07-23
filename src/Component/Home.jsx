import React from 'react'
import Weather from './WeatherApi'

function Home() {
    return (
        <>
            <div className=' d-flex flex-column align-items-center'>
                <h1>Json server</h1>
                <a href="http://localhost:5000/student">Json Server link</a> <br /><br />

                <div className='col-md-5'>

                    <Weather />
                </div>
            </div>


        </>
    )
}

export default Home
