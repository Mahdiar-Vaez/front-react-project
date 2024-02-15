const fetchApi=async(url,option={})=>{
    const res=await fetch(process.env.REACT_APP_BASE_API+url,option)
    const data=await res.json()
    return data 
}
export default fetchApi