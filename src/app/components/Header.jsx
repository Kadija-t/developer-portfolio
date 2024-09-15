import React from 'react'

function Header() {
  return (
    <>
    <div className='p-4'>
        <div className='flex justify-between items-center'>
        <h1 className='pl-4 text-4xl font-bold'>Kadija.dev</h1> 
        <div className='flex flex-grow justify-center'>
        <nav className='bg-gray-800 text-white rounded-full border border-blue-900 mr-8 pl-4 py-3 px-6 mt-4'>
            <ul className='flex space-x-10'>
                <li><a href='#accueil' className='text-white text-xl  hover:text-blue-300'>Accueil</a></li>
                <li><a href='#competences' className='text-white text-xl hover:text-blue-300'>Compétences</a></li>
                <li><a href='#projets' className='text-white text-xl hover:text-blue-300'>Projets</a></li>
                <li><a href='#apropos' className='text-white text-xl hover:text-blue-300'>A propos</a></li>
                <li><a href='#contact' className='text-white text-xl hover:text-blue-300'>Contact</a></li>
            </ul>
           
        </nav>
        </div>
        </div>
    </div>   

    <div className='flex justify-between items-center'>
        <div className='flex flex-grow justify-center'>
            <nav className='bg-gray-800 text-white rounded-full border border-blue-900 mr-8 pl-4 py-3 px-6 mt-4'>
         <ul className='flex space-x-10'>
            <li><a href='#apropos' className='text-white text-xl hover:text-blue-300'>Toggle</a></li>
            <li><a href='#contact' className='text-white text-xl hover:text-blue-300'>Contact</a></li>
        </ul>
        </nav>
        </div>
        
        </div>
     </>
  );
}

export default Header
