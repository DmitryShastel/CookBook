export const GetTabIconName = (routeName: string, isFocused: boolean) => {
  switch (routeName) {
    case 'Main':
      return isFocused ? 'home' : 'home-outline';
    case 'Settings':
      return isFocused ? 'settings' : 'settings-outline';
    case 'Profile':
      return isFocused ? 'person' : 'person-outline';
    default:
      return 'home-outline';
  }
};
