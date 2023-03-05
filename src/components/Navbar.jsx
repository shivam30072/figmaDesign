import React from 'react'

const Navbar = ({ toggle, setToggle }) => {
  return (
    <div className='sm:h-[8vh] h-[5vh] flex sm:justify-between items-center justify-end ite'>
        <div className='hidden sm:ml-4 sm:flex'>
            <h2 className='text-green-400'>ATG.WORLD</h2>
        </div>
        <div className='hidden sm:flex'>
            <img src='https://cdn-icons-png.flaticon.com/512/2811/2811806.png' className='w-[25px] absolute mt-1 ml-1' />
            <input
             type='text' 
             placeholder='search your favourite ATG here' 
             className='bg-gray-200 rounded-2xl w-[340px] text-white px-8 py-1'
             />
        </div>
        <div className='hidden sm:mr-4 sm:flex hover:cursor-pointer'>
            <span onClick={() => {setToggle(!toggle)}}>Create account</span>
            <img src='https://cdn-icons-png.flaticon.com/512/2609/2609201.png' alt='icon' className='w-[10px] h-[10px] mt-2 ml-1' />
        </div>
        <div className='sm:hidden flex p-1'>
            <img src='https://cdn-icons-png.flaticon.com/512/136/136961.png' alt='icon' className='w-[10px] h-[12px] m-1' />
            <img src='https://cdn-icons-png.flaticon.com/512/62/62601.png' alt='icon' className='w-[12px] h-[12px] m-1' />
            <img src='https://cdn-icons-png.flaticon.com/512/686/686700.png' alt='icon' className='w-[12px] h-[12px] m-1' />
        </div>
    </div>
  )
}

export default Navbar