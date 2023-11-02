import {
  HHmmLRHandler,
  HHmmLRState,
  KeyboardTimePickerOption,
  getValueAndId,
} from "keyboard-time-picker-utils";
import * as O from "fp-ts/Option";
import { css } from "../../styled-system/css";
type InputWrapperProps = {
  HHmm: string;
  setHHmm: (HHmm: string) => void;
  type: HHmmLRState;
  option: KeyboardTimePickerOption;
};
export const InputWrapper = ({
  HHmm,
  setHHmm,
  type,
  option,
}: InputWrapperProps) => {
  const valueAndIdOption = getValueAndId({
    type,
    idList: option.move.idList,
    HHmm,
  });
  if (O.isNone(valueAndIdOption)) return null;
  const { id, value } = valueAndIdOption.value;
  return (
    <input
      className={css({
        textAlign: "center",
        width: "20px",
        border: "1px solid #eee",
        _focus: {
          outline: "none",
          ring: "0",
          border: "none",
          caretColor: "transparent",
          bg: "blue.800",
          color: "blue.50",
        },
      })}
      value={value}
      id={id}
      onChange={(e) => e.preventDefault()}
      onKeyDown={(e) => {
        e.preventDefault();
        const result = HHmmLRHandler({
          input: e.key,
          HHmm,
          id,
          type,
          option,
          shiftKey: e.nativeEvent.shiftKey,
        });
        setHHmm(result);
        //onChange(cleanPatternTime({ time: result }));
      }}
    />
  );
};
