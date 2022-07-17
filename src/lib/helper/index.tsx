const getData = async () => {
    const res = await fetch(process.env.REACT_APP_API_URI+process.env.REACT_APP_API_ID, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`, // notice the Bearer before your token
        },
    })
    return await res.json()
}
export const GetList = getData
