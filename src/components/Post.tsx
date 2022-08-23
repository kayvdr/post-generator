import React, { FC, Ref } from "react";
import { State } from "../types/types";
import { BackCover } from "./BackCover";
import { Cover } from "./Cover";
import { Description } from "./Description";
import { Link } from "./Link";
import { Quiz } from "./Quiz";
import { Snippet } from "./Snippet";
import { Statistic } from "./Statistic";

interface Props {
  elRef: Ref<HTMLDivElement>;
  state: State;
}

export const Post: FC<Props> = ({ elRef, state }) => {
  switch (state.template) {
    case "Cover":
      return <Cover elRef={elRef} state={state} />;
    case "Snippet":
      return <Snippet elRef={elRef} state={state} />;
    case "Description":
      return <Description elRef={elRef} state={state} />;
    case "Statistic":
      return <Statistic elRef={elRef} state={state} />;
    case "Link":
      return <Link elRef={elRef} state={state} />;
    case "Quiz":
      return <Quiz elRef={elRef} state={state} />;
    case "BackCover":
      return <BackCover elRef={elRef} state={state} />;
    default:
      return null;
  }
};
