import React from "react";
import Card from "../ui/dashboard/card/card";
import styles from "./dashboard.module.css";
import RightBar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transaction/transactions";
import Chart from "../ui/dashboard/chart/chart";
import { cards } from "../backend/data";

const item = {
  title: "Total users",
  texts: "Total users",
  number: 12.0213,
  details: "asfsf",
  change: 12,
};
const cardsItems = cards;
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cardsItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
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
