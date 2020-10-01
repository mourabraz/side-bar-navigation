import React from "react";
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from "react-router-dom";

import { useAuth } from "../hooks/auth";

import PublicLayout from "../pages/_layouts/public";
import PrivateLayout from "../pages/_layouts/private";

interface IRouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const isLoggedIn = !!user?.name;

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isLoggedIn) {
          return (
            <PrivateLayout>
              <Component />
            </PrivateLayout>
          );
        }

        if (!isLoggedIn && isPrivate) {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          );
        }

        return (
          <PublicLayout>
            <Component />
          </PublicLayout>
        );
      }}
    />
  );
};

export default Route;
