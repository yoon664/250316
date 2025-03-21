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
    const [count, setCount] = useState(0);// let [a,b] = [10,20] 
    
    const [like, setLike] = useState([0, 0, 0]);
    console.log(like);
    return (
        <>
            <div>
                <p>현재 카운트 : {count}</p>
                <button onClick={()=>{setCount(count + 1)}}>카운트증가</button>
            </div>

            {/* 
                배열에서 state값 변경

                상태값이 변경되어야 컴포넌트가 재렌더링.
                배열은 참조형 데이터이기 때문에 상태값이 변경되지 않음

                배열을 복사해서 새로운 배열 생성해서, 그 배열을 상태값으로 설정
            */}
            <div>
                <p>현재 좋아요 : {like[0]}</p>
                <button onClick={()=>{
                    // setLike(like[0] + 1)
                    const copy = [...like];
                    copy[0] = copy[0] + 1;
                    setLike(copy);
                }}>좋아요 증가</button>
            </div>
            <div>
                <p>현재 좋아요 : {like[1]}</p>
                <button>좋아요 증가</button>
            </div>
            <div>
                <p>현재 좋아요 : {like[2]}</p>
                <button>좋아요 증가</button>
            </div>
        </>
    )
}

export default Step05