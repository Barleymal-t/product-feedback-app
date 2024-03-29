import { Bottom, Card, Cat, Comments, H3 } from "./components_styles";
import { UpVote } from "./Button";
import comment from "/assets/shared/icon-comments.svg";
import { Status } from "../pages/page_styles";
import { useNavigate } from "react-router-dom";

const RoadmapCard = ({ ...suggestion }) => {
  const navigate = useNavigate();
  const { id, title, description, category, status, upvotes,upvoted } = suggestion;
  return (
    <Card>
      <Status>
        <div className="">
          <div>
            <li>
              <div className="">
                <div className={"dot" + ` ${status}`}></div>
                {status}
              </div>
            </li>
          </div>
        </div>
      </Status>
      <H3 onClick={() => navigate(`/suggestion/${id}`)}>{title}</H3>
      <p>{description}</p>
      <div className="category">
        <Cat>{category}</Cat>
      </div>
      <Bottom>
        <Comments>
          <img src={comment} alt="comment" />
          <p>{suggestion["comments"]?.length || 0}</p>
        </Comments>
        <UpVote value={upvotes} id={id} upvoted={upvoted} />
      </Bottom>
    </Card>
  );
};

export default RoadmapCard;
