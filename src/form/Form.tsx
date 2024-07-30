import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    const formData = {
      name,
      age,
    };
    alert(JSON.stringify(formData));
  };
  return (
    <div className="max-w-7xl mx-auto ">
      <div className=" my-12">
        <div>
          <h1 className="text-2xl font-semibold">Welcome!</h1>

          <form className="my-4" action="" onSubmit={(e) => handleSubmit(e)}>
            <input
              className="border p-2 w-7xl rounded"
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <br />
            <input
              className="border p-2 my-2 w-5xl rounded"
              type="number"
              onChange={(e) => setAge(Number(e.target.value))}
              placeholder="Age"
            />
            <br />
            <button className="bg-blue-600 text-white py-2 px-4 mb-2 text-xl font-medium rounded">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
