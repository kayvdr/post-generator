import { FC, Ref } from "react";
import { State } from "../types/types";
import { Cover } from "./Cover";
import { Description } from "./Description";
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
    default:
      return null;
  }
};
