import data from "../../constants/data.js"
import OneProjectComponent from "./component/OneProjectComponent.jsx"

const ProjectComponent = () => {

    return (
        <div className="container project">
            <h2 className="projectTitle mb-5">My work showkase</h2>
            <div className=" d-flex  mt-2 flex-wrap justify-content-between" >
                {
                    data.map((el, index) => {
                        return <OneProjectComponent key={index} data={el} />
                    }
                    )
                }
            </div>
        </div>
    )
}

export default ProjectComponent;