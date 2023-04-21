import git from "../../../assets/img/icon/githubProject.webp"

const OneProjectComponent = ({ data }) => {

    const { image, title, desc, tags, github, live } = data

    return (
        <div className="product p-5">
            <a href={live} target="_blank">
                <img className="prImg" src={image} alt="" />
            </a>

            <h2 className="title">{title}</h2>

            <p className="desc">{desc}</p>
            <div className="blockTags">
                <div className=" d-flex flex-wrap gap-3">
                    {
                        tags.map((el, index) => {
                            return (
                                <div key={index} className="tags p-2">{el}</div>
                            )
                        })
                    }
                </div>
            </div>
            <a href={github} target="_blank" className="git"><img src={git} /></a>
        </div>
    )
}

export default OneProjectComponent;