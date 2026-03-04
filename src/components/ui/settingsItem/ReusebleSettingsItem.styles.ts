import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginRight: 12,
    width: 40,
  },
  leftContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  settingItem: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  value: {
    color: '#666',
    fontSize: 14,
  },
});
