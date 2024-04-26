import React from "react";
import Card from "../ui/dashboard/card/card";
import styles from "./dashboard.module.css";
import RightBar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transaction/transactions";
import Chart from "../ui/dashboard/chart/chart";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
