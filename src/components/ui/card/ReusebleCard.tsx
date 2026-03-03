import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ReusableUserInfo } from '@/components/ui/userInfo/ReusableUserInfo';

interface RecipeCardProps {
  userName: string;
  userAvatar: string;
  recipeImage: string;
  description: string;
  initialLiked?: boolean;
}

export const RecipeCard = ({
  userName,
  userAvatar,
  recipeImage,
  description,
  initialLiked = false,
}: RecipeCardProps) => {
  const [liked, setLiked] = useState(initialLiked);
  const [likesCount, setLikesCount] = useState(124);

  const handleLike = () => {
    if (liked) {
      setLikesCount((prev) => prev - 1);
    } else {
      setLikesCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <View style={styles.card}>
      <View style={styles.userContainer}>
        <ReusableUserInfo userAvatar={userAvatar} userName={userName} />
      </View>

      <Image
        source={{ uri: recipeImage }}
        style={styles.recipeImage}
        resizeMode="cover"
      />

      <Text style={styles.description}>{description}</Text>

      <View style={styles.likeContainer}>
        <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
          <Text style={[styles.likeIcon, liked && styles.likedIcon]}>
            {liked ? '❤️' : '🤍'}
          </Text>
          <Text style={[styles.likeText, liked && styles.likedText]}>
            {likesCount} {likesCount === 1 ? 'like' : 'likes'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  likeButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  likeContainer: {
    borderTopColor: '#f0f0f0',
    borderTopWidth: 1,
    paddingTop: 12,
  },
  likeIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  likeText: {
    color: '#666',
    fontSize: 14,
  },
  likedIcon: {
    color: '#ff3b30',
  },
  likedText: {
    color: '#ff3b30',
    fontWeight: '500',
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
