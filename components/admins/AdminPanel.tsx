"use client";
import React, { useEffect, useState } from "react";
import styles from "@/sass/admins/Admin.module.scss";
import { MdAdd, MdDeleteOutline, MdDone, MdEdit, MdDataUsage } from "react-icons/md";
import Loading from "../global/Loading";
import dynamic from "next/dynamic";
import { readData } from "@/backend/curd";
const SideScreen = dynamic(() => import("./SideScreen"), {loading: () => <Loading />});


function AdminPanel() {
  const {data: table}:any = readData("tables");
  const [currentTable, setTables] = useState("");

  const [editable, setEditable] = useState(false);
  const handleClicks = () => { 
      setEditable(!editable);
    }

  return (
    <div className={styles.adminpannel}>
      <div className={styles.sideBar}>
        <h1 className={styles.title}>Control center</h1>
        <p>Database management system</p>
        <div className={styles.icons}>
        {editable && <MdAdd className={styles.editIcon} />}
        {editable ? <MdDone className={styles.editIcon} style={{background: "rgba(4, 255, 0, 0.7)"}} onClick={() => handleClicks()}/> : <MdEdit className={styles.editIcon} onClick={() => handleClicks()} />}
        </div>

        <ul className={styles.list}>
          {table.map((tableName:any, index: number) => {
            return (
                <li
                  key={index}
                  onClick={() => setTables(tableName.Tables_in_bvmhighschool)}
                  className={`${currentTable === tableName.Tables_in_bvmhighschool && `${styles.activate}`}`}
                >
                  {editable && 
                 <button className={styles.del}>
                  <MdDeleteOutline
                  className={`${styles.editIcon} ${styles.outline}`}
                  />
                </button>
              }
                  {tableName.Tables_in_bvmhighschool}
                </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.child}>
        {currentTable ? <SideScreen tableName={currentTable} /> : <div className={styles.center}>
        <MdDataUsage style={{fontSize: "3rem", color: "white"}} />
          <h2>Please choose a database</h2>
          </div>}

      </div>
    </div>
  );
}

export default AdminPanel;
