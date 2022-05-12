import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div className="text-center">
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Loader;