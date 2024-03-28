import React from "react";

const ContactUs = () => {
  return (
    <div className="flex justify-center m-4 items-center">
      <div className="join join-vertical  md:w-1/2 mx-auto bg-success text-white">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do I add a book to my reading list?
          </div>
          <div className="collapse-content">
            <p>
              To add a book to your reading list, simply navigate to the book's
              details page and click on the "Add to Reading List" button. You
              can then access your reading list from the "Read" section of the
              website.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Can I download books for offline reading?
          </div>
          <div className="collapse-content">
            <p>
              Currently, we do not support downloading books for offline
              reading. However, you can access your books anytime by logging
              into your account on our website.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Are there any age restrictions for accessing the books?
          </div>
          <div className="collapse-content">
            <p>
              Our website is designed for readers of all ages. However, some
              books may contain mature content or themes. We recommend that
              parents or guardians supervise young readers and ensure that the
              content is appropriate for their age.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How do I report a technical issue or bug?
          </div>
          <div className="collapse-content">
            <p>
              If you encounter any technical issues or bugs while using our
              website, please report them to our support team through{" "}
              <span className="text-gray-700">book-heaven@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How often are new books added to the website?
          </div>
          <div className="collapse-content">
            <p>
              We strive to add new books regularly to keep our collection fresh
              and diverse. New releases and popular titles are added as they
              become available. You can stay updated on new additions by
              following us on social media or subscribing to our newsletter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
