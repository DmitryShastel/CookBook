import { TabIcons } from '@/constants/TabIcons';

export const GetTabIconName = (routeName: string, isFocused: boolean) => {
  switch (routeName) {
    case TabIcons.main:
      return isFocused ? 'home' : 'home-outline';
    case TabIcons.settings:
      return isFocused ? 'settings' : 'settings-outline';
    case TabIcons.profile:
      return isFocused ? 'person' : 'person-outline';
    default:
      return 'home-outline';
  }
};
