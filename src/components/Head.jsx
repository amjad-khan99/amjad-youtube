import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";



const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
      dispatch(toggleMenu());
  }
    return (
        <div className='grid grid-flow-col'>

{/*youtube logo */}
          <div className="col-span-1 flex -mr-52 p-2 ">
            {/* hamburger icon */}

                <img 
                onClick={()=>handleToggleMenu()}
                className='h-8 m-3 ml-1.5  p-1 cursor-pointer '
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" 
                alt="menu" />
                {/* logo */}
                <a href="/">
                  <img 
                  className="h-36 -mt-11 -ml-3 p-2 -mb-28 "
                  src="https://th.bing.com/th/id/OIP.CyAESZcQt7IiZE7apg93EQAAAA?rs=1&pid=ImgDetMain" 
                  alt="logo youtube" />
                </a>
            </div>

{/* input box and search button */}

            <div className="col-span-2 flex place-content-center">
              <input type="text" 
              placeholder="Search "
              className="border border-zinc-500   w-1/2 m-4  h-10 rounded-l-full    mr-0   placeholder:text-slate-400  placeholder:translate-x-5 "
              />

              <button className="bg-slate-200     w-20   mt-4 h-10 rounded-r-full  border border-zinc-500 ">
                <img 
                className="h-8 mix-blend-multiply ml-5 p-1 "
                src="https://www.svgrepo.com/show/425986/search.svg" 
                alt="serach icon" />
              </button>
            </div>

{/* user icon */}
            <div className="col-span-1 bg-white flex flex-row-reverse  ">
                <img 
                className="h-11 mix-blend-multiply  bg-white m-4 rounded-full"
                src="https://th.bing.com/th/id/OIP.gfD2lcjKMIBR9HxUBSHsgAAAAA?rs=1&pid=ImgDetMain" 
                alt="user icon" />
            </div>
        </div>
    )
}

export default Head;