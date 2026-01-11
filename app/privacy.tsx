import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Shield, Mail } from 'lucide-react-native';
import { COLORS } from '@/utils/constants';

export default function PrivacyScreen() {
  const router = useRouter();

  const handleContact = () => {
    Linking.openURL('mailto:hamid.bouteba@gmail.com');
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
        <Text style={styles.headerTitle}>Politique de Confidentialité</Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.heroSection}>
          <Shield size={48} color={COLORS.primary} />
          <Text style={styles.heroTitle}>Vos données sont protégées</Text>
          <Text style={styles.heroSubtitle}>
            Dernière mise à jour : Janvier 2025
          </Text>
        </View>

        <Text style={styles.intro}>
          L'application <Text style={styles.bold}>RéviZON</Text> s'engage à protéger la vie privée de ses utilisateurs. Cette politique détaille comment nous collectons, utilisons et protégeons vos informations.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Collecte des Données</Text>
          <Text style={styles.sectionText}>
            Nous collectons les données suivantes pour assurer le bon fonctionnement de l'application :
          </Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Informations de compte</Text> : Nom, adresse e-mail et avatar (via Supabase Auth).
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Données de progression</Text> : Leçons terminées, scores aux quiz, résultats aux brevets blancs et statistiques d'utilisation.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Données techniques</Text> : Type d'appareil, version du système d'exploitation.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Utilisation des Données</Text>
          <Text style={styles.sectionText}>
            Vos données sont utilisées exclusivement pour :
          </Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Personnaliser votre expérience d'apprentissage.</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Synchroniser votre progression sur plusieurs appareils.</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Gérer votre abonnement Premium (le cas échéant).</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Améliorer le contenu pédagogique de l'application.</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Partage des Données</Text>
          <Text style={styles.sectionText}>
            <Text style={styles.bold}>RéviZON</Text> ne vend, ne loue, ni ne partage vos données personnelles avec des tiers à des fins marketing. Nous utilisons les services de confiance suivants :
          </Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Supabase</Text> : Pour le stockage sécurisé des données et l'authentification.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Expo/EAS</Text> : Pour la gestion technique de l'application.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Sécurité</Text>
          <Text style={styles.sectionText}>
            Nous mettons en œuvre des mesures de sécurité techniques (chiffrement, protocoles sécurisés) pour protéger vos données contre tout accès non autorisé.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Vos Droits (RGPD)</Text>
          <Text style={styles.sectionText}>
            Conformément au Règlement Général sur la Protection des Données, vous disposez des droits suivants :
          </Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Droit d'accès</Text> : Consulter vos données personnelles dans votre profil.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Droit de suppression</Text> : Supprimer votre compte et toutes les données associées directement depuis les paramètres de l'application.
              </Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={styles.bold}>Droit de rectification</Text> : Modifier vos informations de profil à tout moment.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. Protection des Mineurs</Text>
          <Text style={styles.sectionText}>
            L'application est destinée aux élèves de 3ème. Nous conseillons aux parents de superviser l'utilisation de l'application. Nous ne collectons aucune donnée sensible non nécessaire à la scolarité.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7. Contact</Text>
          <Text style={styles.sectionText}>
            Pour toute question concernant vos données, vous pouvez nous contacter :
          </Text>
          <TouchableOpacity style={styles.contactButton} onPress={handleContact}>
            <Mail size={20} color={COLORS.white} />
            <Text style={styles.contactButtonText}>hamid.bouteba@gmail.com</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpace} />
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
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.darkGray,
    marginLeft: 16,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 24,
    padding: 24,
    backgroundColor: COLORS.primary + '10',
    borderRadius: 16,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginTop: 12,
  },
  heroSubtitle: {
    fontSize: 14,
    color: COLORS.gray,
    marginTop: 4,
  },
  intro: {
    fontSize: 16,
    color: COLORS.darkGray,
    lineHeight: 24,
    marginBottom: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 15,
    color: COLORS.darkGray,
    lineHeight: 22,
  },
  bulletList: {
    marginTop: 12,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 15,
    color: COLORS.primary,
    marginRight: 8,
    fontWeight: 'bold',
  },
  bulletText: {
    flex: 1,
    fontSize: 15,
    color: COLORS.darkGray,
    lineHeight: 22,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    gap: 8,
  },
  contactButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
  bottomSpace: {
    height: 40,
  },
});
