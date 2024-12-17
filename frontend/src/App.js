import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterForm from './components/RegisterForm' // 회원가입 폼 컴포넌트
import AgreementPage from './components/AgreementPage' // 동의 페이지 컴포넌트

function App() {
   return (
      <div>
         <Routes>
            <Route path="/SignUpPage" element={<RegisterForm />} />
            <Route path="/AgreementPage" element={<AgreementPage />} />
         </Routes>
      </div>
   )
}

export default App
