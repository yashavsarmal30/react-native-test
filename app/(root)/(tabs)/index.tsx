import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import icons from "@/constants/icons";

import Search from "@/components/Search";
import Filters from "@/components/Filters";
import NoResults from "@/components/NoResults";
import { Card, FeaturedCard } from "@/components/Cards";

import { useFetch } from "@/lib/useFetch";
import { useGlobalContext } from "@/lib/global-provider";
import { getLatestProperties, getProperties } from "@/lib/api";

export default function Home() {
  const { user } = useGlobalContext();
  const [greeting, setGreeting] = useState("Hello");
  const [emoji, setEmoji] = useState("😊");
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const { data: latestProperties, loading: latestPropertiesLoading } =
    useFetch({
      fn: getLatestProperties,
    });

  const {
    data: properties,
    refetch,
    loading,
  } = useFetch({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    },
    skip: true,
  });

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 5) {
      setGreeting("Still up?");
    } else if (hour >= 5 && hour < 8) {
      setGreeting("Good Early Morning");
    } else if (hour >= 8 && hour < 12) {
      setGreeting("Good Morning");
    } else if (hour >= 12 && hour < 16) {
      setGreeting("Good Afternoon");
    } else if (hour >= 16 && hour < 20) {
      setGreeting("Good Evening");
    } else if (hour >= 20 && hour < 23) {
      setGreeting("Relaxing Tonight?");
    } else {
      setGreeting("Late Night Hustle?");
    }

    // Emoji list
    const emojiList = [
      "🌟", "🌞", "🌜", "☕", "🍂", "✨", "🎉", "🍕",
      "📚", "🔥", "🌈", "💡", "😎", "🌻", "🧘‍♂️",
      "🎶", "🌙", "🚀", "🍩", "💻", "🌵", "🕊️", "🐾"
    ];
    setEmoji(emojiList[hour % emojiList.length]); // Rotate emojis every hour
  }, []);

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    });
  }, [params.filter, params.query]);

  const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  return (
    <SafeAreaView className="h-full bg-white">
      <FlatList
        data={properties}
        numColumns={2}
        renderItem={({ item }: { item: any }) => (
          <Card item={item} onPress={() => handleCardPress(item.$id)} />
        )}
        keyExtractor={(item: any) => item.$id}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size="large" className="text-primary-300 mt-5" />
          ) : (
            <NoResults />
          )
        }
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row">
                <TouchableOpacity
                  onPress={() => router.push("/(root)/(tabs)/profile")}
                >
                  <Image
                    source={{ uri: user?.avatar }}
                    className="size-12 rounded-full"
                  />
                </TouchableOpacity>

                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    {greeting} {emoji}
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>

            <Search />

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              {latestPropertiesLoading ? (
                <ActivityIndicator size="large" className="text-primary-300" />
              ) : !latestProperties || latestProperties.length === 0 ? (
                <NoResults />
              ) : (
                <FlatList
                  data={latestProperties}
                  renderItem={({ item }: { item: any }) => (
                    <FeaturedCard
                      item={item}
                      onPress={() => handleCardPress(item.$id)}
                    />
                  )}
                  keyExtractor={(item: any) => item.$id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerClassName="flex gap-5 mt-5"
                />
              )}
            </View>

            <View className="mt-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Our Recommendation
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              <Filters />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
