import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  description: {
    color: '#666',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
    marginHorizontal: 0,
    paddingHorizontal: 0,
  },
  recipeImage: {
    borderRadius: 8,
    height: 200,
    marginBottom: 12,
    width: '100%',
  },
  userContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 12,
  },
});
