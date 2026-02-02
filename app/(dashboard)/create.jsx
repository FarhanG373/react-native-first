import { StyleSheet } from 'react-native'
import React, {useEffect} from 'react';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import { useUser } from "../../hooks/useUser";
import { useRouter } from "expo-router";
const create = () => {
  const { user } = useUser();
  const router = useRouter(); 

  useEffect(() => {
    if (!user) {
      router.replace("/LogIn");
    }
  }, [user]);

  return (
    <ThemedView style={styles.container}>
      <ThemedText>create</ThemedText>
    </ThemedView>
  )
}

export default create

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})