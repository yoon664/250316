## node JS

자바스크립트 실행 프로그램
자바스크립트는 브라우저에서만 동작했지만,
Node.js 덕분에 브라우저 밖에서도 자바스크립트를 사용

---

## npm

npm : Node Package Manager
자바스크립트 프로젝트에서 필요한 패키지(라이브러리, 도구)를 설치하고
관리하는데 사용

설치 : npm i 라이브러리이름
제거 : npm remove 라이브러리 이름

npx : 일회성 실행 - 설치하지 않고 패키지를 바로 실행할 때 사용

---

## 기본세팅

npx create-react-app@latest ./

## 테일윈드CSS 설치

npm install -D tailwindcss@3
npx tailwindcss init

content: ["./src/**/*.{html,js}"],

index.css에
@tailwind base;
@tailwind components;
@tailwind utilities;
맨 위에 붙이기

이것들 하고 다시 
cmd에 npx create-react-app@latest ./
엔터*2
다 됐으면 npm start
