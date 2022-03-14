import userData from "../constants/data";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="h-screen ">
      <div className="text-center md:text-left md:flex max-w-3xl mx-auto mt-12 md:mt-32 space-x-4 w-full ">
        <div className="space-y-3">
          <motion.h1
            className="font-bold text-6xl leading-tight font-play text-gray-900 dark:text-gray-100"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -5, opacity: 0 }}
            transition={{ duration: 2.5, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            All-in-one developer.
          </motion.h1>
          <motion.p
            className=" text-xm md:text-xm "
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 3, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            Hi, my name is Samuel Onireti I am a software developer interested
            in creating world class applications for you.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="text-center max-w-3xl mx-auto mt-10"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 3.5, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        <h1 className="font-play text-left pb-4 font-bold pl-3 text-gray-900 dark:text-gray-100">
          About me
        </h1>
        <p className=" p-4 md:p-1 space-x-4 md:text-light md:font-sm text-justify ">
          Samuel is a freelance and full-stack developer based in Lagos with a
          passion for building digital services. He has a knack for all things
          products, from planning and designing all the way to solving real-life
          problems with code. His code stacks are react js, node js and django.
          When not developing, he loves creating good music and playing games
          online. He also loves football, traveling and exploring new and
          exciting places.
        </p>
        <div className="mt-8">
          <h1 className="font-play text-left pb-4 font-bold pl-3 text-gray-900 dark:text-gray-100 ">
            Job Opprtunities
          </h1>
          <p className=" p-4 md:p-1 text-light font-sm text-justify leading-tight">
            I'm looking for a job currently, If you see me as a good fit, check
            my{" "}
            <a
              href={userData.resumeUrl}
              target="__blank"
              className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
            >
              CV
            </a>{" "}
            and I'd love to work for you.
          </p>
        </div>
        <br />
      </motion.div>
    </div>
  );
}

export default Hero;
