import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useKeyboardListNavigation } from "use-keyboard-list-navigation";
import { useRouter } from "next/router";

interface Type {
  name: string;
  url: String;
}
const PBootloader = () =>  {
  const list = [
    {name: "yuzu (normal mode portfolio)", url: "https://n.riyuzenn.me"}, 
    {name: "haruka (command-line mode portfolio)", url: "https://riyuzenn.me/?ref=riyu"}, 
    {name: "blog", url: "https://blog.riyuzenn.me"}
  ];
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(10);
  const [stopTimer, setStopTimer] = useState(false);
  const { index, cursor, interactive, selected } = useKeyboardListNavigation({
    list: list,
    onEnter: () => {
      router.push(`${list[index].url}`)
    },
  });
  useEffect(() => {

    if(timeLeft === 0){
       setTimeLeft(0);
       router.push(`${list[index].url}`);
       
    }


    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    console.log(index)
    if (index > 0) {
      console.log("stop");
    }
    const intervalId = index === 0 ? setInterval(() => {

      setTimeLeft(timeLeft - 1);
    }, 1000) : setStopTimer(true);

    
    // clear interval on re-render to avoid memory leaks
    if (intervalId) return () => clearInterval(intervalId);

    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <React.Fragment>
      <div className="flex min-h-screen ">
        <div className="flex flex-col space-y-10 items-center px-10 py-10 w-full">
          <div className="flex flex-col items-center">
          <h1 className="text-[#fff]">GNU GRUB version 2.02</h1>
          <p className="">Welcome to GNU Grub bootloader, please choose the specific environment to boot.</p>
          <p className={`${stopTimer ? 'invisible': 'block'} pt-3`}>Booting in {timeLeft}s</p>
          </div>
          
          <div className="h-full w-[60%] border border-[#656565] px-2 py-5">
            <ul className="space-y-1">
              {list.map((value: Type, i: number) => {
                return (
                    <li>
   
                      <button onClick={() => {
                        router.push(`${value.url}`)
                      }} className={
                        `${i === index ? "bg-[#bebebe] text-[#121212]": ""}
                        w-full text-left
                        `}>{`${i === index ? '*': ''}${value.name}`}
                      </button>

                      
                    </li>
                )
              })}
            </ul>
          </div>
          <h1 className="w-[50%]">
            Use the  <span className="px-2">&uarr;</span>  
            and <span className="px-2">&darr;</span> keys to select which entry is higlighted. 
            Press enter to boot the selected environment, `n` to enter the normal mode 
            before booting or `c` for command-line
          </h1>
        </div>
      </div>
    </React.Fragment>
  )
}

const Commandline = () => {
  return (
    <React.Fragment>

    </React.Fragment>
  )
}

const Home: NextPage = () => {
  // check if the param ref is equal to riyu then ignore the bootloader
  const [a, b] = useState(false);
  useEffect(()=>{
    const params = new URLSearchParams(window?.location.search);
    if (params.get('ref') === 'riyu') b(true);
  }, [])

  return (
      <React.Fragment>
        {a ? <Commandline /> : <PBootloader />}
      </React.Fragment>
    )
  }

  export default Home;
