export interface Recipe {
  id: string;
  userName: string;
  userAvatar: string;
  recipeImage: string;
  description: string;
  likesCount?: number;
  isLiked?: boolean;
}
