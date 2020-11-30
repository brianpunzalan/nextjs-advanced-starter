import {
  changeThemeActionCreator,
  ChangeThemePayload,
  ThemeNames,
} from './theme';

describe('/src/redux/slices/theme.changeThemeActionCreator', () => {
  it('should return action obect once called', () => {
    const payload: ChangeThemePayload = {
      name: ThemeNames.Default,
    };
    const action = changeThemeActionCreator(payload);

    expect(action.payload).toBe(payload);
    expect(action.type).toBe('theme/changeTheme');
  });
});
