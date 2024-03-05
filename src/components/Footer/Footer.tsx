import React from 'react'

function Footer() {
  return (
    <div className="flex h-1/5 w-screen flex-col items-center justify-center bg-slate-900 font-mono text-xl text-white">
      <div className="text-center">BUILT WITH TYPESCRIPT AND GRAPHQL</div>
      <div>
        <span> <a href="https://www.linkedin.com/in/rahul-kumar-216872227/" target="_blank" className="text-cyan hover:text-violet-900 underline">LINKEDIN</a> or <a href="https://my-portfolio-gilt-tau.vercel.app/" target="_blank" className="text-cyan hover:text-violet-900 underline">PORTFOLIO</a> </span>
      </div>
    </div>

  )
}

export default Footer
