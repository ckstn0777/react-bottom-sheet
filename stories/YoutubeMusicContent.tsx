import React from 'react';

export default function YoutubeMusicContent({ setIsOpen }) {
  return (
    <div className="relative w-full h-full bg-red-900/50">
      <div
        className="text-white absolute top-[46px] right-5"
        onClick={() => setIsOpen(true)}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M456 231a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"></path>
        </svg>
      </div>

      <div className="flex justify-center gap-2 pt-12 pb-4 text-slate-600">
        <span>노래</span>
        <span>동영상</span>
      </div>

      <div className="flex justify-center items-center pt-8 pb-4">
        <img src="/images/album.jpg" className="rounded overflow-hidden" />
      </div>

      <div className="py-4 flex flex-col justify-center items-center gap-2">
        <h2 className="text-white text-3xl">左右盲</h2>
        <h4 className=" text-slate-200">요루시카(ヨルシカ)</h4>
      </div>

      <div className="flex justify-center items-center gap-4">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="2.4em"
          width="2.4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 0 0 0 33.9M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8"></path>
        </svg>

        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="3em"
          width="3em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z"></path>
        </svg>

        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          height="2.4em"
          width="2.4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8"></path>
        </svg>
      </div>
    </div>
  );
}
