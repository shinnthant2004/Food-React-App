import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <h2>navigation</h2>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};
export default Navigation;
