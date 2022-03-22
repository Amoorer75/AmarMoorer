import { useNavigate } from "react-router-dom";

export default function MultiProjects(props) {
  const navigate = useNavigate();
  return (
    <div className="item" key={props.id}>
      <img src={props.image} alt="Post banner" />
      <div className="modal">
        <h3>{props.title}</h3>
        <button onClick={() => navigate(`/projects/${props.id}`)}>
          Read More
        </button>
      </div>
    </div>
  );
}