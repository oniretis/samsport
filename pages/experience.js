import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function experience() {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto h-48 ">
        <h1 className="text-gray-900 text-5xl md:text-9xl font-bold py-20 text-center md:text-left dark:text-gray-100">
          Experience
        </h1>
      </div>
      <div className="w-full lg:h-screen flex flex-col items-center justify-center ">
        <table className="table-fixed">
          <tbody>
            <tr>
              <td></td>
              <td className="bg-gray-400 rounded-t-lg">
                <span className="flex h-3 w-3 items-center">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-gray-500 opacity-75"></span>
                  <span className="relate inline-flex rounded-full h-3 w-3 bg-gray-900"></span>
                </span>
              </td>
              <td className="p-2 pt-8">
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2.5, ease: [0.6, 0.05, -0.01, 0.9] }}
                >
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    2019 - present
                  </p>
                  <p className="text-sm">SuperSoft.ng</p>
                  <p className="font-light">
                    Developed front end applications with react js(next js) and
                    context api.
                  </p>
                  <p className="font-light">
                    Created Loan tracking Api for marchant bank
                  </p>
                </motion.div>
              </td>
            </tr>
            <tr>
              <td className="p-2 pt-8 text-right">
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2.5, ease: [0.6, 0.05, -0.01, 0.9] }}
                >
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    2015 - 2019
                  </p>
                  <p className="text-sm">PopCentral</p>
                  <p className="font-light">
                    Created full-stack music application for the music channel
                  </p>
                  <p className="font-light">Buildth game application</p>
                  <p className="font-light">
                    Designed and developed music channels website
                  </p>
                </motion.div>
              </td>
              <td className="bg-gray-400">
                <span className="flex h-3 w-3 items-center">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-gray-500 opacity-75"></span>
                  <span className="relate inline-flex rounded-full h-3 w-3 bg-gray-900"></span>
                </span>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td className="bg-gray-400">
                <span className="flex h-3 w-3 items-center">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-gray-500 opacity-75"></span>
                  <span
                    className="relate inline-flex rounded-full h-3 w-3 bg-
                  gray-900"
                  ></span>
                </span>
              </td>
              <td className="p-2 pt-8">
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2.5, ease: [0.6, 0.05, -0.01, 0.9] }}
                >
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    2017
                  </p>

                  <p className="text-sm">Xhub.ng</p>
                  <p className="font-light">
                    Created full stack websites with django and react js
                  </p>
                  <p className="font-light">
                    Developed a chat app for the staffs
                  </p>
                </motion.div>
              </td>
            </tr>
            <tr>
              <td className="p-2 pt-8 text-right">
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 2.5, ease: [0.6, 0.05, -0.01, 0.9] }}
                >
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    2014
                  </p>
                  <p className="text-sm">
                    Developed a muiltiligual Automated Teller Marchine system
                    for Banks in Nigeria
                  </p>
                </motion.div>
              </td>
              <td className="bg-gray-400 rounded-b-lg">
                <span className="flex h-3 w-3 items-center">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-gray-500 opacity-75"></span>
                  <span className="relate inline-flex rounded-full h-3 w-3 bg-gray-900"></span>
                </span>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default experience;
