import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import {
  ArrowLeft,
  Crown,
  BookOpen,
  Zap,
  TrendingUp,
  Shield,
  CheckCircle,
} from 'lucide-react-native';
import { usePremium } from '@/contexts/PremiumContext';
import { useGamification } from '@/contexts/GamificationContext';
import { COLORS } from '@/utils/constants';

export default function PremiumScreen() {
  const router = useRouter();
  const { upgradeToPremium, isPremium } = usePremium();
  const { unlockBadge } = useGamification();

  const handlePurchase = async () => {
    Alert.alert(
      'Confirmation',
      'Passer à Premium pour 1,99€ ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Acheter',
          onPress: async () => {
            const success = await upgradeToPremium('test');
            if (success) {
              await unlockBadge('premium');
              Alert.alert(
                'Bienvenue Premium ! 👑',
                'Tu as maintenant accès à tout le contenu !',
                [
                  {
                    text: 'Génial !',
                    onPress: () => router.back(),
                  },
                ]
              );
            }
          },
        },
      ]
    );
  };

  const features = [
    {
      icon: <BookOpen size={24} color={COLORS.white} />,
      title: 'Tous les cours',
      description: 'Accès illimité aux 21+ leçons',
    },
    {
      icon: <Zap size={24} color={COLORS.white} />,
      title: 'Tous les quiz',
      description: 'Teste tes connaissances sans limite',
    },
    {
      icon: <TrendingUp size={24} color={COLORS.white} />,
      title: 'Statistiques avancées',
      description: 'Suis ta progression en détail',
    },
    {
      icon: <Shield size={24} color={COLORS.white} />,
      title: 'Sans publicités',
      description: 'Révise sans interruption',
    },
  ];

  if (isPremium) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color={COLORS.darkGray} />
          </TouchableOpacity>
        </View>

        <View style={styles.alreadyPremiumContainer}>
          <Crown size={80} color={COLORS.premium} />
          <Text style={styles.alreadyPremiumTitle}>
            Tu es déjà Premium !
          </Text>
          <Text style={styles.alreadyPremiumText}>
            Tu as accès à tout le contenu de l'application
          </Text>
          <TouchableOpacity
            style={styles.backHomeButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backHomeButtonText}>Retour</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color={COLORS.darkGray} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <LinearGradient
          colors={[COLORS.premium, '#FFA500']}
          style={styles.heroCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Crown size={64} color={COLORS.white} />
          <Text style={styles.heroTitle}>Passe à Premium</Text>
          <Text style={styles.heroSubtitle}>
            Débloque tout le contenu pour réviser efficacement
          </Text>
          <View style={styles.priceTag}>
            <Text style={styles.priceAmount}>1,99€</Text>
            <Text style={styles.priceLabel}>Achat unique</Text>
          </View>
        </LinearGradient>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Ce que tu obtiens :</Text>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureCard}>
              <View
                style={[
                  styles.featureIcon,
                  { backgroundColor: COLORS.premium },
                ]}
              >
                {feature.icon}
              </View>
              <View style={styles.featureInfo}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>
                  {feature.description}
                </Text>
              </View>
              <CheckCircle size={24} color={COLORS.success} />
            </View>
          ))}
        </View>

        <View style={styles.benefitsSection}>
          <Text style={styles.sectionTitle}>Pourquoi Premium ?</Text>
          <View style={styles.benefitsList}>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>🎯</Text>
              <Text style={styles.benefitText}>
                Révise toutes les matières sans limite
              </Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>📈</Text>
              <Text style={styles.benefitText}>
                Progresse plus rapidement avec les quiz
              </Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>🏆</Text>
              <Text style={styles.benefitText}>
                Obtiens le badge Premium exclusif
              </Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>💯</Text>
              <Text style={styles.benefitText}>
                Prépare-toi efficacement pour tes contrôles
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.purchaseButton}
          onPress={handlePurchase}
        >
          <LinearGradient
            colors={[COLORS.premium, '#FFA500']}
            style={styles.purchaseGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Crown size={24} color={COLORS.white} />
            <Text style={styles.purchaseButtonText}>
              Passer à Premium - 1,99€
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.disclaimer}>
          Paiement sécurisé • Achat unique • Sans abonnement
        </Text>

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
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  heroCard: {
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    marginBottom: 32,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 16,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 24,
  },
  priceTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
  },
  priceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  priceLabel: {
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.9,
  },
  featuresSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 16,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureInfo: {
    flex: 1,
    marginRight: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 2,
  },
  featureDescription: {
    fontSize: 14,
    color: COLORS.gray,
  },
  benefitsSection: {
    marginBottom: 32,
  },
  benefitsList: {
    gap: 12,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    padding: 16,
  },
  benefitIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  benefitText: {
    flex: 1,
    fontSize: 15,
    color: COLORS.darkGray,
    lineHeight: 20,
  },
  purchaseButton: {
    marginBottom: 16,
  },
  purchaseGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    borderRadius: 16,
    padding: 20,
  },
  purchaseButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  disclaimer: {
    fontSize: 12,
    color: COLORS.gray,
    textAlign: 'center',
    marginBottom: 12,
  },
  alreadyPremiumContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  alreadyPremiumTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginTop: 24,
    marginBottom: 12,
  },
  alreadyPremiumText: {
    fontSize: 16,
    color: COLORS.gray,
    textAlign: 'center',
    marginBottom: 32,
  },
  backHomeButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  backHomeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
  bottomSpace: {
    height: 40,
  },
});
