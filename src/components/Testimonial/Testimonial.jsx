const Testimonial = () => {
  return (
    <section className="my-8">
      <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 className="text-4xl font-semibold leading-none text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        <div className="flex flex-col items-center mx-12 lg:mx-0">
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
            </svg>
            <p className="px-6 py-1 text-lg italic text-justify">
              I couldn`t be happier with my experience using this real estate
              website. As a first-time homebuyer, I was initially overwhelmed by
              the prospect of finding the perfect property. However, this
              platform made the process seamless and enjoyable. The
              user-friendly interface allowed me to easily navigate through
              listings and narrow down my search criteria. The detailed property
              descriptions and high-quality images provided me with a clear
              understanding of each listing, saving me valuable time during the
              decision-making process. Additionally, the responsive customer
              support team was always available to answer my questions and
              address any concerns. Thanks to this website, I found my dream
              home quickly and stress-free!
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
            >
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
            </svg>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
          <p>Mr. Emdadul Hoque</p>
        </div>
        <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
            >
              <path
                fill="currentColor"
                d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
              ></path>
              <path
                fill="currentColor"
                d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
              ></path>
            </svg>
            <p className="px-6 py-1 text-lg italic text-justify">
              I recently used this real estate website to find a vacation rental
              for my family, and I couldn`t be more impressed. The platform
              offered a wide range of properties in various locations, making it
              easy for me to find the perfect retreat for our getaway. The
              detailed property listings provided comprehensive information
              about each rental, including amenities, pricing, and location
              details. The booking process was straightforward, and I
              appreciated the secure payment options available. During our stay,
              the property exceeded our expectations, and everything was exactly
              as described on the website. Overall, I highly recommend this
              platform to anyone looking for a hassle-free and enjoyable real
              estate experience.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
            >
              <path
                fill="currentColor"
                d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
              ></path>
              <path
                fill="currentColor"
                d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
              ></path>
            </svg>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
          <p>Md. Harunur Rashid</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
