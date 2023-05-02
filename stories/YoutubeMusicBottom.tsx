import React from 'react';
import ReactButtomSheet from '../src';

export default function YoutubeMusicBottom() {
  return (
    <article className="overflow-hidden text-white">
      <header className="flex items-center gap-4 p-4 bg-slate-700/80 border-b border-b-slate-200">
        <img
          src="/images/album.jpg"
          className="rounded overflow-hidden w-8 h-8"
        />

        <div className="flex-1">
          <p>左右盲</p>
          <p className="text-slate-200 text-sm">요루시카(ヨルシカ)</p>
        </div>

        <ReactButtomSheet.CloseButton />
      </header>

      <div className="bg-slate-900/80">
        <ul className="flex flex-col gap-6 px-6 py-6 text-sm">
          <li>뮤직 스테이션 시작</li>
          <li>다음에 재생</li>
          <li>현재 재생목록에 추가</li>
          <li>보관함에 추가</li>
          <li>오프라인 저장 항목 삭제</li>
          <li>재생목록에 추가</li>
          <li>공유</li>
          <li>신고</li>
        </ul>
      </div>
    </article>
  );
}
