function Header() {
	return (
	  <>
		  <div className="w-full h-[100px] bg-slate-300">
		  	<div className="w-[60%] h-8 bg-slate-300 flex space-x-24 ml-8 pt-8">
			  <a
            className="cursor-pointer text-xl my-auto font-medium text-gray-800 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-gray-800
                    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                    before:transition before:ease-in-out before:duration-300"
          >Home</a>
			<a
            className="cursor-pointer text-xl my-auto font-medium text-gray-800 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-gray-800
                    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                    before:transition before:ease-in-out before:duration-300"
          >Song List</a>
			  <a
            className="cursor-pointer text-xl my-auto font-medium text-gray-800 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-gray-800
                    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                    before:transition before:ease-in-out before:duration-300"
          >Progress</a>
			  <a
            className="cursor-pointer text-xl my-auto font-medium text-gray-800 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
                    before:bottom-0 before:left-0 before:bg-gray-800
                    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                    before:transition before:ease-in-out before:duration-300"
          >Options</a>
			</div>
			<div className=" text-gray-800 text-4xl font-bold absolute right-0 mr-8 -mt-2">pianAI</div>
		  </div>
	  </>
	)
  }
  
  export default Header
