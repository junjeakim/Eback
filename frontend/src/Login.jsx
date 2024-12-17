import React, { useState } from 'react'
import './style/style.css' // 스타일 추가

const LoginPage = () => {
   const [formData, setFormData] = useState({
      username: '',
      password: '',
   })

   const [error, setError] = useState('')

   // 입력값 변경 핸들러
   const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData((prevData) => ({ ...prevData, [name]: value }))
   }

   // 로그인 버튼 클릭 핸들러
   const handleLogin = (e) => {
      e.preventDefault()
      setError('') // 초기화

      // 유효성 검사
      if (!formData.username || !formData.password) {
         setError('아이디와 비밀번호를 입력해주세요.')
         return
      }

      // 로그인 API 호출 (예: Axios를 사용한 POST 요청)
      fetch('/api/members/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
      })
         .then((response) => {
            if (response.ok) {
               return response.json()
            } else {
               throw new Error('로그인 실패: 아이디나 비밀번호를 확인해주세요.')
            }
         })
         .then((data) => {
            // 성공적으로 로그인한 경우 세션 저장
            sessionStorage.setItem('userId', data.userId)
            alert('로그인 성공!')
            window.location.href = '/' // 메인 페이지로 리디렉션
         })
         .catch((error) => {
            setError(error.message)
         })
   }

   return (
      <div className="login-container">
         <h2>로그인</h2>
         <form onSubmit={handleLogin}>
            <div className="form-group">
               <label htmlFor="username">아이디</label>
               <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} placeholder="아이디를 입력하세요" />
            </div>
            <div className="form-group">
               <label htmlFor="password">비밀번호</label>
               <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="비밀번호를 입력하세요" />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="btn-login">
               로그인
            </button>
         </form>
      </div>
   )
}

export default LoginPage
