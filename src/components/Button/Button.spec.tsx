/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { ReactElement } from 'react';
import {
  create as createTestRenderer,
  ReactTestRenderer,
  ReactTestRendererJSON,
} from 'react-test-renderer';
import { ThemeProvider } from '@material-ui/styles';
import ButtonComponent from './Button';
import defaultTheme from '../../theme/default';

type JSONComponent = ReactTestRendererJSON | ReactTestRendererJSON[] | null;

describe('Button', () => {
  const StringChild = 'Click Me';
  const ChildNode = (): ReactElement => {
    return <p>Click Me</p>;
  };

  it('With Jest snapshot, <Button /> component renders with a child node', () => {
    const ButtonTestCase: ReactElement = (
      <ThemeProvider theme={defaultTheme}>
        <ButtonComponent>
          <ChildNode />
        </ButtonComponent>
      </ThemeProvider>
    );

    const createdNode: ReactTestRenderer = createTestRenderer(ButtonTestCase);
    const component: JSONComponent = createdNode.toJSON();

    expect(component).toMatchSnapshot();
  });

  it('With Jest snapshot, Button component renders with a child as string', () => {
    const ButtonTestCase: ReactElement = (
      <ThemeProvider theme={defaultTheme}>
        <ButtonComponent>{StringChild}</ButtonComponent>
      </ThemeProvider>
    );

    const createdNode: ReactTestRenderer = createTestRenderer(ButtonTestCase);
    const component: JSONComponent = createdNode.toJSON();

    expect(component).toMatchSnapshot();
  });
});
