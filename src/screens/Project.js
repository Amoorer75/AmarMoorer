import { useParams, useNavigate  } from "react-router-dom";


const Project = (props) => {
    console.log(props);
    const navigate = useNavigate();

    const { project_id } = useParams();

    const projNumber = parseInt(project_id) - 1;
    const project = props[projNumber];

    const url = (data) => {
        console.log('somthing')

        if( data.url != null ){
           return (
            <div>
                    <a href={data.url} class="projlink" target="_blank">{ data.urltitle }</a>
            </div>
            )

        }

    }

    return (
        <div className="post">
            <div className="hero">
                <img src={project.thumbnail} alt="post banner" />
            </div>
            <div className="content">
                <h3>{project.title}</h3>
                <p>{project.body}</p>
                <br />
                <h3>{project.section1}</h3>
                <ul>
                    <li>{project.feature1}</li>
                    <li>{project.feature2}</li>
                    <li>{project.feature3}</li>
                    <li>{project.feature4}</li>
                </ul>
                <br />
                <h3>{project.section2}</h3>
                {/* <p>Listingpage and homepage on desktop/mobile</p> */}
                <div className='pic'>
                    <div className="figpic">

                       <img src={project.image} />
                    </div>
                    <div className="figpic1" >
                        <img src={project.image2} />
                    </div>
                    <div className="figpic2">
                        <img src={project.image3} />
                    </div>
                </div>
                <br/>
                {url(project)}
                {/* <div>
                    <a href={project.url} class="projlink" target="_blank">{ project.urltitle }</a>
                </div> */}
                <br /> 
                 <br/>

            </div>
            <button onClick={() => navigate(`/projects`)}>
                Return
        </button>
        </div>
    );
};

export default Project;