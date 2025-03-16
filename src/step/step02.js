import React from 'react'
import styleName from './step.module.css'; // 모듈 사용 : 이름 작명

const Step02 = () => {
    const red1 = 'red';
  return (
    <>
        {/* 1. 인라인 방식 : camelCase 사용 */}
        <div style={{color:'red', backgroundColor:'blue'}}>인라인 방식</div>

        {/* 2. className 사용 */}
        <div className='red'>App.css에서 작성한 스타일</div>
        <div className={red1}>App.css에서 작성한 스타일</div>

        {/* 3. CSS모듈 사용 */}
        <div className={styleName.blue}>모듈 사용</div>

        {/* 4. TailwindCSS 사용 */}
        <div className='bg-red-500 text-white p-4 rounded-md'>TailwindCSS 사용</div>
    </>
  )
}

export default Step02