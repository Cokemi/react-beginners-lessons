import React, { Fragment } from "react";

//import from Rect-Hook-Form
import { useForm } from "react-hook-form";

const BasicFormReactHookForm = () => {
  // const predefined in this react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("Submit!");
  };

  return (
    <Fragment>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control my-2"
          placeholder="Put your First Name here"
          {...register("firstName", {
            required: "First Name field is mandatory",
            maxLength: 20,
          })}
        />
        <p className="text-danger text-small d-block my-2">
          {errors.firstName?.message}
        </p>
        <input
          className="form-control my-2"
          placeholder="Put your Last Name here"
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        />
        <input
          className="form-control my-2"
          placeholder="Put your Age here"
          type="number"
          {...register("age", { min: 18, max: 99 })}
        />
        <select className="form-select" {...register("gender")}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input className="btn btn-primary" type="submit" />
      </form>
    </Fragment>
  );
};

export default BasicFormReactHookForm;
