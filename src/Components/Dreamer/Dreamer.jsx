import React from "react";
import { Link } from "react-router-dom";

function Dreamer({ dreamer, handleDeleteDreamer, user }) {
  return (
    <>
      <main className="dreamersPage">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h1 className="panel-title">{dreamer.name}</h1>
            <h4>{dreamer.occupation}</h4>
          </div>
          <div className="panel-footer Dreamer-action-panel">
            <Link
              className="link btn btn-xs btn-info"
              to={{
                pathname: "/stories",
                state: { dreamer },
              }}
            >
              DETAILS
            </Link>
			{user && (
				<>
            {dreamer.userId === user._id && (
              <>
                &nbsp; | &nbsp;
                <Link
                  className="link btn btn-xs btn-warning"
                  to={{
                    pathname: "/edit",
                    state: { dreamer },
                  }}
                >
                  EDIT
                </Link>
                &nbsp; | &nbsp;
                <button
                  className="btn btn-xs btn-danger margin-left-10"
                  onClick={() => handleDeleteDreamer(dreamer._id)}
                >
                  DELETE
                </button>
              </>
            )}
			</>
			)}

          </div>
        </div>
      </main>
    </>
  );
}

export default Dreamer;
