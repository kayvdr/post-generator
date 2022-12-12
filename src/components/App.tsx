import classnames from "classnames";
import React, { createContext, FC, useEffect, useRef, useState } from "react";
import { State, StateContext } from "../types/types";
import styles from "./App.module.css";
import { Post } from "./Post";
import { Settings } from "./Settings";

export const StoreContext = createContext<StateContext | null>(null);

const App: FC = () => {
  const exportRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>({
    scale: 0.3,
    size: false,
    position: { initX: null, initY: null, x: 0, y: 0 },
    template: "Cover",
    title: undefined,
    titleGreen: undefined,
    subtitle: undefined,
    description: undefined,
    descriptionImage: undefined,
    codeHeader: undefined,
    codeSnippet: undefined,
    codeSnippetCenter: false,
    link: undefined,
    image: undefined,
    imageWidth: 750,
    imagePositionTop: undefined,
    imagePositionLeft: undefined,
    showArrow: true,
    statistic: undefined,
  });

  useEffect(() => {
    state.template === "Quiz"
      ? setState({ ...state, size: true })
      : setState({ ...state, size: false });
  }, [state.template]);

  return (
    <StoreContext.Provider value={{ state, setState }}>
      <div className={styles.container}>
        <Settings elRef={exportRef} state={state} setState={setState} />
        <div
          className={classnames(styles["post-container"], {
            [styles["post-full-container"]]: state.size,
          })}
          onWheel={(event) => {
            const isNegative = event.nativeEvent.deltaY < 0;

            isNegative &&
              state.scale > 0.1 &&
              setState({
                ...state,
                scale: state.scale - 0.1,
              });

            !isNegative &&
              state.scale < 1 &&
              setState({
                ...state,
                scale: state.scale + 0.1,
              });
          }}
          onDragStart={(e) => {
            e.dataTransfer.setDragImage(document.createElement("img"), 0, 0);
            if (state.position.initX && state.position.initY) return;

            setState({
              ...state,
              position: {
                ...state.position,
                initX: e.clientX,
                initY: e.clientY,
              },
            });
          }}
          onDrag={(e) => {
            if (e.clientX === 0 && e.clientY === 0) return;

            setState({
              ...state,
              position: {
                ...state.position,
                x: e.clientX - (state.position?.initX ?? 0),
                y: e.clientY - (state.position?.initY ?? 0),
              },
            });
          }}
          onTouchStart={(e) => {
            if (state.position.initX && state.position.initY) return;
            setState({
              ...state,
              position: {
                ...state.position,
                initX: e.touches[0]?.clientX ?? null,
                initY: e.touches[0]?.clientY ?? null,
              },
            });
          }}
          onTouchMove={(e) => {
            if (
              !e.touches[0] ||
              (e.touches[0]?.clientX === 0 && e.touches[0]?.clientY === 0)
            )
              return;

            setState({
              ...state,
              position: {
                ...state.position,
                x: e.touches[0].clientX - (state.position?.initX ?? 0),
                y: e.touches[0].clientY - (state.position?.initY ?? 0),
              },
            });
          }}
          draggable={true}
        >
          <Post elRef={exportRef} state={state} />
        </div>
      </div>
    </StoreContext.Provider>
  );
};

export default App;
