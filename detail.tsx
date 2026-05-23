import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";

import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const foods = [
  {
    id: 1,
    name: "Cappuccino Latte ☕",
    description:
      "Kopi creamy dengan foam lembut dan aroma kopi premium khas cafe.",
    price: 28000,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    id: 2,
    name: "Croissant Butter 🥐",
    description: "Roti croissant renyah dengan butter premium dan rasa lembut.",
    price: 22000,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
  },
  {
    id: 3,
    name: "Burger Beef 🍔",
    description:
      "Burger daging sapi juicy dengan saus spesial ala Cafe Bar Way.",
    price: 45000,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 4,
    name: "Pizza Cheese 🍕",
    description:
      "Pizza hangat dengan topping keju mozzarella dan saus spesial.",
    price: 65000,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    id: 5,
    name: "Chocolate Donut 🍩",
    description: "Donat coklat manis dengan topping premium dan lembut.",
    price: 20000,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },
];

export default function HomeScreen() {
  const [selectedFood, setSelectedFood] = useState<any>(null);

  const formatRupiah = (value: number) => {
    return "Rp " + value.toLocaleString("id-ID");
  };

  const handleSelect = (item: any) => {
    setSelectedFood(item);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    Alert.alert("Logout", "Anda berhasil logout.");
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>☕ Cafe Bar Way</Text>

      <Text style={styles.subHeader}>Fresh Coffee & Delicious Food</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      >
        {foods.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.card,
              selectedFood?.id === item.id && styles.selectedCard,
            ]}
            onPress={() => handleSelect(item)}
            activeOpacity={0.85}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="cover"
            />

            <View style={styles.info}>
              <Text style={styles.title}>{item.name}</Text>

              <Text style={styles.description}>{item.description}</Text>

              <Text style={styles.price}>{formatRupiah(item.price)}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {selectedFood && (
          <View style={styles.summary}>
            <Text style={styles.summaryTitle}>☕ Pesanan Kamu</Text>

            <Text style={styles.summaryText}>Menu: {selectedFood.name}</Text>

            <Text style={styles.summaryText}>
              Harga: {formatRupiah(selectedFood.price)}
            </Text>

            <Text style={styles.successText}>Siap diproses ✨</Text>
          </View>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>☕ Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3E2723",
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF8E1",
    marginTop: 20,
    marginHorizontal: 16,
  },

  subHeader: {
    fontSize: 14,
    color: "#D7CCC8",
    marginHorizontal: 16,
    marginBottom: 15,
  },

  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6D4C41",
    borderRadius: 20,
    padding: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#8D6E63",
    elevation: 5,
  },

  selectedCard: {
    borderColor: "#FFD54F",
    backgroundColor: "#795548",
  },

  image: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 15,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF8E1",
  },

  description: {
    fontSize: 13,
    color: "#EFEBE9",
    marginTop: 4,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFD54F",
    marginTop: 8,
  },

  summary: {
    backgroundColor: "#5D4037",
    borderRadius: 18,
    padding: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#8D6E63",
  },

  summaryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FFF8E1",
  },

  summaryText: {
    fontSize: 16,
    marginBottom: 4,
    color: "#EFEBE9",
  },

  successText: {
    marginTop: 10,
    color: "#FFD54F",
    fontWeight: "bold",
  },

  logoutButton: {
    backgroundColor: "#6D4C41",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 20,
    elevation: 5,
  },

  logoutText: {
    color: "#FFF8E1",
    fontSize: 16,
    fontWeight: "bold",
  },
});
