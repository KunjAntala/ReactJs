import React from 'react'
import './Login.css'

function Login({ image1, image2 }) {
  return (
    <div className='ct'>
      <div className="signin">
        <div className="logo">
          <img width='45px' src={image1}/>
          <img width='45px' src={image2}/>
        </div>
        <div class="login flex flex-col mt-3">
          <form name="myForm">
            <p class="py-6 text-3xl">Enter your email to Sign in.</p>
            <input type="email" id="email" name="email" class="border border-[#707072] hover:border-black px-3 py-4 rounded-xl mt-2 w-full" placeholder="Email*"/>
            <small id="e1" class="text-red-600 text-xs"></small>
            <input type="password" id="password" name="password" class="border border-[#707072] hover:border-black px-3 py-4 rounded-xl mt-8 w-full" placeholder="Password*"/>
            <small id="e2" class="text-red-600 text-xs"></small>
            <a href="/WebSite/forgot-pass.html"><p class="pt-6 text-[18px] text-[#707072] underline">Forgot password?</p></a>
            <p class="pt-10 text-xm text-[#707072]">By continuing, I agree to Nike's <span class="underline">Privacy Policy.</span> and <span class="underline">Terms of Use</span></p>
            <div class="mt-3 flex justify-end">
              <button class="text-xm bg-black my-2.5 px-6 py-3 rounded-3xl text-white hover:bg-[#707072]">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
