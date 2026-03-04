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
    height: 60,
    lineHeight: 20,
    marginBottom: 12,
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
    height: 60,
    marginBottom: 12,
  },
});
