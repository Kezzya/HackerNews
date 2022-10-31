import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { Comment, Header } from "semantic-ui-react";
import { getComments, getCommentsKid } from "../../store/mainStore";
import { ConvertUnixTime } from "../../components/news/news";
import { CommentsKid } from "../commentsKid/commentsKid";
import { Link } from "react-router-dom";
//To convert HTML comments
export const convertToPlain = (html) => {
  var tempDivElement = document.createElement("div");
  tempDivElement.innerHTML = html;
  return tempDivElement.textContent || tempDivElement.innerText || "";
};

const Comments = ({ commentId }) => {
  const [triggerShowKids, setTriggerShowKids] = useState(false);
  const { isLoading, comments, commentsKid } = useAppSelector(
    (state) => state.mainStore
  );
  const dispatch = useAppDispatch();
  const title = comments[0]?.title;
  const url = comments[0]?.url;
  const date = ConvertUnixTime(comments[0]?.time);
  const by = comments[0]?.by;
  const countComments = comments[0]?.descendants;
  useEffect(() => {
    if (typeof comments[0] === `undefined`) {
      //@ts-ignore
      dispatch(getComments(commentId));
    } else {
      //@ts-ignore
      comments[0]?.kids?.map((kid) => dispatch(getCommentsKid(kid)));
    }
    //@ts-ignore
  }, [comments]);

  return (
    <Comment.Group>
      <Header as="h3" dividing>
        Comments of "{title}" <br></br>
        Url: -
        <a href={url} target="__blank">
          {url}
        </a>
        <br></br>
        Date: {date}
        <br></br>
        Author: {by}
        <br></br>
        Number of comments : {countComments}
        <Link to="/">
          {" "}
          <button style={{ padding: `5px` }}>Back to News</button>
        </Link>
      </Header>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {commentsKid?.map((el, i) => {
            const time = ConvertUnixTime(el.time);
            const oldText = el.text;
            const text = convertToPlain(oldText);
            let trigger = false;
            // if el has kids, then show it
            el.kids?.length > 0 ? (trigger = true) : (trigger = false);

            return (
              <>
                <Comment key={i}>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">{el.by}</Comment.Author>
                    <Comment.Metadata>
                      <div>{time}</div>
                    </Comment.Metadata>
                    <Comment.Text>{text}</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>
                        {trigger ? (
                          <img
                            src="../down-arrow.svg"
                            alt="img-arrow"
                            width="50px"
                            onClick={() => {
                              setTriggerShowKids(!triggerShowKids);
                            }}
                          />
                        ) : (
                          <></>
                        )}
                      </Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
                {trigger ? (
                  <CommentsKid
                    key={el.id}
                    commentId={el.kids}
                    comment={el}
                    trigger={triggerShowKids}
                  />
                ) : (
                  <></>
                )}
              </>
            );
          })}
        </>
      )}
    </Comment.Group>
  );
};

export default Comments;
