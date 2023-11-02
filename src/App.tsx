import { useState } from "react";
import { hstack } from "../styled-system/patterns";
import "./index.css";
import {
  basicKeyboardTimePickerOption,
  makeOptions,
} from "keyboard-time-picker-utils";
import { produce } from "immer";
import { InputWrapper } from "./components/InputWrapper";
import { isNil } from "remeda";

export const App = () => {
  const [HHmm, setHHmm] = useState("10:00");
  const options = makeOptions({
    howMany: 1,
    baseOption: produce(basicKeyboardTimePickerOption, (draft) => {
      draft.move.moveToNextInputOnKeyPress = true;
      draft.step.useStep = true;
      draft.step.timeStep = 15;
    }),
  });
  const option = options[0];
  if (isNil(option)) return null;
  return (
    <div>
      <div className={hstack({ gap: 0, p: 4 })}>
        <div>
          <InputWrapper
            HHmm={HHmm}
            setHHmm={setHHmm}
            type={"HLeft"}
            option={option}
          />
        </div>
        <InputWrapper
          HHmm={HHmm}
          setHHmm={setHHmm}
          type={"HRight"}
          option={option}
        />
        <div>:</div>
        <InputWrapper
          HHmm={HHmm}
          setHHmm={setHHmm}
          type={"MLeft"}
          option={option}
        />
        <InputWrapper
          HHmm={HHmm}
          setHHmm={setHHmm}
          type={"MRight"}
          option={option}
        />
      </div>
    </div>
  );
};
