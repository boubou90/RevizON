# Configuration Google OAuth pour RéviZON

## Étape 1: Créer un projet Google Cloud

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Connectez-vous avec votre compte Google
3. Cliquez sur le menu déroulant en haut à gauche (à côté de "Google Cloud")
4. Cliquez sur "NEW PROJECT"
5. Nommez votre projet: `RéviZON`
6. Cliquez sur "CREATE"

## Étape 2: Configurer l'écran de consentement OAuth

1. Dans le menu de gauche, allez à **APIs & Services** > **OAuth consent screen**
2. Sélectionnez **External** (car l'app sera accessible au public)
3. Cliquez sur "CREATE"
4. Remplissez les informations:
   - **App name**: `RéviZON`
   - **User support email**: Votre email
   - **App logo**: (optionnel) Uploadez le logo de votre app
   - **Application home page**: `https://revizon.app` (ou laissez vide pour l'instant)
   - **Authorized domains**: Ajoutez `supabase.co`
   - **Developer contact information**: Votre email
5. Cliquez sur "SAVE AND CONTINUE"
6. **Scopes**: Cliquez sur "ADD OR REMOVE SCOPES"
   - Sélectionnez `.../auth/userinfo.email`
   - Sélectionnez `.../auth/userinfo.profile`
   - Cliquez sur "UPDATE"
7. Cliquez sur "SAVE AND CONTINUE"
8. **Test users**: Ajoutez votre email pour tester (en mode développement)
9. Cliquez sur "SAVE AND CONTINUE"

## Étape 3: Créer les credentials OAuth 2.0

1. Dans le menu de gauche, allez à **APIs & Services** > **Credentials**
2. Cliquez sur "CREATE CREDENTIALS" > "OAuth client ID"
3. Type d'application: **Web application**
4. Nom: `RéviZON Web Client`
5. **Authorized JavaScript origins**:
   - Cliquez sur "ADD URI"
   - Ajoutez: `https://fazwbmmmwyowifngqtac.supabase.co`
6. **Authorized redirect URIs**:
   - Cliquez sur "ADD URI"
   - Ajoutez: `https://fazwbmmmwyowifngqtac.supabase.co/auth/v1/callback`
7. Cliquez sur "CREATE"
8. **IMPORTANT**: Une fenêtre s'affiche avec:
   - **Client ID**: Copiez-le (ex: `123456789-abc.apps.googleusercontent.com`)
   - **Client Secret**: Copiez-le (ex: `GOCSPX-abc123def456`)

## Étape 4: Configurer Google OAuth dans Supabase

1. Allez dans votre [Supabase Dashboard](https://supabase.com/dashboard)
2. Sélectionnez votre projet RéviZON
3. Dans le menu de gauche, allez à **Authentication** > **Providers**
4. Cherchez **Google** dans la liste
5. Activez le toggle "Enable Sign in with Google"
6. Collez les informations:
   - **Client ID (for OAuth)**: Collez le Client ID copié à l'étape 3
   - **Client Secret (for OAuth)**: Collez le Client Secret copié à l'étape 3
7. **Skip nonce checks**: Laissez décoché (par défaut)
8. Cliquez sur "SAVE"

## Étape 5: Vérifier la configuration des URLs de redirection

1. Dans Supabase, allez à **Authentication** > **URL Configuration**
2. Vérifiez que dans **Redirect URLs**, vous avez:
   - `revizon://auth/callback` ✓
   - Ajoutez aussi ces URLs pour le développement:
     - `exp://*`
     - `http://localhost:8081`

3. **Site URL**: Mettez `https://revizon.app` (ou votre domaine)

## Étape 6: Tester l'authentification

1. Redémarrez votre application Expo: `npx expo start -c`
2. Ouvrez l'app sur votre appareil
3. Cliquez sur "Se connecter avec Google"
4. Vous devriez maintenant voir la page de connexion Google
5. Sélectionnez votre compte Google
6. Acceptez les permissions
7. Vous serez redirigé vers l'application et connecté!

## Troubleshooting

### Si vous voyez "This site can't be reached"
- Vérifiez que le Client ID et Client Secret sont corrects dans Supabase
- Vérifiez que l'URL de redirection `https://fazwbmmmwyowifngqtac.supabase.co/auth/v1/callback` est bien dans les Authorized redirect URIs de Google Cloud

### Si vous voyez "Access blocked: This app's request is invalid"
- Vérifiez que vous avez configuré l'écran de consentement OAuth
- Vérifiez que votre domaine Supabase (`supabase.co`) est dans les Authorized domains

### Si le navigateur se ferme immédiatement (dismiss)
- C'est le problème actuel - résolu une fois que vous configurez Google OAuth correctement

### En mode développement, si vous voyez "Not on the list of allowed redirect URIs"
- Ajoutez `exp://*` dans les Redirect URLs de Supabase

## Notes importantes

- En mode **Testing** (par défaut), seuls les utilisateurs ajoutés dans "Test users" peuvent se connecter
- Pour passer en **Production**, retournez dans "OAuth consent screen" et cliquez sur "PUBLISH APP"
- Les credentials Google peuvent prendre quelques minutes à se propager

## Contacts

Si vous avez des questions, consultez:
- [Documentation Supabase Auth](https://supabase.com/docs/guides/auth/social-login/auth-google)
- [Documentation Google OAuth](https://developers.google.com/identity/protocols/oauth2)
