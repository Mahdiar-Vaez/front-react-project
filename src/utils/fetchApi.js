const fetchApi=async(url,option={})=>{
    const res=await fetch(url,option)
    const data=await res.json()
    return data
}
export default fetchApi