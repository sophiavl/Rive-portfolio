"use client";

import DeskComponent from "./components/DeskComponent";
import SophiaComponent from "./components/SophiaComponent";
import VanComponent from "./components/VanComponent";
import LieshoutComponent from "./components/LieshoutComponent";

export default function Home() {
  return (
    <div className=' h-screen w-full bg-background flex flex-col justify-between items-center'>
      <div className='flex flex-col h-30vh w-80'>
        <div className='flex w-full justify-start'>
          <SophiaComponent></SophiaComponent>
        </div>
        <div className='flex w-full justify-center'>
          <VanComponent></VanComponent>
        </div>
        <div className='flex w-full justify-end'>
          <LieshoutComponent></LieshoutComponent>
        </div>
        <div>
          <img src='/svg/Bookshelve.svg' alt='bookshelve' />
        </div>
      </div>
      <DeskComponent></DeskComponent>
    </div>
  );
}
