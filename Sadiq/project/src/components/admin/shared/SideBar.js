import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";


const SideBar = ({ children }) => {

  // Admin Panel Paths
  let ID = localStorage.getItem('Token')
  const routes = [
    {
      path: `/admin/${ID}`,
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: `/admin/users/${ID}`,
      name: "Users",
      icon: <FaUser />,
    },
    {
      path: `/admin/messages/${ID}`,
      name: "Messages",
      icon: <MdMessage />,
    },
    {
      path: `/admin/analytics/${ID}`,
      name: "Analytics",
      icon: <BiAnalyse />,
    },
    {
      path: `/admin/file-manager/${ID}`,
      name: "File Manager",
      icon: <AiTwotoneFileExclamation />,
      subRoutes: [
        {
          path: `/admin/settings/profile/${ID}`,
          name: "Profile ",
          icon: <FaUser />,
        },
        {
          path: `/admin/settings/2fa/${ID}`,
          name: "2FA",
          icon: <FaLock />,
        },
        {
          path: `/admin/settings/billing/${ID}`,
          name: "Billing",
          icon: <FaMoneyBill />,
        },
      ],
    },
    {
      path: `/admin/order/${ID}`,
      name: "Order",
      icon: <BsCartCheck />,
    },
    {
      path: `/admin/settings/${ID}`,
      name: "Settings",
      icon: <BiCog />,
      exact: true,
      subRoutes: [
        {
          path: `/admin/settings/profile/${ID}`,
          name: "Profile ",
          icon: <FaUser />,
        },
        {
          path: `/admin/settings/2fa/${ID}`,
          name: "2FA",
          icon: <FaLock />,
        },
        {
          path: `/admin/settings/billing/${ID}`,
          name: "Billing",
          icon: <FaMoneyBill />,
        },
      ],
    },
    {
      path: "/login",
      name: "Exit",
      icon: <i class="fa fa-sign-out" aria-hidden="true"></i>
    }
  ];
  // Admin Panel Paths

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  let Logout = () =>{
    localStorage.clear();
  }

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
                >
                <h5 className="text-light">Admin Panel</h5>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div onClick={route.name === 'Exit' ? Logout : null } className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;