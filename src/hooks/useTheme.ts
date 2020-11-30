import Default from '../theme/default';
import { Theme } from '../theme';
import { ThemeNames } from '../redux/slices/theme';

export default function useTheme(themeName: ThemeNames): Theme {
  switch (themeName) {
    case ThemeNames.Default:
      return Default;
    default:
      return Default;
  }
}
