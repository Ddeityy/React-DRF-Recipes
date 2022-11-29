import { useParams } from "react-router"

const CategoryDetail = () => {
    let { id } = useParams()
    return (
        {id}
    )
}

export default CategoryDetail