import themeDecorator from '../src/stories/decorator/theme';
import DefaultTheme from '../src/theme/default';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  decorators: [themeDecorator(DefaultTheme)],
};
