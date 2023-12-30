import { Helmet } from "react-helmet-async";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>TrendBurst - Contact Us</title>
      </Helmet>
      <div className="bg-[#FCF6F6] py-28 mt-20">
        <h1 className="text-5xl text-center font-medium">Contact Us</h1>
      </div>
      <div className="max-w-screen-xl mx-auto my-4 bg-white">
        <div
          style={{
            boxShadow: "2px 2px 11px",
            margin: "4em",
            padding: "2em",
          }}
        >
          <div className="flex justify-center items-center gap-10">
            <div className="space-y-8">
              <div className="bg-white h-32 w-96 border">
                <div className="flex justify-evenly items-center h-full gap-4">
                  <div className="bg-rose-500 p-4 text-white rounded-full">
                    <FiPhoneCall size={40}></FiPhoneCall>
                  </div>
                  <div>
                    <h4 className="text-3xl font-medium mb-2">Phone:</h4>
                    <p>+88017xxxxxxxxxxxxxx</p>
                  </div>
                </div>
              </div>
              <div className="bg-white h-32 w-96 border">
                <div className="flex justify-evenly items-center h-full gap-4">
                  <div className="bg-rose-500 p-4 text-white rounded-full">
                    <HiOutlineMailOpen size={40}></HiOutlineMailOpen>
                  </div>
                  <div>
                    <h4 className="text-3xl font-medium mb-2">Email</h4>
                    <p>trendburst@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-white h-32 w-96 border">
                <div className="flex justify-evenly items-center h-full gap-4">
                  <div className="bg-rose-500 p-4 text-white rounded-full">
                    <IoLocationOutline size={40}></IoLocationOutline>
                  </div>
                  <div>
                    <h4 className="text-3xl font-medium mb-2">Address</h4>
                    <p>Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-medium text-4xl">Leave a Message</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the suffered alteration in some form.
              </p>
              <div className="flex gap-4 items-center w-full mt-6">
                <input
                  type="text"
                  placeholder="Name*"
                  className="input input-bordered w-1/2"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="input input-bordered w-1/2"
                />
              </div>
              <textarea
                className="textarea textarea-bordered h-36 w-full mt-6"
                placeholder="Message*"
              ></textarea>
              <button className="flex justify-center items-center gap-2 uppercase mt-8 text-sm bg-gradient-to-r from-rose-400 to-rose-600 rounded-badge text-white my-4 px-8 py-4 bg-transparent">
                post comment <FaArrowRight></FaArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;