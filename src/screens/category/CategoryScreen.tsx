import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from '@/screens/category/CategoryScreen.styles';
import { Category, getCategories } from '@/shared/api/axios-instance';
import { useNavigation } from '@react-navigation/native';
import { RecipeListNavigationProp } from '@/navigation/type';

export const CategoryScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigation = useNavigation<RecipeListNavigationProp>();
  const handleCategoryPress = (categoryTitle: string) => {
    navigation.navigate('RecipeList', { categoryTitle });
  };
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  const renderCategoryCard = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() => handleCategoryPress(item.strCategory)}
    >
      <Image
        source={{ uri: item.strCategoryThumb }}
        style={styles.cardImage}
        resizeMode="cover"
      />

      <View style={styles.cardContent}>
        <Text style={styles.categoryName}>{item.strCategory}</Text>
        <Text style={styles.categoryDescription} numberOfLines={2}>
          {item.strCategoryDescription}
        </Text>

        <View style={styles.cardFooter}>
          <Text style={styles.viewRecipeText}>View Recipes →</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Categories</Text>
      <Text style={styles.headerSubtitle}>
        Explore {categories.length} delicious categories
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryCard as ListRenderItem<Category>}
        keyExtractor={(item: Category) => item.idCategory}
        ListHeaderComponent={renderHeader}
      />
    </SafeAreaView>
  );
};
