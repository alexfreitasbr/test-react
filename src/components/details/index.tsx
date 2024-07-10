import React, { useState, useEffect, FunctionComponent} from 'react'
import { ReturnMessages } from 'util/returnMessages'

type DetailsProps = {
    urlList: string[] 
}

const Details: FunctionComponent<DetailsProps> = React.memo(({ urlList }) => {
    const [loadingDetails, setLoadingDetails] = useState(false)
    const [errorDetails, setErrorDetails] = useState("")
    const [details, setDetails] = useState<string[]>([])

    useEffect(() => {
        if (typeof urlList === 'undefined' || urlList.length === 0) return

        const newDetailsList: string[] = []
        setDetails([])
        setErrorDetails("")

        async function getDetailName(url: string): Promise<any> {
            return await fetch(url)
        }

        for (let i = 0; i < urlList.length; i++) {
            setLoadingDetails(true)
            getDetailName(urlList[i])
                .then((response) => response.json())
                .then((object) => {
                    if (object['name']) newDetailsList.push(object.name)
                    if (object['title']) newDetailsList.push(object.title)
                    setDetails([...newDetailsList])
                })
                .catch((error) => {
                    setErrorDetails(ReturnMessages.conectionError)
                    return
                })
                .finally(() => setLoadingDetails(false))
        }
    }, [urlList])

    if (loadingDetails) return <p>{ReturnMessages.loading}</p>
    if (errorDetails) return <p>{ReturnMessages.conectionError}</p>
    if (details && details.length === 0) return <p>{`${ReturnMessages.empty} nada.`}</p>

    return <p>{details.join(", ")}.</p>
})

export default Details

