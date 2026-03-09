import { useNavigation } from '@react-navigation/native';

export const useNavigationHelper = () => {
  const navigation = useNavigation();

  const getBack = () => {
    navigation.goBack();
  };

  return {
    getBack,
  };
};
