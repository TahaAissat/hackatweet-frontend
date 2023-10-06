import {useRouter} from 'next/router'

function InfoHastag() {
    const router  = useRouter()
    const InfoHastag = router.query.InfoHastag
    return <h1>hashtag {InfoHastag}</h1>
}
export default InfoHastag