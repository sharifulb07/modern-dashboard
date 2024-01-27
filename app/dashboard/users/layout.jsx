import React from "react";
import styles from "@/app/ui/dashboard/dashboard.module.css";
import Sidebar from "@/app/ui/dashboard/sidebar/sidebar";
import Navbar from "@/app/ui/dashboard/navbar/navbar";

 const layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.manu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};


export default layout;