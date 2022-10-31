import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { Comment, Header } from "semantic-ui-react";
import {
  getComments,
  getCommentsKid,
  cleanAllComments,
} from "../../store/mainStore";
import { convertUnixTime, convertToPlain } from "../../utils/utils";
import { CommentsKid } from "../commentsKid/commentsKid";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Comments = ({ commentId }) => {
  const [triggerShowKids, setTriggerShowKids] = useState(false);
  const { isLoading, comments, commentsKid } = useAppSelector(
    (state) => state.mainStore
  );
  const dispatch = useAppDispatch();
  const title = comments[0]?.title;
  const url = comments[0]?.url;
  const date = convertUnixTime(comments[0]?.time);
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
          <Button>Back to News</Button>
        </Link>
        <Button onClick={() => dispatch(cleanAllComments())}>
          Reload the comments
        </Button>
      </Header>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {commentsKid?.map((el, i) => {
            const time = convertUnixTime(el.time);
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
