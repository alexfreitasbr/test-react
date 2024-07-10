import { ReturnMessages } from 'util/returnMessages'
import { ImageBox, Loading, NotFound, Msn, Error } from './style'

type ImageProps = {
    loading?: string,
    error?: string,
    empty?: string,
}
export function Image({ loading, error, empty }: ImageProps) {
    return <ImageBox>
        {loading && <Loading ></Loading >}

        {empty && <Msn>
            <NotFound></NotFound>
            <h3>
                {ReturnMessages.empty}
            </h3>
        </Msn>}

        {error && <Msn>
            <Error></Error>
            <h3>
            {ReturnMessages.conectionError}
            </h3>
        </Msn>}
    </ImageBox>
}