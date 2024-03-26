import UploadImages from "../Components/Register/UploadImages";
import InputTitle from "../Components/Register/InputTitle";
import ChooseCategory from "../Components/Register/ChooseCategory";
import InputPrice from "../Components/Register/InputPrice";
import InputDesc from "../Components/Register/InputDesc";
import StatusRadio from "../Components/Register/StatusRadio";
import TypeCheckBox from "../Components/Register/TypeCheckBox";
import SubmitButton from "../Components/Register/SubmitButton";

import { useForm } from "react-hook-form";

const ProductRegister = () => {
  const { register, handleSubmit, formState, watch } = useForm();

  const onValid = (data) => {
    console.log(data);
    return;
  };

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className="w-full max-w-[768px] bg-blue-50 flex flex-col gap-6"
    >
      <UploadImages register={register} formState={formState} watch={watch} />
      <InputTitle register={register} formState={formState} />
      <ChooseCategory register={register} formState={formState} />
      <InputPrice register={register} formState={formState} />
      <InputDesc register={register} formState={formState} />
      <StatusRadio register={register} formState={formState} />
      <TypeCheckBox register={register} formState={formState} />
      <hr />
      <SubmitButton />
    </form>
  );
};

export default ProductRegister;
