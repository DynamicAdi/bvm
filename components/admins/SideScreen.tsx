import React, { Suspense, useEffect, useState } from "react";
import styles from "@/sass/admins/Children.module.scss";
import {
  MdAdd,
  MdArrowDownward,
  MdArrowUpward,
  MdDelete,
  MdDone,
  MdEdit,
} from "react-icons/md";
import Loading from "../global/Loading";
import AddingScreen from "./AddingScreen";
import { handleDelete, readData } from "@/backend/curd";


function SideScreen({tableName}: {tableName: string}) {

    const {data, isLoading, error, reFetch}:{
        data: any,
        isLoading: boolean,
        error: boolean,
        reFetch: any
    } = readData(tableName);
    // console.log(data)

    const { columnNames, rows } = data;

    const len = rows?.length;
    
    useEffect(() => {
        if (tableName===tableName) {
            reFetch();
        }
    }, [tableName]);
  const [editing, setEditing] = useState(false);
  const [editable, setEditable] = useState(false);
  const [open, setOpen] = useState(Array(data?.length).fill(false)); // Remove ? //
  const [addScreen, setadding] = useState(false);


  const [id, setId] = useState(0);
  const [head, setHead] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  // Actions
  const confirmDelete = async (id: number) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (confirm) {
      await handleDelete(tableName, id);
    } else {
      return null;
    }
  };

  function editAction(id: number, head: string, desc: string, img: string) {
    setEditing(true);
    setId(id)
    setHead(head)
    setDesc(desc)
    setImg(img)
  }

  const handleEdit = () => {
    setEditable(!editable);
  };

  const handleOpen = (index: number) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

 
  return (
    <div className={styles.main}>
  
    {editing && (
      <AddingScreen
        isEditMode={true}
        id={id}
        head={head}
        desc={desc}
        img={img}
        setEditing={setEditing}
        length={len}
        tableName={tableName}
      />
    )}
    {addScreen && (
      <AddingScreen
        isEditMode={false}
        id={id}
        setAdding={setadding}
        length={len}
        tableName={tableName}
      />
    )}
    <h1 className={styles.title}>{tableName}</h1>
    <div className={styles.rows}>
      <div className={styles.header}>
        <div className={styles.mainTable}>
          <div className={styles.upperHead}>

            {columnNames?.map((col: any) => (
              <h1 key={col}>{col}</h1>
            ))}
            <div className={styles.icons}>
              {editable ? (
                <>
                  <MdDone
                    className={styles.editIcon}
                    style={{ background: "rgba(14, 255, 0, 0.5)" }}
                    onClick={handleEdit}
                  />
                  <MdAdd
                    className={styles.editIcon}
                    onClick={() => {
                      setadding(true);
                    }}
                    />
                </>
              ) : (
                <MdEdit className={styles.editIcon} onClick={handleEdit} />
              )}
              </div>

          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.mainTable}>
          <Suspense fallback={<Loading />}>
            {rows?.map((row: any, index: number) => (
                <div className={styles.context} key={index+1}>
                {columnNames?.map((col: any) => (
                    <p className={`${styles.heading} ${open[index] ? styles.open : ""}`} key={col}>{row[col]}</p>
                ))}
                <div className={styles.icons}>
                    {open[index] ? (
                      <MdArrowUpward
                        className={`${styles.editIcon} ${styles.down}`}
                        onClick={() => handleOpen(index)}
                      />
                    ) : (
                      <MdArrowDownward
                        className={`${styles.editIcon} ${styles.down}`}
                        onClick={() => handleOpen(index)}
                      />
                    )}
                    {editable && (
                      <>
                        <MdEdit
                          className={`${styles.editIcon} ${styles.down} ${styles.edit}`}
                          onClick={() => editAction(row.id, row.title, row.dsc, row.imgLink)}
                        />
                        <MdDelete
                          className={`${styles.editIcon} ${styles.down} ${styles.del}`}
                          onClick={() => confirmDelete(row.id)}
                        />
                      </>
                    )}
                  </div>
            </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default SideScreen