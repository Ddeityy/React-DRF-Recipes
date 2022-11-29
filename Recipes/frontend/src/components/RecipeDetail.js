import { useParams } from "react-router"

const RecipeDetail = () => {
    let { id } = useParams()
    return (
        {id}
    )
}

export default RecipeDetail