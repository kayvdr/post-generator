import classnames from "classnames";
import html2canvas from "html2canvas";
import React, { FC, RefObject, useContext, useState } from "react";
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

const exportAsImage = async (el: HTMLDivElement | null, state: State) => {
  const canvas =
    el &&
    (await html2canvas(el, {
      width: 1080,
      height: state.size ? 1920 : 1350,
      scale: 1,
    }));

  const image = canvas?.toDataURL("image/png", 1.0);
  image && downloadImage(image, state.template);
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

export const Settings: FC<Props> = ({ elRef }) => {
  const store = useContext(StoreContext);
  const [open, setOpen] = useState(
    document.body.clientWidth > 768 ? true : false
  );

  if (!store) return null;

  const { state, setState } = store;

  return (
    <div
      className={classnames(styles.settings, {
        [styles["settings-open"]]: open,
      })}
    >
      <button className={styles["arrow-button"]} onClick={() => setOpen(!open)}>
        <Arrow
          className={classnames(styles.arrow, {
            [styles["arrow-revert"]]: open,
          })}
        />
      </button>
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
            {state.template === "Link" && (
              <>
                <TextInput
                  title="Title Green"
                  value={state.titleGreen}
                  setValue={(value) =>
                    setState({ ...state, titleGreen: value })
                  }
                />
                <TextInput
                  title="Link"
                  value={state.link}
                  setValue={(value) => setState({ ...state, link: value })}
                />
                <ImageUpload
                  state={state}
                  item="descriptionImage"
                  setState={setState}
                  options={false}
                />
              </>
            )}
            {state.template === "Quiz" && (
              <>
                <EditorInput
                  title="Code"
                  value={state.codeSnippet}
                  setValue={(value) =>
                    setState({ ...state, codeSnippet: value })
                  }
                />
              </>
            )}
            <Checkbox
              label="Show Arrow"
              value={state.showArrow}
              setValue={(value) => setState({ ...state, showArrow: value })}
            />
            <p>General Configuration</p>
            <Checkbox
              label="Size (1080x1920)"
              value={state.size}
              setValue={(value) => setState({ ...state, size: value })}
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
              setState({
                ...state,
                position: { initX: 0, initY: 0, x: 0, y: 0 },
                scale: 1,
              });
              setTimeout(() => {
                exportAsImage(elRef.current, state);
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
