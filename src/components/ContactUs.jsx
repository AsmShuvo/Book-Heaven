import React from "react";

const ContactUs = () => {
  return (
    <div className=" mx-60 my-10">
      <div className="hero bg-base-200  rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-success font-bold">Contact us!</h1>
            <p className="py-6 text-gray-500">
              Embark on literary adventures with our diverse collection of
              captivating reads, ranging from gripping mysteries to timeless
              classics. Unlock worlds of imagination and knowledge with our
              curated selection of books, catering to every reader's taste and
              interest.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control flex flex-row gap-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-1/2"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-1/2"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="Email"
                  placeholder="Email"
                  className="input input-bordered my-3"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt text-primary link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text text-gray-500">
                      What can we help you with?
                    </span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Write here..."
                  ></textarea>
                  <div className="label"></div>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-success text-base-content">
        <aside></aside>
      </footer>
    </div>
  );
};

export default ContactUs;
