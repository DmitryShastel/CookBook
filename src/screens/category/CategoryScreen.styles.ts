import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    elevation: 4,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardContent: {
    flex: 1,
    paddingRight: 12,
    paddingVertical: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardImage: {
    borderRadius: 12,
    height: 100,
    margin: 12,
    width: 100,
  },
  categoryDescription: {
    color: '#666',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  categoryName: {
    color: '#1a1a1a',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  container: {
    backgroundColor: '#f8f9fa',
    flex: 1,
  },
  header: {
    backgroundColor: '#f8f9fa',
    paddingBottom: 15,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerSubtitle: {
    color: '#666',
    fontSize: 16,
  },
  headerTitle: {
    color: '#1a1a1a',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  viewRecipeText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
});
