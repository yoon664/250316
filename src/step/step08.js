import React from 'react'
import bg from '../img/bg2.jpg'

const Step08 = () => {
  return (
    <>
        {/* 1. public폴더에 있는 이미지 불러오기 */}
        {/* <img src='logo512.png' alt='이미지' /> */}
        <img src={process.env.PUBLIC_URL + '/logo512.png'} alt='이미지' />
    
        {/* 2. CSS이미지 파일 불러오기 */}
        <div className='bg-main'></div>

        {/* 3. */}
        <img src={bg} alt='이미지' />

        {/* 4. */}
        <div className='w-40 h-40 bg-cover' style={{
            backgroundImage : `url(${process.env.PUBLIC_URL}/bg/bg1.jpg)`
        }}></div>
    </>
  )
}

export default Step08