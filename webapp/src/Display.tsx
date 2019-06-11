import * as React from 'react';
import styled from 'styled-components';
import {observer} from 'mobx-react';

const StyledInput = styled.input`
	flex: 1 0 0px;
	width: 0;
	border: 1px solid #ccc;
	margin: 8px 0 0 8px;
	padding: 12px 19px;
	font-family: Lucida Console, Courier, monospace;
	font-size: 26px;
	color: #333;
	background: #abc;
	text-align: right;
	cursor: text;
`;

export interface DisplayProps {
	text: string;
}

@observer
export class Display extends React.Component<DisplayProps, {}> {
	render() {
		return <StyledInput type="text" value={this.props.text} disabled={true} />;
	}
}
