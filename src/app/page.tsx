import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Amatic_SC } from 'next/font/google'

const amaticSC = Amatic_SC({ subsets: ['latin'], weight: "700" });

const githubURL = 'https://github.com/glenwinters';
const linkedinURL = 'https://www.linkedin.com/in/glenwinters/';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#31313a] border-[30px] border-[#78cc6d] flex flex-col items-center justify-center">
      <img src={`/portrait.jpg`} alt={"Photo of Glen"} className="rounded-full w-48" />
      <h1 className={`${amaticSC.className} text-7xl my-2`}>Hello, I'm Glen Winters.</h1>
      <h2 className={`${amaticSC.className} text-6xl text-[#a2a2a6] my-2`}>Site Reliability Engineer</h2>
      <div className="flex flex-row">
        <a href={githubURL} target="_blank" rel="noreferrer">
          <AiFillGithub size="2.5em" className="opacity-60 hover:opacity-100"/>
        </a>
        <a href={linkedinURL} target="_blank" rel="noreferrer">
          <AiFillLinkedin size="2.5em" className="opacity-60 hover:opacity-100"/>
        </a>
      </div>
    </div>
  );
}
