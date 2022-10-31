import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { Comment } from "semantic-ui-react";
import { getSubKids } from "../../store/mainStore";
import { convertUnixTime, convertToPlain } from "../../utils/utils";

//To convert HTML comments
export function CommentsKid({ comment, commentId, trigger }) {
  const { subKids } = useAppSelector((state) => state.mainStore);
  const dispatch = useAppDispatch();

  const GetOnlyParentKids = (kidIds: Array<Number>): Array<Number> =>
    comment?.kids?.filter((el, i) => el === kidIds[i]);
  useEffect(() => {
    const arrKids = GetOnlyParentKids(commentId);
    console.log(subKids[0]);
    if (subKids[0] === undefined) {
      //@ts-ignore
      arrKids?.map((id) => dispatch(getSubKids(id)));
    }
  }, []);
  return <Comment.Group>{trigger ? <GenerateKids /> : <></>}</Comment.Group>;
}
const GenerateKids = () => {
  const { isLoading, subKids } = useAppSelector((state) => state.mainStore);
  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : (
        subKids?.map((el, i) => {
          return (
            <Comment key={i}>
              <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
              <Comment.Content>
                <Comment.Author as="a">{el.by}</Comment.Author>
                <Comment.Metadata>
                  <div>{convertUnixTime(el.time)}</div>
                </Comment.Metadata>
                <Comment.Text>{convertToPlain(el.text)}</Comment.Text>
              </Comment.Content>
            </Comment>
          );
        })
      )}
    </>
  );
};
