import React, { Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isLoggedIn, isPathAllowed } from "../../utils/Common";
import Loading from "../../components/Loading";
export default function LogedInOutlet() {
  const { pathname } = useLocation();

  const isAllowed = isPathAllowed(pathname);
  if (isLoggedIn() && isAllowed) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
}
