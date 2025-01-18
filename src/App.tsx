import clsx from "clsx"
import { useState } from "react"
import { Email } from "./components/svgs/email";
import { Copy } from "./components/svgs/copy";
import { Check } from "./components/svgs/check";
import { Credits } from "./components/credits";

function App() {
  const [state, setState] = useState<'idle' | 'copied'>('idle')

  const handleClick = () => {
    if(state == 'copied') return ;

    setState('copied')
  }

  const handleTransitionEnd = () => {
    if(state == 'idle') return ;

    setTimeout(() => {
      setState('idle')
    }, 500);    
  }

  return (
    <section className="w-full h-dvh bg-white flex justify-center items-center">
      <Credits />
      <div className="w-80 h-60 group flex items-center justify-center">
        <div 
          onClick={handleClick}
          className={clsx(
            "bg-gray-200 p-[2px] w-40 h-14 rounded-xl overflow-hidden",
            "h-[48px] group-hover:h-20 duration-150 ease-in-out cursor-pointer"
          )}
        >
          <div className="w-[156px] h-[44px] bg-white rounded-[10px] flex gap-1 items-center justify-center">
            <Email />
            <span className="text-lg">Email</span>
          </div>
          <div className="h-[32px] relative mt-[2px] overflow-hidden rounded-[10px] flex flex-col items-center justify-center">
            <span 
              className={clsx(
                "flex items-center gap-1 h-full duration-150 ease-out",
                state == 'idle' ? 'translate-y-0' : '-translate-y-[32px]'
              )}
            >
              <Copy />
              <span className="text-sm">Copy</span>
            </span>
            <span
              onTransitionEnd={handleTransitionEnd}
              className={clsx(
                "absolute flex items-center gap-1 h-[32px] duration-150 ease-out text-green-600",
                state == 'idle' ? 'translate-y-[32px]' : 'translate-y-0'
              )}
            >
              <Check />
              <span className="text-sm">Copied</span>
            </span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default App
