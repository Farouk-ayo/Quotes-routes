import { Route, useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.development";
import Comments from "../comments/Comments";

const QuotesDetails = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>quote details </h1>
      <p>{params.quotedId}</p>
      <Route path={`/quotes/${params.quotedId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuotesDetails;
