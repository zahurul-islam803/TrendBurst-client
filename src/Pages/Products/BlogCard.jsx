import { MdOutlineDateRange } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import moment from "moment";
const BlogCard = () => {
  return (
    <>
      <Marquee>
        <div className="flex gap-6">
          <div className="card w-96 bg-rose-100">
            <figure>
              <img
                src="https://i.ibb.co/wKB8tx9/1.jpg"
                className="w-full"
                alt="blog"
              />
            </figure>
            <div className="card-body">
              <div className="flex gap-3">
                <h2 className="flex gap-2 items-center justify-center">
                  <MdOutlineDateRange className="text-rose-500"></MdOutlineDateRange>{" "}
                  {moment().format("Do MMM YYYY")}{" "}
                  <span className="text-rose-500">|</span>
                </h2>
                <h2 className="flex gap-2 items-center justify-center">
                  <AiFillMessage className="text-rose-500"></AiFillMessage> 2.1K
                </h2>
              </div>
              <p>There are many variations of passages of fashion</p>
              <div className="card-actions">
                <button className="btn text-white bg-rose-500 hover:bg-rose-600 rounded-badge">
                  Show more
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-rose-100">
            <figure>
              <img
                src="https://i.ibb.co/4VVmBzK/single-blog.jpg"
                className="w-full"
                alt="blog"
              />
            </figure>
            <div className="card-body">
              <div className="flex gap-3">
                <h2 className="flex gap-2 items-center justify-center">
                  <MdOutlineDateRange className="text-rose-500"></MdOutlineDateRange>{" "}
                  {moment().format("Do MMM YYYY")}{" "}
                  <span className="text-rose-500">|</span>
                </h2>
                <h2 className="flex gap-2 items-center justify-center">
                  <AiFillMessage className="text-rose-500"></AiFillMessage> 2.4K
                </h2>
              </div>
              <p>There are many variations of passages of fashion</p>
              <div className="card-actions">
                <button className="btn text-white bg-rose-500 hover:bg-rose-600 rounded-badge">
                  Show more
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-rose-100">
            <figure>
              <img
                src="https://i.ibb.co/4PNT4wP/3.jpg"
                className="w-full"
                alt="blog"
              />
            </figure>
            <div className="card-body">
              <div className="flex gap-3">
                <h2 className="flex gap-2 items-center justify-center">
                  <MdOutlineDateRange className="text-rose-500"></MdOutlineDateRange>{" "}
                  {moment().format("Do MMM YYYY")}{" "}
                  <span className="text-rose-500">|</span>
                </h2>
                <h2 className="flex gap-2 items-center justify-center">
                  <AiFillMessage className="text-rose-500"></AiFillMessage> 2.4K
                </h2>
              </div>
              <p>There are many variations of passages of fashion</p>
              <div className="card-actions">
                <button className="btn text-white bg-rose-500 hover:bg-rose-600 rounded-badge">
                  Show more
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-rose-100 mr-6">
            <figure>
              <img
                src="https://i.ibb.co/Yyt3xgw/2.jpg"
                className="w-full"
                alt="blog"
              />
            </figure>
            <div className="card-body">
              <div className="flex gap-3">
                <h2 className="flex gap-2 items-center justify-center">
                  <MdOutlineDateRange className="text-rose-500"></MdOutlineDateRange>{" "}
                  {moment().format("Do MMM YYYY")}{" "}
                  <span className="text-rose-500">|</span>
                </h2>
                <h2 className="flex gap-2 items-center justify-center">
                  <AiFillMessage className="text-rose-500"></AiFillMessage> 2.4K
                </h2>
              </div>
              <p>There are many variations of passages of fashion</p>
              <div className="card-actions">
                <button className="btn text-white bg-rose-500 hover:bg-rose-600 rounded-badge">
                  Show more
                </button>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </>
  );
};

export default BlogCard;
