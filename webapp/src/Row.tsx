import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	display: inline-flex;
	width: 300px;
`;

export class Row extends React.Component<{}, {}> {
	render() {
		return <StyledDiv>{this.props.children}</StyledDiv>;
	}
}
