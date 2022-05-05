import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const ShoppingListForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [entries, setEntries] = useState([]);

  const onSubmit = (data, e) => {
    console.log(data);
    setEntries([...entries, data]);

    //clean all fields
    e.target.reset();
  };

  return (
    <Fragment>
      <h1 className="container my-5">Shopping List</h1>
      <form className="container md-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Item"
          className="form-control my-2"
          {...register("item", {
            required: "*This field is mandatory",
            minLength: { value: 2, message: "Minimun 2 characters" },
          })}
        ></input>
        <p className="text-danger text-small d-block my-2">
          {errors.item?.message}
        </p>
        <input
          placeholder="Description"
          className="form-control my-2"
          {...register("description", {
            minLength: 0,
            maxLength: { value: 20, message: "Maximun 20 characters" },
          })}
        ></input>
        <p className="text-danger text-small d-block my-2">
          {errors.description?.message}
        </p>
        <input
          placeholder="quantity"
          className="form-control my-2"
          type="number"
          {...register("quantity", {
            valueAsNumber: true,
            max: { value: 10, message: "Maximun quantity is 10" },
            required: { value: true, message: "Quantity is required" },
          })}
        ></input>
        <p className="text-danger text-small d-block my-2">
          {errors.quantity?.message}
        </p>
        <button className="btn btn-primary my-2" type="submit">
          Add
        </button>
      </form>
      {entries.length > 0 && (
        <p className="container my-3" style={{ color: "green" }}>
          Shopping list contains {entries.length} items
        </p>
      )}
      {entries.length > 0 && (
        <ul className="container ">
          {entries.map((x, index) => {
            return (
              <li key={index} style={{ color: "brown" }}>
                {x.item} - {x.quantity} - ({x.description})
              </li>
            );
          })}
        </ul>
      )}
    </Fragment>
  );
};

export default ShoppingListForm;
