import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Shipping.css";

const Shipping = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />
        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        <input placeholder="Address" {...register("example")} />
        <input placeholder="City" {...register("example")} />
        <input placeholder="Phone Number" {...register("example")} />

        {errors.exampleRequired && (
          <span className="error">This field is required</span>
        )}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
