import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const nativeFormInputSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  age: z.number({ required_error: "age must be number" }),
  dob: z.date({ required_error: "date of birth is required" }),
  gender: z.enum(["male", "female"], {
    required_error: "Please select a gender",
  }),
});

type TNativeFormInputs = z.infer<typeof nativeFormInputSchema>;

const NativeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TNativeFormInputs>({
    resolver: zodResolver(nativeFormInputSchema),
  });
  const handleOnSubmit: SubmitHandler<TNativeFormInputs> = (data) => {
    alert(JSON.stringify(data, null, 2));
    console.log("hello");
  };

  return (
    <div className="max-w-xl my-12 mx-auto ">
      <form className="flex flex-col" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="border p-2 my-1"
            placeholder="Name"
            {...register("name")}
          />
          {errors && <p className="text-red-400">{errors.name?.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="border p-2 my-1"
            placeholder="Email"
            {...register("email")}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p className="text-red-500">{message}</p>}
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
          <ErrorMessage
            errors={errors}
            name="age"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            className="border p-2 my-1"
            placeholder="Date of birth"
            {...register("dob", {
              valueAsDate: true,
              required: "this field is required",
            })}
          />
          {errors && <p className="text-red-500">{errors.dob?.message}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="gender">Gender</label>
          <select className="p-2 border" id="gender" {...register("gender")}>
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <ErrorMessage
            errors={errors}
            name="gender"
            render={({ message }) => <p className="text-red-500">{message}</p>}
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
