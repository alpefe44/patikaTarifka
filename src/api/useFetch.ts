import React, { useEffect, useState } from "react"
import axios from "axios"

function useFetch(url: string) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    //const [error, setError] = useState<string>("");

    const FetchData = async () => {
        try {
            const response = await axios.get(url)
            setLoading(false)
            setData(response.data.categories)
        } catch (err: any) {
            //setError(err)
            console.log(err)
        }
    }
    useEffect(() => { FetchData() }, [])

    return { data, loading }
}


export default useFetch;




