import { NewFeedback, InputSection } from "./page_styles";
import newIcon from "../assets/shared/icon-new-feedback.svg";
import { DropSelect } from "../components/Input";
import { Text, Button, TextArea } from "../components/components_styles";
import { useForm, SubmitHandler } from "react-hook-form";

export type category = "UI" | "UX" | "feature" | "bug" | "enhancement";

type Inputs = {
  title: string;
  category: category;
  description: string;
};

export const categoryOptions:category[] = ["feature", "UI", "UX", "enhancement", "bug"];

const NewFeedbackPage = () => {
  const {register,handleSubmit,watch} = useForm<Inputs>({
    defaultValues: {
title: "",
category: "feature",
description:""
    }
  })
  return (
    <NewFeedback>
      <img src={newIcon} alt="" />
      <h1>Create New Feedback</h1>
      <form action="">
        <InputSection>
          <label htmlFor="title">
            <h3>Feedback Title</h3>
            <p>Add a short descriptive headline</p>
          </label>
          <Text {...register("title")}/>
        </InputSection>
        <InputSection>
          <label htmlFor="category">
            <h3>Category</h3>
            <p>Choose a category for your feedback</p>
          </label>
          <DropSelect options={categoryOptions} {...register("category")} />
        </InputSection>
        <InputSection>
          <label htmlFor="description">
            <h3>Feedback Detail</h3>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
          </label>
          <TextArea  {...register("description")}  />
        </InputSection>
        <div className="buttons">
          <Button color="deepBlue">Cancel</Button>
          <Button color="purple">Add Feedback</Button>
        </div>
      </form>
    </NewFeedback>
  );
};

export default NewFeedbackPage;