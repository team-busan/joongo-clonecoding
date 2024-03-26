import { motion } from "framer-motion";

const InputTitle = () => {
  return (
    <motion.input
      initial={{ borderColor: "#F5F5F5" }}
      whileFocus={{ borderColor: "#000000" }}
      className="px-5 py-3 text-sm border-[1px] rounded outline-none"
      type="text"
      placeholder="상품명"
    />
  );
};

export default InputTitle;
