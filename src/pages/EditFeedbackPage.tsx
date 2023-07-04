import { NewFeedback, InputSection } from "./page_styles";
import { DropSelect } from "../components/Input";
import { H1, H2, H3, Text, Button, TextArea } from "../components/components_styles";
import editIcon from "../assets/shared/icon-edit-feedback.svg";
import { categoryOptions } from "./NewFeedbackPage";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { category } from "./NewFeedbackPage";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { request, suggestionDeleted, suggestionEdited } from "../../store/suggestionsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Params } from "./SuggestionDetailsPage";
import { original } from 'immer'

export type status = "suggestion" | "planned" | "in-progress" | "live";

const statusOptions:status[] = ["suggestion", "planned", "in-progress", "live"];

type Inputs = {
  title: string;
  category: category;
  status:status;
  description: string;
};

const EditFeedbackPage = () => {
  const params = useParams<Params>()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const productRequests = useSelector(
    (state: RootState) => state.request
  );

  const suggestion:request |undefined = productRequests.find(
    (suggestion) => suggestion.id === parseInt(params.id ?? "0")
  );
  


  const {register,handleSubmit,setValue} = useForm<Inputs>({
    defaultValues: {
title: suggestion?.title,
category: suggestion?.category,
status:suggestion?.status,
description:suggestion?.description,
    }
  })

  const submitData:SubmitHandler<Inputs> = (editedData)=> {
dispatch(suggestionEdited({id:params.id,...editedData}))
navigate("../")
  }
  return (
    // <FormProvider {...methods}>

    <NewFeedback>
      <img src={editIcon} alt="" />
      <H1>Create New Feedback</H1>
      <form action="" 
      onSubmit={handleSubmit(submitData)}>
        <InputSection>
          <label htmlFor="title">
            <H3>Feedback Title</H3>
            <p>Add a short descriptive headline</p>
          </label>
          <Text {...register("title")}/>
        </InputSection>
        <InputSection>
          <label htmlFor="category">
            <H3>Category</H3>
            <p>Choose a category for your feedback</p>
          </label>
          <DropSelect {...register("category")} setValue={setValue} value={suggestion?.category}  options={categoryOptions} />
        </InputSection>
        <InputSection>
          <label htmlFor="status">
            <H3>Update Status</H3>
            <p>Change feedback status</p>
          </label>
          <DropSelect {...register("status")} setValue={setValue} value={suggestion?.status}  options={statusOptions} />
        </InputSection>
        <InputSection>
          <label htmlFor="description">
            <H3>Feedback Detail</H3>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
          </label>
          <TextArea {...register("description")} />
        </InputSection>
        <div className="flex">
          <Button color="red" type="button" onClick={()=>{dispatch(suggestionDeleted(suggestion?.id))
          navigate("/")}}>Delete</Button>
          <div className="buttons">
            <Button color="deepBlue" type="button"  onClick={()=>navigate("../")}>Cancel</Button>
            <Button color="purple" type="submit">Save Changes</Button>
          </div>
        </div>
      </form>
    </NewFeedback>
    // </FormProvider>
  );
};

export default EditFeedbackPage;
