import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Save } from 'lucide-react-native';
import { useUser } from '@/contexts/UserContext';
import { COLORS, AVATARS, CLASSES } from '@/utils/constants';

export default function EditProfileScreen() {
  const router = useRouter();
  const { user, updateUser } = useUser();
  const [name, setName] = useState(user.name);
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatar);
  const [selectedClass, setSelectedClass] = useState(user.class);
  const [school, setSchool] = useState(user.school);

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert('Erreur', 'Veuillez entrer un nom');
      return;
    }

    await updateUser({
      name: name.trim(),
      avatar: selectedAvatar,
      class: selectedClass,
      school: school.trim(),
    });

    Alert.alert('Succès', 'Profil mis à jour !', [
      {
        text: 'OK',
        onPress: () => router.back(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color={COLORS.darkGray} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Modifier le profil</Text>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Save size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Avatar</Text>
          <View style={styles.avatarsGrid}>
            {AVATARS.map((avatar) => (
              <TouchableOpacity
                key={avatar}
                style={[
                  styles.avatarButton,
                  selectedAvatar === avatar && styles.avatarButtonSelected,
                ]}
                onPress={() => setSelectedAvatar(avatar)}
              >
                <Text style={styles.avatarEmoji}>{avatar}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nom</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Ton prénom"
            placeholderTextColor={COLORS.gray}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Classe</Text>
          <View style={styles.classGrid}>
            {CLASSES.map((classOption) => (
              <TouchableOpacity
                key={classOption}
                style={[
                  styles.classButton,
                  selectedClass === classOption && styles.classButtonSelected,
                ]}
                onPress={() => setSelectedClass(classOption)}
              >
                <Text
                  style={[
                    styles.classText,
                    selectedClass === classOption && styles.classTextSelected,
                  ]}
                >
                  {classOption}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>École (optionnel)</Text>
          <TextInput
            style={styles.input}
            value={school}
            onChangeText={setSchool}
            placeholder="Nom de ton établissement"
            placeholderTextColor={COLORS.gray}
          />
        </View>

        <TouchableOpacity style={styles.saveMainButton} onPress={handleSave}>
          <Save size={20} color={COLORS.white} />
          <Text style={styles.saveMainButtonText}>Enregistrer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.darkGray,
  },
  saveButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 16,
  },
  avatarsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  avatarButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  avatarButtonSelected: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary + '20',
  },
  avatarEmoji: {
    fontSize: 32,
  },
  input: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: COLORS.darkGray,
  },
  classGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  classButton: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  classButtonSelected: {
    backgroundColor: COLORS.primary + '20',
    borderColor: COLORS.primary,
  },
  classText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.gray,
  },
  classTextSelected: {
    color: COLORS.primary,
  },
  saveMainButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    padding: 18,
    marginTop: 12,
  },
  saveMainButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
  },
});
