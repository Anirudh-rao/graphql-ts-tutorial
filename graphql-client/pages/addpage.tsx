import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { request } from "graphql-request";
import { addPersonMutation } from "../constants";
import { useForm } from "react-hook-form";
const { register, handleSubmit } = useForm();
//if the user submits the form, then the program will output the value of their input.
const onSubmit = async (data: any) => {
  const response = await request(
    "http://localhost:4000/graphql",
    addPersonMutation,
    data
  );
  console.log(response);
};
return (
  <div>
    <form onSubmit={handleSubmit(onSubmit)}> {/*Bind our handler to this form.*/}
      {/* The user's input will be saved within the 'name' property */}
      <input defaultValue="test" {...register("name")} />
      <input type="submit" />
    </form>
  </div>
);

const AddPage: NextPage = () => {
  return (
    <div>
      <p>We will add a new entry here. </p>
    </div>
  );
};

export default AddPage;