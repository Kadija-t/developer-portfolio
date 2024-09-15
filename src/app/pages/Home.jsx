import React from "react"
import Header from "../components/Header"


function Home() {
  return (
    <>
        <Header />
        <div className='bg-white-200 p-4'>
            <h1 className='text-3xl font-bold text-center mt-20'>Bienvenue sur mon site</h1>
            <p className='text-center'>Je suis Kadija, développeuse web front-end!</p>
        </div>
    </>
  )
};

export default Home;
