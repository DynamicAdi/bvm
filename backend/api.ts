import axios from "axios";
import { useState, useEffect } from "react";


export function getMyData(endpoint:string) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    let url = `http://localhost:8080/api/${endpoint}`;
    if (endpoint==="tables") {
        url = "http://localhost:8080/api/"
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

// api for posting image on server

export function ImageData(key:string) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    let url = `https://api.imgbb.com/1/upload?key=4e837e2a615db2ad068423d7867620fd`;
    

    const formData = new FormData();
    formData.append('image', key);

    const options = {
        method: 'POST',
        url: url,
        data: formData,
    };

    async function RetriveData() {
        setLoading(true);
        try {
            const response:any = await axios.request(options);
            if (response.status !== 200) {
            setError(true);
            return;
        }
        setData(response.data.data)
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