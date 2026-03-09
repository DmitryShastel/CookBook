import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    padding: 16,
  },
  description: {
    color: '#666',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  ingredientAmount: {
    color: '#666',
    fontSize: 14,
  },
  ingredientItem: {
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  ingredientName: {
    color: '#333',
    fontSize: 14,
  },
  ingredientsContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    marginBottom: 20,
    padding: 16,
  },
  instructions: {
    color: '#666',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  notFoundContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  notFoundText: {
    color: '#999',
    fontSize: 16,
    textAlign: 'center',
  },
  recipeImage: {
    borderRadius: 12,
    height: 250,
    marginBottom: 16,
    width: '100%',
  },
  sectionTitle: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    color: '#999',
    fontSize: 12,
    marginTop: 4,
  },
  statValue: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    padding: 16,
  },
  title: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userName: {
    color: '#666',
    fontSize: 16,
    marginBottom: 16,
  },
});
