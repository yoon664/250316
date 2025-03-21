import React from 'react'

const Step07 = () => {
    // 반복문
    const students = ['짱구', '짱아', '흰둥이'];
    const friendList = [];

    // 1. for문
    for(let i=0; i<students.length; i++){
        friendList.push(<li key={i}>{students[i]}</li>);
    }
    return (
        <>
            {/* 1. for문 사용법 */}
            <ul>{friendList}</ul>

            {/* 2. map 사용법 */}
            <ul>
                {students.map((v, i)=> (
                    // key : 리액트에서 반복문 사용할때 각 요소를 구분하기 위한 고유값 
                    <li key={i}>{v}</li>
                ))}
            </ul>
        </>
    )
}

export default Step07