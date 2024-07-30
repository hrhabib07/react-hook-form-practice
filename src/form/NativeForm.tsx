import { SubmitHandler, useForm } from "react-hook-form";

type TNativeFormInputs = {
  name: string;
  age: number;
  dob: Date;
};

const NativeForm = () => {
  const { register, handleSubmit } = useForm<TNativeFormInputs>();
  const handleOnSubmit: SubmitHandler<TNativeFormInputs> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="max-w-xl my-12 mx-auto ">
      <form
        action=""
        className="flex flex-col"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="border p-2 my-1"
            placeholder="Name"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            className="border p-2 my-1"
            placeholder="Age"
            {...register("age", { valueAsNumber: true })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            className="border p-2 my-1"
            placeholder="Date of birth"
            {...register("dob", { valueAsDate: true })}
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white w-20 p-2 my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NativeForm;
