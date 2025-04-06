export const a = "b";

{
  /* <div className="w-full h-fit lg:h-[154px] flex-center flex-col md:flex-row gap-4">
          {contact.map((card, index) => (
            <motion.div
              variants={fadeInOut("up", "tween", 0.2, 0.5 * index)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              key={index || card.id}
              className="h-full w-[300px] md:w-[365px]"
            >
              <Link
                href={card.href}
                className="h-full w-full flex justify-center gap-4 bg-white rounded-2xl p-4 md:p-6 lg:p-[28px] shadow-md hover:-translate-y-1 ease-in-out duration-300 overflow-hidden"
              >
                <div className="lg:mt-3">{card.icon}</div>
                <div className="h-full w-fit lg:w-[236px]">
                  <p className="h-fit w-full uppercase text-sm md:text-md">
                    {card.head}
                  </p>
                  <p className="h-fit w-full text-lg lg:text-xl font-bold text-balance">
                    {card.value}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div> */
}

{
  /* <div className="w-full h-fit space-y-4">
            <motion.div
              variants={fadeInOut("right", "tween", 0.2, 1)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              className="text-lg md:text-xl"
            >
              Trusted by more than 400+ companies worldwide
            </motion.div>
            <Carousel autoplay={true}>
              {carousel.map((item, index) => (
                <motion.div
                  variants={zoom("in", 0.2, 1.2)}
                  initial="hidden"
                  animate={isInView2 ? "show" : "exit"}
                  key={index}
                  className="w-full md:max-w-[15vw] h-[10vh] scale-50 md:scale-75 lg:scale-95"
                >
                  <Image
                    src={item.img}
                    width={550}
                    height={550}
                    alt="logo"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </Carousel>
          </div> */
}

// const carousel = [
//   {
//     id: 0,
//     img: "https://www.tematicaresearch.com/wp-content/uploads/2016/04/Google-logo-grey.png",
//   },
//   {
//     id: 1,
//     img: "https://images.squarespace-cdn.com/content/v1/53528f90e4b0768cad09d33b/1646912632339-2Y57Q1XV9TCUTZ0PIO1U/microsoft_logo.png?format=1000w",
//   },
//   {
//     id: 2,
//     img: "https://www.tza.com/wp-content/uploads/2021/10/1-12014_amazon-com-logo-vector-gray-amazon-light-logo.jpg",
//   },
//   {
//     id: 3,
//     img: "https://logowik.com/content/uploads/images/fedex-services-grey7830.logowik.com.webp",
//   },
// ];

{
  /* <nav className="relative hidden md:flex items-center gap-4 md:gap-5 lg:gap-7 xl:gap-10 animate-slide-down text-sm font-thin">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <div key={index} className="relative">
              <Link
                href={link.href}
                className={`capitalize cursor-pointer hover-link ${
                  isActive ? "font-semibold active" : ""
                } ease-in-out duration-200`}
              >
                {link.head}
              </Link>
              {link.pages && (
                <div className="absolute z-50 -bottom-10 w-full h-full br"></div>
              )}
            </div>
          );
        })}
      </nav> */
}

