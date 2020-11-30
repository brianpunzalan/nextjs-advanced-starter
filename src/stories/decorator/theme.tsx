import React, { ReactElement } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Story } from '@storybook/react/types-6-0';
import { Theme } from '../../theme';

export default (theme: Theme) => (RenderStory: Story): ReactElement => (
  <ThemeProvider theme={theme}>
    <RenderStory />
  </ThemeProvider>
);
