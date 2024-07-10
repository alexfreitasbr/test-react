
import Fetch from 'lib/fetch'
import { GetDataType } from 'model/Profile'
export  function  getProfile(subject:string,type:string){
    const urlRequest = subject && type ? `https://swapi.dev/api/${type}/?search=${subject}` : ""
    const data:GetDataType = Fetch(urlRequest) 
    return data
}