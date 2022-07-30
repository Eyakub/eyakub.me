import React from 'react';

const ProfileTitle = () => {
  return (
    <div>
      {/* avator */}
      <div className="flex -space-x-1 overflow-hidden">
        <img src="/images/eyakub.jpeg" alt=""
          className="inline-block h-24 w-24 rounded-full ring-2 ring-white" />
      </div>
      <h1 className="mt-4 text-3xl font-bold font-section-title text-blue-700">MD Eyakub Sorkar</h1>

      {/* designation and working place */}
      <div>
        <span className="text-xs font-section-paragraph">Full-stack Developer at</span><br />
        <span className="transition-all font-section-paragraph duration-500 ease-in-out hover:underline text-xs text-blue-500 block">
          <a href="https://goama.com/" alt="company name">Goama</a>
        </span>
      </div>

      {/* address & contacts */}
      <div className="mt-5 leading-none">
        <span className="text-xs address_span font-section-paragraph">
          <svg className="h-auto w-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg> Dhaka, Bangladesh
        </span><br />
        <span className="font-section-paragraph text-xs text-blue-600"><svg className="h-auto w-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg> <a className="hover:underline" href="+8801937424217">+8801937424217</a></span><br />
        <span className="text-xs text-blue-600 font-section-paragraph">
          <svg xmlns="http://www.w3.org/2000/svg" className="inline h-auto w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <a href="mailto:+eyakubsorkar@gmail.com"> eyakubsorkar@gmail.com</a>
        </span>
      </div>

      {/* social networks */}
      <div className="mt-5 flex w-auto">
        <a href="https://stackoverflow.com/users/5391058/eyakub">
          <img className="h-auto w-4 mr-1" src="/icons8-stack-overflow.svg" alt="stack overflow" />
        </a>
        <a href="https://github.com/eyakub">
          <img className="h-auto w-4 mr-1" src="/icons8-github.svg" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/eyakub-sorkar/">
          <img className="h-auto w-4 mr-1" src="/icons8-linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://twitter.com/Eyakub_Mdes">
          <img className="h-auto w-4 mr-1" src="/icons8-twitter.svg" alt="twitter" />
        </a>
        <a href="https://www.facebook.com/mdes.mdes">
          <img className="h-auto w-4" src="/icons8-facebook.svg" alt="facebook" />
        </a>
      </div>
    </div>

  )
}

export default ProfileTitle;