import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Play, Square } from 'lucide-react-native';
import { readText, stopReading } from '@/utils/speech';
import { COLORS } from '@/utils/constants';

interface DicteePlayerProps {
  text: string;
}

export default function DicteePlayer({ text }: DicteePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPart, setCurrentPart] = useState(-1);
  const isPlayingRef = useRef(false);

  // Nettoyage à la fermeture du composant
  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      stopReading();
    };
  }, []);

  const parts = text.split(/[.!?]/).filter(p => p.trim().length > 5);

  const startDictee = async () => {
    if (isPlaying) return;
    
    setIsPlaying(true);
    isPlayingRef.current = true;
    
    for (let i = 0; i < parts.length; i++) {
      // Vérification en temps réel si l'utilisateur a cliqué sur Stop
      if (!isPlayingRef.current) break;
      
      setCurrentPart(i);
      readText(parts[i].trim() + ".");
      
      // On attend la fin de la phrase + une pause pour l'écriture
      // 8 secondes par phrase est un bon compromis pour le Brevet
      await new Promise(resolve => setTimeout(resolve, 8000));
    }
    
    if (isPlayingRef.current) {
      setIsPlaying(false);
      setCurrentPart(-1);
      isPlayingRef.current = false;
    }
  };

  const stopDictee = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    setCurrentPart(-1);
    stopReading();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🎧 Dictée Vocale</Text>
        <Text style={styles.subtitle}>
          {isPlaying ? `Phrase ${currentPart + 1} sur ${parts.length}` : "Cliquez pour démarrer la lecture"}
        </Text>
      </View>

      <View style={styles.controls}>
        {!isPlaying ? (
          <TouchableOpacity style={styles.playButton} onPress={startDictee}>
            <Play size={24} color={COLORS.white} fill={COLORS.white} />
            <Text style={styles.playButtonText}>Démarrer la dictée</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[styles.playButton, styles.stopButton]} onPress={stopDictee}>
            <Square size={24} color={COLORS.white} fill={COLORS.white} />
            <Text style={styles.playButtonText}>Arrêter</Text>
          </TouchableOpacity>
        )}
      </View>

      {isPlaying && (
        <View style={styles.progressContainer}>
          <ActivityIndicator color={COLORS.secondary} size="small" />
          <Text style={styles.progressText}>Dictée en cours... Écrivez sur votre feuille.</Text>
        </View>
      )}
      
      <Text style={styles.infoText}>
        L'audio utilise la voix système. Assurez-vous que votre volume est activé.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  header: { marginBottom: 15 },
  title: { fontSize: 18, fontWeight: 'bold', color: COLORS.darkGray },
  subtitle: { fontSize: 14, color: COLORS.gray, marginTop: 4 },
  controls: { alignItems: 'center' },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    gap: 10,
  },
  stopButton: { backgroundColor: COLORS.error },
  playButtonText: { color: COLORS.white, fontSize: 16, fontWeight: 'bold' },
  progressContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15, gap: 10 },
  progressText: { fontSize: 13, color: COLORS.secondary, fontStyle: 'italic' },
  infoText: { fontSize: 11, color: COLORS.gray, textAlign: 'center', marginTop: 15 }
});
