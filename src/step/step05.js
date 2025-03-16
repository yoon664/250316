import React, { useState } from 'react'

const Step05 = () => {
    /*
        [ useState ]
        상태값을 저장하는 변수 (중요한 데이터는 변수말고 state에 담아서 사용)
        상태값이 변경되면 그 상태값을 사용하는 html 부분만 재렌더링
        (자바스크립트 : 변수를 재할당하면 html 전체 재렌더링)

        const [값, 함수] = useState(초기값);
        - 함수 : 상태값을 변경하는 함수
    */
    
    const [count, setCount] = useState(0); // let [a,b] = [10,20]

  return (
    <>
        <div>
            <p>현재 카운트 : {count}</p>
            <button onClick={()=>{setCount(count + 1)}}>카운트증가</button>
        </div>
    </>
  )
}

export default Step05