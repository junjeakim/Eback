import React, { useState } from 'react'
import './../style/Agreement.css'

function AgreementPage({ history }) {
   const [Agreement, setAgreement] = useState({
      terms: false,
      privacy: false,
   })

   const handleChange = (e) => {
      const { name, checked } = e.target
      setAgreement({ ...Agreement, [name]: checked })
   }
   const handleNext = () => {
      if (Agreement.terms && Agreement.privacy) {
         history.push('/signup') // 다음 회원가입 페이지로 이동
      } else {
         alert('약관과 개인정보 방침에 모두 동의해야 합니다.')
      }
   }
   return (
      <div className="agreement_area">
         <h2>회원가입 약관 동의</h2>
         <div>
            <h3>회원가입 약관</h3>
            <iframe src="/terms_of_service" title="terms" />
            <label>
               <input type="checkbox" name="terms" onChange={handleChange} />
               회원가입 약관에 동의합니다.
            </label>
         </div>
         <div>
            <h3>개인정보 취급 방침</h3>
            <iframe src="/privacy_policy" title="privacy" />
            <label>
               <input type="checkbox" name="privacy" onChange={handleChange} />
               개인정보 방침에 동의합니다.
            </label>
         </div>
         <button onClick={handleNext}>확인</button>
      </div>
   )
}

export default AgreementPage
