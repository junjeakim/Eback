import React, { useState } from 'react'
import './RegisterForm.css'

function RegisterForm() {
   const [formData, setFormData] = useState({
      name: '',
      id: '',
      password: '',
      confirmPassword: '',
      email: '',
      emailDomain: '',
      birthday: '',
      phone: '',
      address: '',
   })

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value })
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (formData.password !== formData.confirmPassword) {
         alert('비밀번호가 일치하지 않습니다.')
         return
      }

      console.log('회원가입 데이터:', formData)
      // 여기에 백엔드 API 연동 로직 추가
   }

   return (
      <div className="register-wrapper">
         <h1>회원가입</h1>
         <form onSubmit={handleSubmit}>
            <label>
               이름:
               <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>

            <label>
               아이디:
               <input type="text" name="id" value={formData.id} onChange={handleChange} required />
            </label>

            <label>
               비밀번호:
               <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>

            <label>
               비밀번호 확인:
               <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </label>

            <label>
               이메일:
               <input type="text" name="email" value={formData.email} onChange={handleChange} />@
               <select name="emailDomain" value={formData.emailDomain} onChange={handleChange}>
                  <option value="">선택</option>
                  <option value="naver.com">naver.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="hanmail.net">hanmail.net</option>
               </select>
            </label>

            <label>
               생년월일:
               <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
            </label>

            <label>
               휴대전화:
               <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="010-1234-5678" />
            </label>

            <label>
               주소:
               <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </label>

            <button type="submit">가입</button>
         </form>
      </div>
   )
}

export default RegisterForm
