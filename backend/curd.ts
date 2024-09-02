// imports
import axios from "axios";
import { useState, useEffect } from "react";

// READ;


export function readData(endpoint:string) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    let url = `http://localhost:8080/api/get/${endpoint}`;

    if (endpoint==="tables") {
      url = "http://localhost:8080/api/tables"
  }
  
    const options = {
        method: 'GET',
        url: url,
        headers: {
            "content-type": "application/json",
        },
    };
    
    async function RetriveData() {
        setLoading(true);
        try {
            const response:any = await axios.request(options);
            if (response.status !== 200) {
            setError(true);
            return;
        }
        if (endpoint === "tables" || endpoint === "columns") {
        setData(response.data)
        }
        else {
            setData(response.data.data)
        
        }
        setLoading(false);
    }
    catch(error) {
        setError(false);
    }
    finally {
        setLoading(false);
    }
    };

    useEffect(() => {
        RetriveData()
    }, [])

    function reFetch() {
        setLoading(true);
        setError(false);
        RetriveData()
    }

    return {data, isLoading, error, reFetch}

}


// Delete;
async function handleDelete(tableName:string, id: number) {
    const methods = {
      method: "DELETE",
      url: `http://localhost:8080/api/delete/${tableName}/${id}`,
    };
    try {
      await axios.request(methods);
      alert(
        "Event Deleted Successfully, please wait a moment or reload the page,"
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }


// Create 


async function addItems(tableName:string, title: string, description: string, image: string, setAdding: void | any, getId: any) {
  const method = {
    method: "POST",
    url: `http://localhost:8080/api/add/${tableName}`,
    header: {
      "Content-Type": "application/json",
    },
    data: {
      id: getId(),
      title: title,
      dsc: description,
      imgLink: image,
    },
  };

  try {
    await axios.request(method);
    setAdding(false);
    window.alert(
      `Item Added Successfully, Refresh the page to see the changes!`
    );
  } catch (error) {
    window.alert(`Got Error`);
  }
}

// Update;
async function updateFunc(tableName: string, uid:number, title:string, description:string, image:string, setEditing: void | any) {
  const method = {
    method: "PUT",
    url: `http://localhost:8080/api/update/${tableName}/${uid}`,
    header: {
      "Content-Type": "application/json",
    },
    data: {
      id: uid,
      title: title,
      dsc: description,
      imgLink: image,
    },
  };

  try {
    setEditing(false)
    window.alert(
      `Item Updated Successfully, Refresh the page to see the changes!`
    )
    await axios.request(method);
  } catch (error) {
    window.alert(`Got Error`);
  }
}








export { handleDelete, updateFunc, addItems };