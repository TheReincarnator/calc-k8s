import * as React from 'react';
import styled from 'styled-components';
import {observer} from 'mobx-react';

const StyledButton = styled.button`
	flex: 1 0 0px;
	width: 0;
	border: 1px solid #ccc;
	margin: 8px 0 0 8px;
	padding: 12px 0;
	font-family: Lucida Console, Courier, monospace;
	font-size: 26px;
	color: #333;
	background: #ddd;
	cursor: pointer;

	&:hover {
		background: #bbb;
	}
`;

export interface ButtonProps {
	label: string;
	onClick: (label: string) => void;
}

@observer
export class Button extends React.Component<ButtonProps, {}> {
	render() {
		return (
			<StyledButton onClick={() => this.props.onClick(this.props.label)}>
				{this.props.label}
			</StyledButton>
		);
	}
}
