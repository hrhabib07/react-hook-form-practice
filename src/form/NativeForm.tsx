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
  department: z.enum(["cse", "eee", "swe"]),
  skillset: z
    .array(z.enum(["javascript", "typescript", "react", "tailwind", "redux"]))
    .min(3),
  eyeColor: z.string(),
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
      <h2 className="text-4xl my-4 text-blue-600 font-bold">
        Welcome to simple register form!
      </h2>
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

        <div className="flex flex-col">
          <label htmlFor="department">Department</label>
          <div className="flex gap-4">
            <label htmlFor="cse">
              <input
                type="radio"
                id="cse"
                {...register("department")}
                value="cse"
              />{" "}
              CSE
            </label>
            <label htmlFor="eee">
              <input
                type="radio"
                {...register("department")}
                id="eee"
                value="eee"
              />{" "}
              EEE
            </label>
            <label htmlFor="swe">
              <input
                type="radio"
                {...register("department")}
                id="swe"
                value="swe"
              />{" "}
              SWE
            </label>
          </div>
          <ErrorMessage
            errors={errors}
            name="department"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>

        <div>
          <label htmlFor="skillset">Skillset</label>
          <div className="grid grid-cols-3 gap-4">
            <label>
              <input
                type="checkbox"
                value="javascript"
                {...register("skillset")}
                className="mr-2"
              />
              JavaScript
            </label>
            <label>
              <input
                type="checkbox"
                value="typescript"
                {...register("skillset")}
                className="mr-2"
              />
              TypeScript
            </label>
            <label>
              <input
                type="checkbox"
                value="react"
                {...register("skillset")}
                className="mr-2"
              />
              React
            </label>
            <label>
              <input
                type="checkbox"
                value="tailwind"
                {...register("skillset")}
                className="mr-2"
              />
              Tailwind
            </label>
            <label>
              <input
                type="checkbox"
                value="redux"
                {...register("skillset")}
                className="mr-2"
              />
              Redux
            </label>
          </div>

          <ErrorMessage
            errors={errors}
            name="skillset"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="eyeColor">Eye color</label>
          <input type="color" id="eyeColor" {...register("eyeColor")} />
        </div>

        <button type="submit" className="bg-blue-600 text-white w-20 p-2 my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NativeForm;
