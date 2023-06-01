import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const GetinTouch = () => {
  return (
    <section className="bg-gray-950 text-gray-50 font-light tracking-tight">
      <Navbar />
      <section>
        <div className="min-h-screen p-4 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto my-8">
            <div className="">
              <h2 className="font-semibold text-4xl md:text-5xl my-1 text-center">
                Get in touch with Siddhesh
              </h2>
              <p className=" mb-6 mt-3 text-center text-sm md:text-base">
                Your response will be replied within the next 24-48 hours :)
              </p>

              <div className=" rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-8 gap-y-8 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="">
                    <h1 className="text-center text-xl pb-5 italic">
                      If you want to do it the cool way
                    </h1>
                    <div className="mx-auto text-center bg-gray-800 rounded-2xl max-w-lg w-full shadow-lg">
                      <pre className="text-left px-4 pt-4 pb-1">
                        $ pip install siddhesh
                      </pre>
                      <pre className="text-left px-4 py-1">$ python</pre>
                      <pre className="text-left px-4 py-1">
                        &#62;&#62;&#62; import siddhesh as sk
                      </pre>
                      <pre className="text-left px-4 pb-4 pt-1">
                        &#62;&#62;&#62; sk.start() #actually works!
                      </pre>
                    </div>
                  </div>

                  <div className="lg:col-span-2 mx-5">
                    <form action="">
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5">
                          <label for="full_name">Name</label>
                          <input
                            required
                            type="text"
                            name="full_name"
                            id="full_name"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-700 "
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label for="email">Email</label>
                          <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-700 "
                          />
                        </div>
                        <div className="md:col-span-5">
                          <label for="message">Message</label>
                          <textarea
                            cols={90}
                            required
                            type="text"
                            className=" py-3 border mt-1 rounded px-4 w-full bg-gray-700 "
                          />
                        </div>

                        <div className="md:col-span-5 text-right my-3">
                          <div className="inline-flex items-end">
                            <button
                              type="submit"
                              className="inline-flex rounded-md bg-blue-700 px-3.5 py-1.5 transition duration-200 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default GetinTouch;
