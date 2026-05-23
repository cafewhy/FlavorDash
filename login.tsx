import { useRouter } from "expo-router";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3E2723",
        padding: 20,
      }}
    >
      {/* ICON KOPI & MAKANAN */}
      <Text style={{ fontSize: 60, marginBottom: 10 }}></Text>

      {/* TITLE */}
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "#FFF8E1",
          marginBottom: 5,
        }}
      >
        Cafe Bar Way
      </Text>

      {/* SUBTITLE */}
      <Text
        style={{
          fontSize: 14,
          color: "#D7CCC8",
          marginBottom: 20,
        }}
      >
        Fresh Coffee & Delicious Food
      </Text>

      {/* GAMBAR */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        }}
        style={{
          width: 220,
          height: 220,
          borderRadius: 25,
          marginBottom: 25,
          borderWidth: 3,
          borderColor: "#D7CCC8",
        }}
      />

      {/* EMAIL INPUT */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#BCAAA4"
        style={{
          width: "100%",
          backgroundColor: "#EFEBE9",
          borderWidth: 1,
          borderColor: "#8D6E63",
          padding: 14,
          borderRadius: 15,
          marginBottom: 12,
          color: "#3E2723",
        }}
      />

      {/* PASSWORD INPUT */}
      <TextInput
        placeholder="Sandi"
        placeholderTextColor="#BCAAA4"
        secureTextEntry
        style={{
          width: "100%",
          backgroundColor: "#EFEBE9",
          borderWidth: 1,
          borderColor: "#8D6E63",
          padding: 14,
          borderRadius: 15,
          marginBottom: 20,
          color: "#3E2723",
        }}
      />

      {/* BUTTON LOGIN */}
      <Pressable
        onPress={() => router.replace("/detail")}
        style={{
          backgroundColor: "#6D4C41",
          padding: 16,
          width: "100%",
          borderRadius: 15,
          alignItems: "center",
          elevation: 5,
        }}
      >
        <Text
          style={{
            color: "#FFF8E1",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          ☕ Login
        </Text>
      </Pressable>
    </View>
  );
}
