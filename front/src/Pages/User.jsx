import { MdShare, MdAssignment } from "react-icons/md";
import React, { useState } from "react";
import Card from "../Components/Card.jsx";
import { Products } from "../stores/mockData.js";
import { useParams } from "react-router-dom";

const User = () => {
  const [selectedButton, setSelectedButton] = useState("전체");
  const [selectedTab, setSelectedTab] = useState("최신순");
  let { id } = useParams();

  return (
    <div className="flex justify-center w-[1280px space-x-8">
      <div className="flex w-[174px] flex-col">
        <h2 className="text-2xl mb-4">마이 페이지</h2>
        <hr className="border-t border-gray-500 my-2" />
        <ul className="text-lg">
          <li className="my-2">판매내역</li>
          <li className="my-2">구매내역</li>
          <li className="my-2">찜한상품</li>
          <li className="my-2">프로필 수정</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between w-[1065px] relative">
          <div className="flex">
            <div className="flex flex-row items-start w-[516px] h-[197px] relative">
              <div className="w-[129px] h-[129px] ml-[26px] rounded-full bg-[#EEEEEE]"></div>
              <h1 className="mt-[40px] ml-[24px]">닉네임</h1>
              <div className="flex flex-grow-0 absolute top-0 right-0 mt-[40px]">
                <button>
                  <MdShare className="text-4xl text-primary" />
                </button>
              </div>
              <div className="absolute bottom-0 right-0 w-[479px] h-[57px] rounded-lg bg-[#EEEEEE] p-2">
                자기소개
              </div>
            </div>
          </div>
          <div className="flex flex-grow-0">
            <div className="w-[516px] h-[197px] flex flex-col justify-between">
              <div className="w-full h-[91px] rounded-lg bg-[#EEEEEE] flex items-center px-4">
                <MdAssignment className="text-4xl text-primary" />
                <p className="ml-2">중고상품을 올려보세요!</p>
                <button className="bg-primary rounded-full ml-auto px-4 py-2 text-sm text-white">
                  판매하기
                </button>
              </div>
              <div className="flex justify-between w-full h-[91px] rounded-lg bg-[#EEEEEE]">
                <div className="h-full w-[calc(100%/3)] border-r border-gray-400 flex items-center justify-center flex-col">
                  <p className="text-medium text-light-gray">판매중</p>
                  <p className="text-[22px]">0</p>
                </div>
                <div className="h-full w-[calc(100%/3)] border-r border-gray-400 flex items-center justify-center flex-col">
                  <p className="text-medium text-light-gray">판매완료</p>
                  <p className="text-[22px]">0</p>
                </div>
                <div className="h-full w-[calc(100%/3)] flex items-center justify-center flex-col">
                  <p className="text-medium text-light-gray">구매완료</p>
                  <p className="text-[22px]">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[59px] text-[24px] font-bold">내 상품</div>
        <div className="mt-[18px] w-full h-[58px] border-b border-light-gray bg-white flex items-center mb-[24px]">
          <button
            className={`w-[160px] h-full text-center border-b-2 border-transparent font-semibold focus:outline-none 
              ${selectedButton === "전체" ? "text-black border-black" : "text-light-gray"}`}
            onClick={() => setSelectedButton("전체")}
          >
            전체
          </button>
          <button
            className={`w-[160px] h-full text-center border-b-2 border-transparent font-semibold focus:outline-none 
              ${selectedButton === "판매중" ? "text-black border-black" : "text-light-gray border-light-gray"}`}
            onClick={() => setSelectedButton("판매중")}
          >
            판매중
          </button>
          <button
            className={`w-[160px] h-full text-center border-b-2 border-transparent font-semibold focus:outline-none 
              ${selectedButton === "판매완료" ? "text-black border-black" : "text-light-gray"}`}
            onClick={() => setSelectedButton("판매완료")}
          >
            판매완료
          </button>
        </div>

        <div className="flex justify-between mb-5">
          <p>총 0 개</p>
          <div>
            <button
              className={`mr-2 px-2 py-1 rounded-md focus:outline-none ${selectedTab === "최신순" ? "text-black" : "text-light-gray"}`}
              onClick={() => setSelectedTab("최신순")}
            >
              최신순
            </button>
            <button
              className={`mr-2 px-2 py-1 rounded-md focus:outline-none ${selectedTab === "낮은가격순" ? "text-black" : "text-light-gray"}`}
              onClick={() => setSelectedTab("낮은가격순")}
            >
              낮은가격순
            </button>
            <button
              className={`px-2 py-1 rounded-md focus:outline-none ${selectedTab === "높은가격순" ? "text-black" : "text-light-gray"}`}
              onClick={() => setSelectedTab("높은가격순")}
            >
              높은가격순
            </button>
          </div>
        </div>

        {selectedButton === "전체" && (
          <div className="grid grid-cols-5 gap-4">
            {Products.map((product) => (
            <Card
            key={product.product_id}
            productId={product.product_id}
          />
            ))}
          </div>
        )}
        {selectedButton === "판매중" && (
          <div className="grid grid-cols-5 gap-4">

          </div>
        )}
        {selectedButton === "판매완료" && (
          <div className="grid grid-cols-5 gap-4">

          </div>
        )}
      </div>
    </div>
  );
};

export default User;
