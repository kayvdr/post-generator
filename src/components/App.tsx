import React, { createContext, FC, useRef, useState } from "react";
import { State } from "../types/types";
import styles from "./App.module.css";
import { Post } from "./Post";
import { Settings } from "./Settings";

export const StoreContext = createContext<{
  state: State;
  setState: (value: State) => void;
} | null>(null);

const App: FC = () => {
  const exportRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>({
    scale: 0.5,
    template: "Cover",
    title: undefined,
    titleGreen: undefined,
    subtitle: undefined,
    description: undefined,
    descriptionImage: undefined,
    codeHeader: undefined,
    codeSnippet: undefined,
    codeSnippetCenter: false,
    image: undefined,
    imageWidth: 750,
    imagePositionTop: 0,
    imagePositionLeft: 0,
    showBar: true,
    showArrow: true,
    statistic: undefined,
  });

  return (
    <StoreContext.Provider value={{ state, setState }}>
      <div className={styles.container}>
        <Settings elRef={exportRef} state={state} setState={setState} />
        <div className={styles["post-container"]}>
          <Post elRef={exportRef} state={state} />
        </div>
      </div>
    </StoreContext.Provider>
  );
};

export default App;
