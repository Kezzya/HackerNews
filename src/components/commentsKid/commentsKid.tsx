import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { Comment, CommentContent, CommentGroup } from "semantic-ui-react";
import { getSubKids } from "../../store/mainStore";
import { convertUnixTime, convertToPlain } from "../../utils/utils";

export function CommentsKid({ parentId, comment, kidsId, trigger }) {
  const { subKids } = useAppSelector((state) => state.mainStore);

  useEffect(() => {
    if (subKids[0] === undefined) {
      //@ts-ignore
      arrKids?.map((id) => dispatch(getSubKids(id)));
    }
  }, []);

  const dispatch = useAppDispatch();
  const GetOnlyParentKids = (kidsId: Array<Number>): Array<Number> =>
    comment?.kids?.filter((el, i) => el === kidsId[i]);
  const arrKids = GetOnlyParentKids(kidsId);

  if (comment?.kids.includes(kidsId)) return <></>;

  return (
    <Comment.Group>
      {trigger ? (
        subKids?.map((el) => {
          if (el.parent !== parentId) {
            return <></>;
          }

          return (
            <Comment key={el.id}>
              <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
              <Comment.Content>
                <Comment.Author as="a">{el.by}</Comment.Author>
                <Comment.Metadata>
                  <div>{convertUnixTime(el.time)}</div>
                </Comment.Metadata>
                <Comment.Text>{convertToPlain(el.text)}</Comment.Text>
              </Comment.Content>

              {!el.kids ? (
                <></>
              ) : (
                <>
                  {el.kids.map((el) => (
                    <GenerateKids id={el} key={el.id} />
                  ))}
                </>
              )}
            </Comment>
          );
        })
      ) : (
        <></>
      )}
    </Comment.Group>
  );
}
const fetchData = async (id) => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  const data = res.json();
  return data;
};
const GenerateKids = (el) => {
  const [data, setData] = useState({
    by: "",
    id: 0,
    kids: [],
    parent: 0,
    time: 0,
    text: "",
    type: "",
  });
  useEffect(() => {
    fetchData(el.id).then((el) => setData(el));
  }, []);

  return (
    <CommentGroup>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
      <Comment>
        <CommentContent>
          <Comment.Author as="a">{data?.by}</Comment.Author>
          <Comment.Metadata>
            <div>{convertUnixTime(data.time)}</div>
          </Comment.Metadata>
          <Comment.Text>{convertToPlain(data.text)}</Comment.Text>
        </CommentContent>
      </Comment>
      {/* {!data.kids ? <>nety</> : <GenerateKids id={...} />} */}
    </CommentGroup>
  );
};
