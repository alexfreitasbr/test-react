
import Fetch from 'lib/fetch'
export  function  getPlantName(urlRequest:string){
    const data = Fetch(urlRequest) 
    return data
}