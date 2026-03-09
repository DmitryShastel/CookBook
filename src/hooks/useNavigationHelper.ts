import { useNavigation } from '@react-navigation/native/src';

export const useNavigationHelper = () => {
  const navigation = useNavigation();

  const getBack = () => {
    navigation.goBack();
  };

  return {
    getBack,
  };
};
