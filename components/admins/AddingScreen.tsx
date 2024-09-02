import React, { useEffect, useState } from "react";
import styles from "@/sass/admins/AddItem.module.scss";
import { MdCheck, MdClear } from "react-icons/md";
import { updateFunc, addItems } from "@/backend/curd";
import axios from "axios";



function AddingScreen({
  id,
  isEditMode,
  head,
  desc,
  img,
  setAdding,
  length,
  setEditing,
  tableName
}: {
  id?: number;
  isEditMode: boolean;
  head?: string;
  desc?: string;
  img?: string;
  setEditing?: any;
  setAdding?: any;
  length: number;
  tableName: string
}) {
  const [uid, setId] = useState(0);
  const [description, setDescription] = useState(desc || "");
  const [title, setTitle] = useState(head || "");
  const [image, setImage]:any = useState(img || "");
  const [key, setKey] = useState<any>()

  async function UploadImage(e:any) {
    const files = e.target.files;
    const file = files[0];

    if (file && file.type.startsWith('image/')) {
      setKey(file);
}
    else {
      setImage("couldn't upload, please upload image!");
    }
}

async function PostImage(string:string) {
  let url = `https://api.imgbb.com/1/upload?key=4e837e2a615db2ad068423d7867620fd`;
  const data = new FormData();
  data.append('image', string);
  try {
    const response = await axios.post(url, data);
    if (response.status !== 200) {
      console.log("error");
      return;
    }
    setImage(response.data.data.url);
   
  }
  catch {
    console.log("error");
  }
}

if(key) {
  PostImage(key);
}


  function getId() {
    const value = length + 1;
    return value;
  }
  useEffect(() => {
    setId(id || getId());
    if (isEditMode) {
      setTitle(head || "");
      setImage(img || "");
      setDescription(desc || "");
    }
  }, [isEditMode]);

  function handleChange(e: any) {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "image") {
      setImage(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    } else {
      return null;
    }
  }



  return (
    <div className={styles.mainContainer}>
      <MdClear
        className={styles.cross}
        onClick={() => {
          {isEditMode ? setEditing(false) : setAdding(false)}
        }}
      />
      <div className={styles.children}>
        <div className={styles.upperHead}>
          <div className={styles.left}>
            <h1 className={styles.heading}>{isEditMode ? "Edit Data" : "Add item"}</h1>
            <p className={styles.subheading}>
              Please {isEditMode ? "edit" : "fill"} in the details below
            </p>
          </div>
        
          <div className={styles.right}>
            <div className={styles.popup}>
              <MdCheck className={styles.icon} /> <h3>Item Added</h3>
            </div>
          </div>


        </div>
        <form action="" method="post">
          <div className={styles.up}>
            <div className={styles.side}>
              <input
                type="number"
                required
                name="id"
                id="title"
                contentEditable={false}
                value={uid}
                readOnly
              />
              <input
                type="text"
                required
                name="title"
                id="title"
                placeholder="Enter Title"
                onChange={handleChange}
                value={title}
              />
              
              {
                image!=='' ? (
                <>
                  <img src={image} alt="uploaded" className={styles.uploadedImage}/>
                </>
                ) : (
                  <input onChange={UploadImage} accept="image/*" type="file"/>
                )
              }

            </div>
            <textarea
              required
              name="description"
              id="description"
              placeholder="Enter Description"
              onChange={handleChange}
              value={description}
            ></textarea>
          </div>
          <div className={styles.buttons}>
            <div
              className={styles.outline}
              onClick={async () => {isEditMode ? await updateFunc(tableName, uid, title, description, image, setEditing) : await addItems(tableName ,title, description, image, setAdding, getId)}}
            >
              {isEditMode ? "Update" : "Add"}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddingScreen;
