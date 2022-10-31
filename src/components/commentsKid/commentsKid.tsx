import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { Comment } from "semantic-ui-react";
import { getSubKids } from "../../store/mainStore";
import { convertUnixTime, convertToPlain } from "../../utils/utils";

export function CommentsKid({ parentId, comment, kidsId, trigger }) {
  const { subKids } = useAppSelector((state) => state.mainStore);

  useEffect(() => {
    if (subKids[0] === undefined) {
      //@ts-ignore
      arrKids?.map((id) => dispatch(getSubKids(id)));
    }
  }, [comment]);

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
            </Comment>
          );
        })
      ) : (
        <></>
      )}
    </Comment.Group>
  );
}
