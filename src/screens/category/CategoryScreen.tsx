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
import { useNavigation } from '@react-navigation/native';
import { RecipeListNavigationProp } from '@/navigation/type';
import { useCategoryQuery } from '@/features/recipeList/api/RecipeListQuery';
import { Category } from '@/features/recipeList/api/types/RecipeList';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { useTranslation } from 'react-i18next';

export const CategoryScreen = () => {
  const { data: categories } = useCategoryQuery();
  const navigation = useNavigation<RecipeListNavigationProp>();
  const { colors, theme } = useThemeToggle();
  const handleCategoryPress = (categoryTitle: string) => {
    navigation.navigate('RecipeList', { categoryTitle });
  };

  const { t } = useTranslation();

  const renderCategoryCard = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: colors.card.background,

          borderColor: colors.card.border,
          borderWidth: theme === 'dark' ? 1 : 0,
        },
      ]}
      activeOpacity={0.7}
      onPress={() => handleCategoryPress(item.strCategory)}
    >
      <Image
        source={{ uri: item.strCategoryThumb }}
        style={styles.cardImage}
        resizeMode="cover"
      />

      <View style={styles.cardContent}>
        <Text style={[styles.categoryName, { color: colors.text.primary }]}>
          {t(`CategoryScreen.categories.${item.strCategory}`)}
        </Text>
        <Text
          style={[styles.categoryDescription, { color: colors.text.primary }]}
          numberOfLines={2}
        >
          {t(`CategoryScreen.categories.${item.strCategory}Description`)}
        </Text>

        <View style={styles.cardFooter}>
          <Text style={[styles.viewRecipeText, { color: colors.primary.main }]}>
            {t('CategoryScreen.viewRecipes')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View
      style={[styles.header, { backgroundColor: colors.background.primary }]}
    >
      <Text style={[styles.headerTitle, { color: colors.text.primary }]}>
        {t('CategoryScreen.title')}
      </Text>
      <Text style={[styles.headerSubtitle, { color: colors.text.secondary }]}>
        {t('CategoryScreen.description', { count: categories?.length || 0 })}
      </Text>
    </View>
  );
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background.primary }]}
    >
      <FlatList
        data={categories}
        renderItem={renderCategoryCard as ListRenderItem<Category>}
        keyExtractor={(item: Category) => item.idCategory}
        ListHeaderComponent={renderHeader}
      />
    </SafeAreaView>
  );
};
