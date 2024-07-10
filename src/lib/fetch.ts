import { useEffect, useState } from "react"
import { initialResult } from '../constants/profile'
import { GetDataType } from "model/Profile"

export default function Fetch(urlRequest: string) {
    
     const [returned, setReturned] = useState<GetDataType>({...initialResult})

     useEffect(() => {
          
          async function getData() {

               setReturned(
                    {
                         ...initialResult,
                         loading: true
                    }
               )
               return await fetch(urlRequest)
          }

          if (urlRequest !== "") {
               getData()
                    .then(response => {
                         if (!response.ok) {
                              setReturned(
                                   {
                                        ...returned,
                                        error: true
                                   }
                              )
                              throw new Error(`HTTP error! status: ${response.status}`)
                         }
                         return response.json()
                    })
                    .then(data => {
                         if (data.count === 0) {
                              setReturned({
                                   ...returned,
                                   empty: true,
                              })
                         } else {
                              setReturned({
                                   ...returned,
                                   data: data,
                                   empty: false,
                              })
                         }
                    })
                    .catch((error) => {
                         setReturned(
                              {
                                   ...returned,
                                   error: true
                              }
                         )
                    })
                    .catch((error) => {
                         setReturned(
                              {
                                   ...returned,
                                   loading: false
                              }
                         )
                    })
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [urlRequest])
     return  returned 
}