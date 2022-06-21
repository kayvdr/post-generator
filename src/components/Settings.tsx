import classnames from "classnames";
import html2canvas from "html2canvas";
import React, { FC, RefObject, useContext, useEffect, useState } from "react";
import { State } from "../types/types";
import { StoreContext } from "./App";
import { Checkbox } from "./Checkbox";
import { Arrow } from "./dist/svg";
import { EditorInput } from "./EditorInput";
import { ImageUpload } from "./ImageUpload";
import styles from "./Settings.module.css";
import { TemplateSelect } from "./TemplateSelect";
import { TextInput } from "./TextInput";

interface Props {
  elRef: RefObject<HTMLDivElement>;
  state: State;
  setState: (value: State) => void;
}

const exportAsImage = async (
  el: HTMLDivElement | null,
  imageFileName: string
) => {
  const canvas =
    el &&
    (await html2canvas(el, {
      width: 1080,
      height: 1350,
      scale: 1,
    }));

  const image = canvas?.toDataURL("image/png", 1.0);
  image && downloadImage(image, imageFileName);
};

const downloadImage = (blob: string, fileName: string) => {
  const fakeLink = window.document.createElement("a");
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};

let prevHeight = document.documentElement.clientHeight;

export const Settings: FC<Props> = ({ elRef }) => {
  const store = useContext(StoreContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      if (prevHeight !== document.documentElement.clientHeight) return;
      const mobile = document.documentElement.clientWidth >= 768;
      setOpen(mobile);
      prevHeight = document.documentElement.clientHeight;
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!store) return null;

  const { state, setState } = store;

  return (
    <div
      className={classnames(styles.settings, {
        [styles["settings-open"]]: open,
      })}
    >
      {/* <div className={styles["arrow-container"]}> */}
      <button className={styles["arrow-button"]} onClick={() => setOpen(!open)}>
        <Arrow
          className={classnames(styles.arrow, {
            [styles["arrow-revert"]]: open,
          })}
        />
      </button>
      {/* </div> */}
      {open && (
        <>
          <div>
            <TemplateSelect
              value={state.template}
              setValue={(value) => setState({ ...state, template: value })}
            />
            {state.template === "Cover" && (
              <>
                <TextInput
                  title="Title Green"
                  value={state.titleGreen}
                  setValue={(value) =>
                    setState({ ...state, titleGreen: value })
                  }
                />
                <TextInput
                  title="Title"
                  value={state.title}
                  setValue={(value) => setState({ ...state, title: value })}
                />
                <TextInput
                  title="Subtitle"
                  value={state.subtitle}
                  setValue={(value) => setState({ ...state, subtitle: value })}
                />
                <ImageUpload state={state} item="image" setState={setState} />
              </>
            )}
            {state.template === "Snippet" && (
              <>
                <TextInput
                  title="Title Green"
                  value={state.titleGreen}
                  setValue={(value) =>
                    setState({ ...state, titleGreen: value })
                  }
                />
                <EditorInput
                  title="Description"
                  value={state.description}
                  setValue={(value) =>
                    setState({ ...state, description: value })
                  }
                />
                <TextInput
                  title="Code Header"
                  value={state.codeHeader}
                  setValue={(value) =>
                    setState({ ...state, codeHeader: value })
                  }
                />
                <EditorInput
                  title="Code"
                  value={state.codeSnippet}
                  setValue={(value) =>
                    setState({ ...state, codeSnippet: value })
                  }
                />
                <Checkbox
                  label="Center Snippet"
                  value={state.codeSnippetCenter}
                  setValue={(value) =>
                    setState({ ...state, codeSnippetCenter: value })
                  }
                />
              </>
            )}
            {state.template === "Description" && (
              <>
                <TextInput
                  title="Title Green"
                  value={state.titleGreen}
                  setValue={(value) =>
                    setState({ ...state, titleGreen: value })
                  }
                />
                <EditorInput
                  title="Description"
                  value={state.description}
                  setValue={(value) =>
                    setState({ ...state, description: value })
                  }
                />
                <ImageUpload
                  state={state}
                  item="descriptionImage"
                  setState={setState}
                />
              </>
            )}
            {state.template === "Statistic" && (
              <>
                <TextInput
                  title="Version"
                  value={state.statistic?.version}
                  setValue={(value) =>
                    setState({
                      ...state,
                      statistic: { ...state.statistic, version: value },
                    })
                  }
                />
                <TextInput
                  title="Size"
                  value={state.statistic?.size}
                  setValue={(value) =>
                    setState({
                      ...state,
                      statistic: { ...state.statistic, size: value },
                    })
                  }
                />
                <TextInput
                  title="Stars"
                  value={state.statistic?.stars}
                  setValue={(value) =>
                    setState({
                      ...state,
                      statistic: { ...state.statistic, stars: value },
                    })
                  }
                />
                <TextInput
                  title="Downloads"
                  value={state.statistic?.downloads}
                  setValue={(value) =>
                    setState({
                      ...state,
                      statistic: { ...state.statistic, downloads: value },
                    })
                  }
                />
              </>
            )}
            <Checkbox
              label="Show Bar"
              value={state.showBar}
              setValue={(value) => setState({ ...state, showBar: value })}
            />
            <Checkbox
              label="Show Arrow"
              value={state.showArrow}
              setValue={(value) => setState({ ...state, showArrow: value })}
            />
            <div>
              <input
                type="range"
                min="0"
                max="1"
                value={state.scale}
                onChange={(e) => {
                  setState({ ...state, scale: +e.target.value });
                }}
                step="0.02"
              />
            </div>
          </div>
          <button
            className={styles["download-button"]}
            onClick={() => {
              setState({ ...state, scale: 1 });
              setTimeout(() => {
                exportAsImage(elRef.current, state.template);
              }, 500);
              setTimeout(() => {
                setState({ ...state, scale: 0.5 });
              }, 1000);
            }}
          >
            Download Post
          </button>
        </>
      )}
    </div>
  );
};
