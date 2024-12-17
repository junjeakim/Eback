import React, { useState } from 'react'
import './style/LoginPage.css' // CSS 파일 임포트

const LoginPage = () => {
   const [formData, setFormData] = useState({
      userId: '',
      password: '', // password를 formData 객체에 추가
   })

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      // formData에서 userId와 password 값을 가져오기
      const { userId, password } = formData
      if (userId === 'admin' && password === 'admin123') {
         alert('로그인 성공')
         // 로그인 후 리다이렉트 등을 추가할 수 있습니다.
      } else {
         alert('아이디 또는 비밀번호가 잘못되었습니다.')
      }
   }

   return (
      <div id="wrap">
         <div id="Login_wrap">
            <div className="logintop">
               <h2>LOGIN</h2>
               <p>불편하신 사항이 있으시면 고객센터로 문의하여 주시기 바랍니다.</p>
            </div>

            <form name="loginForm" onSubmit={handleSubmit} autocomplete="off">
               <div className="login_mid clfix">
                  <div className="login_con">
                     <div className="login_id">
                        <span>
                           <img src="./images/ID이미지.jpg" alt="id로고" />
                        </span>
                        <input type="text" name="userId" id="userId" placeholder="아이디" value={formData.userId} onChange={handleChange} required />
                     </div>

                     <div className="login_pw">
                        <span>
                           <img src="./images/pwimg.jpg" alt="비밀번호 이미지" />
                        </span>
                        <input
                           type="password"
                           name="password" // name을 'password'로 설정
                           id="password"
                           placeholder="비밀번호"
                           value={formData.password} // formData.password로 접근
                           onChange={handleChange}
                           required
                        />
                     </div>

                     <button type="submit">로그인</button>

                     <div className="login_bottom clfix">
                        <p>
                           <a href="#">회원가입</a> | <a href="#">아이디/비밀번호 찾기</a>
                        </p>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}

export default LoginPage
