import { css } from "../../styled-system/css";

type InputWrapperProps = {
	value: string;
	setValue: (value: string) => void;
};
export const InputWrapper = ({ value, setValue }: InputWrapperProps) => {
	return (
		<input
			value={value}
			className={css({
				border: "1px solid black",
				width: "20px",
				textAlign: "center",
			})}
			onKeyDown={(e) => {
				setValue(e.key);
			}}
		/>
	);
};
