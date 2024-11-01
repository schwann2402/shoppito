import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            iusto alias, quidem deserunt velit repellendus aut quaerat
            doloremque blanditiis
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Title</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Title</li>
            <li>Title</li>
            <li>Title</li>
            <li>Title</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Title</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Info</li>
            <li>Info</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Info</p>
      </div>
    </div>
  );
};

export default Footer;
