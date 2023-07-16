import Image from 'next/image'
import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FaGithubAlt, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      <head>
        <title>Juvi Panaguiton's Portfolio</title>
        <meta name="description"></meta>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className="bg-gradient-to-b from-orange-400 to-white min">
        <section class=" bg-gradient-to-b from-orange-400 to-white min-h-screen mx-10">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl'> developedbyjuvi</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className='text-xl cursor-pointer' /></li>
              <li className="bg-orange-700 p-3 ml-10 rounded-lg text-lg"><a href="holder">Resume</a> </li>
            </ul>
          </nav>

          <div className = "text-center p-10"> 
              <h2 className = "text-5xl py-2 text-orange-900 font-medium"> Juvi Panaguiton</h2>
              <h3 className = "text-2xl py-2">Just filling out some information here, all of this is temporary, really...</h3>
              <p className = "text-xl py-2">All I do is win win win, no matter what what! Got money on my mind and I'm never giving up. Hands go up! And they stay there!</p>
          </div>

          <div className="flex justify-center gap-5">
            <FaGithubAlt className="text-3xl cursor-pointer" />
            <FaLinkedinIn className="text-3xl cursor-pointer" />
            <FaTwitter className="text-3xl cursor-pointer" />
          </div>


        </section>
      </main>
    </div>
  )
}
