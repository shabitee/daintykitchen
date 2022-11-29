import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; 

const Form = () => {
const schema = yup.object().shape({
  fullName: yup.string().required("Hey, full name is required!"),
  email: yup.string().email().required(),
  guest: yup.number().positive().integer().min(5).max(40).required().typeError("Guests must be 5 or more"),
 
});

const {register, handleSubmit, formState: { errors }, } = useForm({resolver: yupResolver(schema)});

const onSubmit = (data) => {
  console.log(data);
  
}



  return(
  
  
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full name" { ...register ("fullName")}/>
      <p>{errors.fullName?.message}</p>

      <input type="email" placeholder="Email" { ...register ("email")}/>
      <p>{errors.email?.message}</p>

      <input type="number" placeholder="Number of people" { ...register ("guest")}/>
      <p>{errors.guest?.message}</p>
      
      <input type="submit"/>
    </form>
  );
};


export default Form;