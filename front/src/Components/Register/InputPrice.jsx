import { motion } from "framer-motion";

const InputPrice = ({ register, formState }) => {
  return (
    <div className="relative">
      <motion.input
        initial={{ borderColor: "#F5F5F5" }}
        whileFocus={{ borderColor: "#000000" }}
        className="px-5 py-3 text-sm border-[1px] rounded outline-none w-full"
        type="number"
        placeholder="판매가격"
        {...register("price", { required: "판매가격 필수" })}
      />
      <span className="absolute left-2 top-2.5">₩</span>
    </div>
  );
};

export default InputPrice;
