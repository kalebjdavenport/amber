import React from "react";

type Props = {
  title: string;
  isSticky: boolean;
};

export const Head = ({
  title = "Welcome to HistoryBoard",
  isSticky = false,
}: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isSticky && <h3>is stucked</h3>}
    </div>
  );
};
