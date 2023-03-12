import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Space_Grotesk } from '@next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  preload: true,
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <header
        className={`flex w-full border-b border-b-[#1E2435] ${spaceGrotesk.className}`}
      >
        <div className="flex basis-1/3 items-center border-r border-r-[#1E2435] py-12 px-10">
          <a href="/" className="">
            <FontAwesomeIcon icon={faSnowflake} className="h-8 w-8 text-xs" />
          </a>
        </div>

        <div className="flex basis-1/3 justify-center gap-24 border-r border-r-[#1E2435] py-12 px-6 text-xs font-medium tracking-widest text-[#747083]">
          <a href="" className="hover:text-[#9592a2]">
            ABOUT
          </a>
          <a href="" className="hover:text-[#9592a2]">
            WORK
          </a>
        </div>

        <div className="flex flex-grow justify-center gap-12 border-r border-r-[#1E2435] py-12 px-6">
          <a
            href="https://www.youtube.com/watch?v=nG2IyH43xMU"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="h-4 w-4 text-xs text-[#777A80]"
            />
          </a>
          <a
            href="https://www.youtube.com/watch?v=nG2IyH43xMU"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="h-4 w-4 text-xs text-[#777A80]"
            />
          </a>
        </div>

        <div className="flex flex-grow justify-center py-12 px-6">
          <a href="" className="text-xs tracking-widest text-[#9d84ff]">
            GET IN TOUCH
          </a>
        </div>
      </header>
      <main className="relative flex-grow">
        <article className="absolute left-0 top-0 right-0 bottom-0 grid h-full grid-cols-[2fr_1fr] grid-rows-[2fr_1fr]">
          <div className="h-full bg-[url('https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"></div>
          <div className="h-full border-b border-[#1E2435]">description</div>
          <div className="h-full">title</div>
          <div className="flex h-full items-center justify-center border-l border-[#1E2435]">
            <div className='h-full w-1/2 cursor-pointer border-r border-[#1E2435] bg-[url("/SVG/arrow-left.svg")] bg-[length:51px] bg-center bg-no-repeat transition-all duration-300 hover:bg-[#1e243529] hover:bg-[40%_50%]'></div>
            <div className='h-full w-1/2 cursor-pointer bg-[url("/SVG/arrow-right.svg")] bg-[length:51px] bg-center bg-no-repeat transition-all duration-300 hover:bg-[#1e243529] hover:bg-[60%_50%]'></div>
          </div>
        </article>
        {/* 'http://source.unsplash.com/random/1200x600' */}
      </main>
    </>
  );
}
('rgba(30, 36, 53, 0.16)');
