import { useState } from "react";

const InputDesc = () => {
  const [productDescCounter, setProductDescCounter] = useState(0);

  return (
    <div className="w-full">
      <input type="text" placeholder="상품 설명" />
      <p>{productDescCounter} / 1000</p>
    </div>
  );
};

export default InputDesc;
