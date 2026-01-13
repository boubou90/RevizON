# Vérification de la configuration Google OAuth

## ✅ CHECKLIST - Vérifiez chaque point:

### 1. Google Cloud Console

Allez sur: https://console.cloud.google.com/apis/credentials

**a) OAuth 2.0 Client ID existe?**
- [ ] Vous voyez un Client ID: `59534928874-pap7vgads63prmcrjufkjk30n9sc2l8s.apps.googleusercontent.com`

**b) Cliquez sur ce Client ID pour l'éditer**

**c) Vérifiez "Authorized JavaScript origins":**
- [ ] DOIT contenir: `https://fazwbmmmwyowifngqtac.supabase.co`
- [ ] Rien d'autre (pas de localhost, pas de revizon.app)

**d) Vérifiez "Authorized redirect URIs":**
- [ ] DOIT contenir: `https://fazwbmmmwyowifngqtac.supabase.co/auth/v1/callback`
- [ ] C'est CRITIQUE - sans cela, Google refusera la redirection!

**e) OAuth consent screen configuré?**
- [ ] Allez dans "OAuth consent screen" (menu de gauche)
- [ ] Le statut doit être "Testing" ou "Published"
- [ ] Vous devez avoir ajouté votre email dans "Test users" si le statut est "Testing"

### 2. Supabase Configuration

Allez sur: https://supabase.com/dashboard/project/fazwbmmmwyowifngqtac/auth/providers

**a) Google Provider:**
- [ ] Le toggle est VERT (activé)
- [ ] Client ID: `59534928874-pap7vgads63prmcrjufkjk30n9sc2l8s.apps.googleusercontent.com`
- [ ] Client Secret: `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`
- [ ] Cliquez sur SAVE après avoir entré les credentials

**b) URL Configuration:**

Allez sur: https://supabase.com/dashboard/project/fazwbmmmwyowifngqtac/auth/url-configuration

- [ ] Site URL: `http://localhost:8081` (PAS `https://revizon.app`)
- [ ] Redirect URLs contient: `revizon://auth/callback`
- [ ] Cliquez sur "Save" après modifications

### 3. Test manuel

**a) Ouvrez cette URL dans Chrome sur votre téléphone:**

```
https://fazwbmmmwyowifngqtac.supabase.co/auth/v1/authorize?provider=google&redirect_to=revizon://auth/callback
```

**b) Que voyez-vous?**

- [ ] Page de connexion Google → ✅ PARFAIT! La configuration fonctionne
- [ ] "Error 400: redirect_uri_mismatch" → ❌ Les Authorized redirect URIs ne sont pas corrects dans Google Cloud
- [ ] "Error: Google OAuth is not enabled" → ❌ Google n'est pas activé dans Supabase
- [ ] Page blanche/erreur réseau → ❌ Problème de credentials dans Supabase
- [ ] "This app is blocked" → ❌ OAuth consent screen pas configuré

### 4. Si tout est correct mais ça ne fonctionne toujours pas

Attendez 2-3 minutes pour que les changements se propagent, puis:

1. Redémarrez Expo: `npx expo start -c`
2. Testez à nouveau la connexion Google dans l'app

### 5. Erreurs courantes

**❌ Erreur "redirect_uri_mismatch"**
- Solution: Vérifiez que `https://fazwbmmmwyowifngqtac.supabase.co/auth/v1/callback` est dans les Authorized redirect URIs

**❌ Le navigateur se ferme immédiatement (dismiss)**
- Causes possibles:
  1. Google Provider pas activé dans Supabase
  2. Mauvais Client ID ou Client Secret dans Supabase
  3. Authorized redirect URIs manquantes dans Google Cloud
  4. OAuth consent screen pas configuré

**❌ "This app hasn't been verified"**
- C'est normal en développement
- Cliquez sur "Advanced" puis "Go to [App name] (unsafe)"
- OU ajoutez votre email dans "Test users" dans l'OAuth consent screen

---

## Configuration correcte finale:

### Google Cloud Console:
```
OAuth 2.0 Client ID: 59534928874-pap7vgads63prmcrjufkjk30n9sc2l8s.apps.googleusercontent.com

Authorized JavaScript origins:
  - https://fazwbmmmwyowifngqtac.supabase.co

Authorized redirect URIs:
  - https://fazwbmmmwyowifngqtac.supabase.co/auth/v1/callback
```

### Supabase:
```
Google Provider: ENABLED ✅
Client ID: 59534928874-pap7vgads63prmcrjufkjk30n9sc2l8s.apps.googleusercontent.com
Client Secret: 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

Site URL: http://localhost:8081
Redirect URLs: revizon://auth/callback
```
