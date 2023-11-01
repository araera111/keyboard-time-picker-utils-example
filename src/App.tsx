import { useState } from "react";
import { css } from "../styled-system/css";
import { hstack } from "../styled-system/patterns";
import "./index.css";

export const App = () => {
  const [HHmm, setHHmm] = useState("10:00");
  return (
    <div>
      <div className={hstack({ gap: 2 })}>
        <input
          className={
            "border w-4 text-center text-black font-bold text-sm focus:outline-none focus:ring-0 focus:border-none focus:ring-transparent focus:caret-transparent focus:bg-blue-800 focus:text-blue-50"
          }
          value={HHmm}
          id={id}
          onChange={(e) => e.preventDefault()}
          onKeyDown={(e) => {
            e.preventDefault();
            const result = HHmmLRHandler({
              input: e.key,
              HHmm,
              id,
              type: "",
              option,
              shiftKey: e.nativeEvent.shiftKey,
            });
            setHHmm(result);
            onChange(cleanPatternTime({ time: result }));
          }}
        />
        <div>1</div>
        <div>:</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
};
