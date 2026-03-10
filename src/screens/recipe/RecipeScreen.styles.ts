import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  category: {
    color: '#666',
    fontSize: 16,
    marginBottom: 20,
  },
  centerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    padding: 16,
  },
  ingredientAmount: {
    color: '#666',
    fontSize: 16,
    textAlign: 'right',
  },
  ingredientItem: {
    borderBottomColor: '#e1e4e8',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  ingredientName: {
    color: '#1a1a1a',
    flex: 1,
    fontSize: 16,
  },
  ingredientsContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    marginBottom: 24,
    padding: 16,
  },
  instructions: {
    color: '#333',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  linkButton: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
    padding: 12,
  },
  linkText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
  linksContainer: {
    gap: 12,
    marginBottom: 30,
    marginTop: 16,
  },
  notFoundContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  notFoundText: {
    color: '#ff3b30',
    fontSize: 18,
    textAlign: 'center',
  },
  recipeImage: {
    height: 300,
    resizeMode: 'cover',
    width: '100%',
  },
  sectionTitle: {
    color: '#1a1a1a',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
  statValue: {
    color: '#1a1a1a',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statsContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
    padding: 16,
  },
  title: {
    color: '#1a1a1a',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  youtubeButton: {
    backgroundColor: '#fff0f0',
  },
  youtubeText: {
    color: '#FF0000',
  },
});