{
  /* <div className="w-full h-full flex-1 flex gap-2 mt-6">
        <div className="h-full w-full lg:w-[570px] space-y-6">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <motion.div
              variants={fadeInOut("right", "tween", 0.2, 0.5 * index)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              key={index}
              className="w-full h-fit space-y-4"
            >
              <h3 className="w-full text-lg md:text-xl line-clamp-1">
                What should entrepreneurs never do?
              </h3>
              <p className="w-full text-sm md:text-md line-clamp-3">
                I’m a serial entrepreneur and have started/ran/sold
                approximately 20 businesses over the past 45 years. Some of my
                businesses made millions, some of them broke even. But - I never
                lost a dime on a single one.
              </p>
            </motion.div>
          ))}
        </div>
        <div className="h-full w-full lg:w-[570px] space-y-6">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <motion.div
              variants={fadeInOut("left", "tween", 0.2, 0.5 * index)}
              initial="hidden"
              animate={isInView ? "show" : "exit"}
              key={index}
              className="w-full h-fit space-y-4"
            >
              <h3 className="w-full text-lg md:text-xl line-clamp-1">
                What should entrepreneurs never do?
              </h3>
              <p className="w-full text-sm md:text-md line-clamp-3">
                I’m a serial entrepreneur and have started/ran/sold
                approximately 20 businesses over the past 45 years. Some of my
                businesses made millions, some of them broke even. But - I never
                lost a dime on a single one.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="p-2 overflow-hidden">
        <motion.div
          variants={fadeInOut("up", "tween", 0.2, 0.5)}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          className="w-full lg:h-[224px] flex-between flex-col md:flex-row gap-4 bg-white/70 border border-slate-400 rounded-lg mt-6 md:mt-12 p-4 lg:p-[30px] overflow-hidden"
        >
          <div className="h-fit w-full lg:w-[515px]">
            <p className="w-full text-lg md:text-xl lg:text-3xl font-black">
              Have more questions?
            </p>
            <div className="text-sm md:text-md text-balance font-thin">
              If you’re a business with a large payments volume or unique
              business model, reach out to discuss alternative pricing options.
            </div>
          </div>
          <Link href="/contact#">
            <Button className="bg-[#7573BF] hover:bg-[#7573BFd8] text-md md:text-lg font-bold px-6 py-4 md:p-7 hover:-translate-y-0.5 active:translate-y-0 ease-in-out duration-300">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div> */
}

// const articles = [
//   {
//     id: 1,
//     title:
//       "How To Write Your Consulting Firm Mission Statement (Why It’s Important).",
//     image:
//       "https://cdn.prod.website-files.com/5f55ff47b6d23a11cb496a69/633d4bb18c35be84fb7ab5ef_pexels-thirdman-7994325.jpg",
//     link: "#",
//     ctaText: "Read More",
//   },
//   {
//     id: 2,
//     title:
//       "Personal Branding For Consultants: Be Authentic To Get More Clients.",
//     image:
//       "https://media.istockphoto.com/id/1408262049/photo/female-co-workers-meet-to-discuss-project.jpg?s=612x612&w=0&k=20&c=thl6QqXI4ple0-0eL8asWpaUGPEehbPz2F96YskcR9U=",
//     link: "#",
//     ctaText: "Read More",
//   },
//   {
//     id: 3,
//     title: "What Is An Entrepreneurial Consultant? (Examples Stories).",
//     image:
//       "https://media.istockphoto.com/id/1453843862/photo/business-meeting.jpg?s=612x612&w=0&k=20&c=4k9H7agmpn92B7bkUywvkK5Ckwm9Y8f8QrGs4DRDWpE=",
//     link: "#",
//     ctaText: "Read More",
//   },
// ];

// const services = [
//   {
//     id: 1,
//     title: "Operational Excellence",
//     description:
//       "Enhance your operations to achieve efficiency and excellence.",
//     image:
//       "https://cdn.prod.website-files.com/5f55ff47b6d23a11cb496a69/633d4bb18c35be84fb7ab5ef_pexels-thirdman-7994325.jpg",
//     link: "#",
//     ctaText: "Check out Case Study",
//   },
//   {
//     id: 2,
//     title: "Analytics Consulting",
//     description:
//       "Leverage data-driven insights to propel your business forward.",
//     image:
//       "https://media.istockphoto.com/id/1408262049/photo/female-co-workers-meet-to-discuss-project.jpg?s=612x612&w=0&k=20&c=thl6QqXI4ple0-0eL8asWpaUGPEehbPz2F96YskcR9U=",
//     link: "#",
//     ctaText: "Check out Case Study",
//   },
//   {
//     id: 3,
//     title: "Analytics Strategy",
//     description:
//       "Develop a robust analytics strategy to stay ahead of the curve.",
//     image:
//       "https://img.freepik.com/free-photo/person-presenting-their-job-resignation_23-2149445124.jpg",
//     link: "#",
//     ctaText: "Check out Case Study",
//   },
// ];

{
  /* {body &&
              body.map((block: any, index: number) => (
                <motion.p
                  key={index}
                  variants={fadeInOut("down", "tween", 0.2, 0.8 * index)}
                  initial="hidden"
                  whileInView="show"
                  animate="show"
                  className="text-lg text-gray-600"
                >
                  {/* {description} */
}
{
  /* {block.children[0]?.text}
                </motion.p>
              ))} */
}
