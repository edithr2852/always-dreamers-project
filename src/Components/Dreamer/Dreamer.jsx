import React from "react";
import { Link } from "react-router-dom";
import "../../index.scss";

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
            ><button className="btn btn-3">
              DETAILS
              </button>
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
                ><button className="btn btn-3">
                  EDIT
                  </button>
                </Link>
                &nbsp; | &nbsp;
                <div class="container">
                <button className="btn btn-3"
                  onClick={() => handleDeleteDreamer(dreamer._id)}
                >
                  DELETE
                </button>
                </div>
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
