const User = () => {
  return (
    <div className="flex justify-center w-[1280px] bg-gray-400 space-x-8">
      <div className="flex w-[174px] flex-col justify-center align-middle">
        <h2 className="text-2xl mb-4">마이 페이지</h2>
        <hr className="border-t border-gray-500 my-2" />
        <ul className="text-lg">
          <li className="my-2">판매내역</li>
          <li className="my-2">구매내역</li>
          <li className="my-2">찜한상품</li>
          <li className="my-2">프로필 수정</li>
        </ul>
      </div>
      <div className="flex justify-between w-[1065px] relative">
        <div className="flex">
          <div className="flex flex-row items-start w-[516px] h-[197px] bg-blue-500 relative">
            <div className="w-[129px] h-[129px] ml-[26px] rounded-full bg-red-500"></div>
            <h1 className="mt-[40px] ml-[24px]">닉네임</h1>
            <div className="flex flex-grow-0 absolute top-0 right-0 mt-[40px]">
              <button>공유</button>
            </div>
            <div className="absolute bottom-0 right-0 w-[479px] h-[57px] rounded-lg bg-yellow-500 p-2">자기소개</div>
          </div>
        </div>
        <div className="flex flex-grow-0">
          <div className="w-[516px] h-[197px] bg-green-500"></div>
        </div>
      </div>
    </div>
  );
};

export default User;
