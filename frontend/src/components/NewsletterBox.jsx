import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const NewsletterBox = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(backendUrl + "/api/subscriber/new", {
        email,
      });
      if (response.data.success)
        toast.success("You have successfully subcribed to our newsletter");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="text-center pb-4">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now and get 15% OFF
      </p>
      <p className="mt-3 text-gray-400">
        {" "}
        Enter your email address below to join our newsletter
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 "
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-black text-white text-xs px-10 py-4"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
