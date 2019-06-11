import * as React from 'react';
import styled from 'styled-components';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {URLSearchParams} from 'url';
import 'isomorphic-fetch';

import {Display} from './Display';
import {Button} from './Button';
import {Row} from './Row';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

enum Operation {
	ADD = 'add',
	SUBTRACT = 'subtract',
	MULTIPLY = 'multiply',
	DIVIDE = 'divide'
}

@observer
export class App extends React.Component<{}, {}> {
	@observable private displayText: string;
	private accumulator: string;
	private operation?: Operation;
	private newNumber: boolean;

	public constructor(props: Readonly<{}>) {
		super(props);

		this.handleDigit = this.handleDigit.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleSubtract = this.handleSubtract.bind(this);
		this.handleMultiply = this.handleMultiply.bind(this);
		this.handleDivide = this.handleDivide.bind(this);
		this.handleEquals = this.handleEquals.bind(this);

		this.displayText = '0';
		this.accumulator = this.displayText;
		this.operation = undefined;
		this.newNumber = true;
	}

	private handleDigit(digit: string): void {
		if (this.newNumber) {
			this.accumulator = this.displayText;
			this.displayText = '';
			this.newNumber = false;
		}

		if (this.displayText.length < 10) {
			this.displayText += digit;
		}
	}

	private handleAdd(): void {
		this.performOperation();
		this.operation = Operation.ADD;
	}

	private handleSubtract(): void {
		this.performOperation();
		this.operation = Operation.SUBTRACT;
	}

	private handleMultiply(): void {
		this.performOperation();
		this.operation = Operation.MULTIPLY;
	}

	private handleDivide(): void {
		this.performOperation();
		this.operation = Operation.DIVIDE;
	}

	private handleEquals(): void {
		this.performOperation();
	}

	private performOperation(): void {
		if (this.operation) {
			const request = new XMLHttpRequest();
			request.onreadystatechange = () => {
				if (request.readyState == XMLHttpRequest.DONE) {
					if (request.status == 200) {
						const json = JSON.parse(request.responseText);
						this.displayText = (json as any).text as string;
					} else {
						this.displayText = 'Error';
					}
				}
			};

			const formData = new FormData();
			formData.append('a', this.accumulator);
			formData.append('b', this.displayText);

			request.open('POST', `/bff/${this.operation}`, true);
			request.send(formData);
		}

		this.operation = undefined;
		this.newNumber = true;
	}

	public render() {
		return (
			<StyledDiv>
				<Row>
					<Display text={this.displayText} />
				</Row>
				<Row>
					<Button label="7" onClick={this.handleDigit} />
					<Button label="8" onClick={this.handleDigit} />
					<Button label="9" onClick={this.handleDigit} />
					<Button label={String.fromCharCode(247)} onClick={this.handleDivide} />
				</Row>
				<Row>
					<Button label="4" onClick={this.handleDigit} />
					<Button label="5" onClick={this.handleDigit} />
					<Button label="6" onClick={this.handleDigit} />
					<Button label={String.fromCharCode(215)} onClick={this.handleMultiply} />
				</Row>
				<Row>
					<Button label="1" onClick={this.handleDigit} />
					<Button label="2" onClick={this.handleDigit} />
					<Button label="3" onClick={this.handleDigit} />
					<Button label="-" onClick={this.handleSubtract} />
				</Row>
				<Row>
					<Button label="0" onClick={this.handleDigit} />
					<Button label="." onClick={this.handleDigit} />
					<Button label="=" onClick={this.handleEquals} />
					<Button label="+" onClick={this.handleAdd} />
				</Row>
			</StyledDiv>
		);
	}
}
