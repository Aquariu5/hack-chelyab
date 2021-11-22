import { useParams } from "react-router-dom"
import Header from "../../Header"
import { news } from "../../../models/news"
const NewPage = (props) => {
    const params = useParams()
    console.log('params', params);
    const needNew = news.filter(ne => ne.id == params.id)[0];
    return <div >
            <Header name={needNew.title}/>
            <div className="New">
                <p>{needNew.body}</p>
            </div>
        </div>
}

export default NewPage