import React from 'react';

const mid3 = () => {
  return (
    <div className="flex h-screen items-center justify-center relative overflow-hidden">
      <div className="w-full h-full p-2 flex flex-col justify-center relative">
        <div className="relative h-2/3 textAnim border-2 border-black p-4 bg-white hover:bg-black duration-500 hover:text-white">
          <p className="text-2xl font-bold">You are</p>
	      <div className="relative md:-top-10 md:text-[150px] top-20 text-4xl ">
	        <h1 className="H13 tracking-[30px] absolute">INVITED</h1>
	        <h1 className="H12 tracking-[30px] absolute">INVITED</h1>
	        <h1 className="H11 tracking-[30px] absolute">INVITED</h1>
	      </div>
          <p className="absolute text-xl font-bold bottom-10 right-10">Be part of this historical Event.</p>
        </div>
       	<div className="absolute bottom-4 right-4 bg-white border-2 w-fit p-1 border-black rounded-2xl hover:bg-black cursor-pointer hover:text-white duration-500">
       		<a href="">Made By Logan</a>
       	</div>
      </div>
    </div>
  );
};

export default mid3;
