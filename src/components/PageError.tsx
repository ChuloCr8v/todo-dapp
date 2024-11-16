import { Button } from "antd";
import { useEffect } from "react";
import { FallbackProps } from "react-error-boundary";
import { useNavigate, useRouteError } from "react-router-dom";

function PageErrorContent(props: {
  message: string;
  action: string;
  onClick: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-4 text-lg bg-grey-200">
      <h1 className="font-bold">{props.message}</h1>

      <Button
        size="large"
        className="font-bold"
        type="primary"
        onClick={props.onClick}
      >
        {props.action}
      </Button>
    </div>
  );
}

export default function PageError(props: Partial<FallbackProps>) {
  const navigate = useNavigate();
  const routeError = useRouteError();
  const error = props.error ?? routeError;
  useEffect(() => console.error(error), [error]);

  return (
    <PageErrorContent
      message="Page not found"
      action="Go Home"
      onClick={() => navigate("/", { replace: true })}
    />
  );
}
