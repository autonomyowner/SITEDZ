# Guide de Test pour TAMAYYUZ ePay - SiteDZ Store

## Informations d'Accès

### URLs de Test
- **Site Web**: À fournir par le client (domaine de production ou staging)
- **Page de Tarification**: `https://votre-domaine.com/pricing`
- **Page de Paiement**: `https://votre-domaine.com/payment`

### Identifiants TAMAYYUZ
- **API Key**: `2025-10-icae77ribci26fwegivzwlsr31ry2jid`
- **Secret Key**: `3619963911592`
- **API URL**: `https://apiv2.tamayyuz-tijari.com/api`

## Cartes de Test

Utilisez ces cartes sur la page mock SATIM :

| Numéro de Carte | CVV | Résultat Attendu |
|-----------------|-----|------------------|
| 6280580610061011 | 992 | ✅ Succès - Carte Valide |
| 6280581110006712 | 897 | ❌ Échec - TEMPORAIREMENT BLOQUÉE |
| 6280581110006316 | 657 | ❌ Échec - PERDUE |
| 6280581110006415 | 958 | ❌ Échec - VOLÉE |
| 6280580610061110 | 260 | ❌ Échec - Solde Insuffisant |
| 6280581110006514 | 199 | ❌ Échec - CVV2 Incorrect |
| 6394131100000417 | 428 | ❌ Échec - Carte Expirée |

## Scénarios de Test

### Test 1: Paiement Réussi (Cas Nominal)

#### Étapes:
1. Naviguer vers `https://votre-domaine.com/pricing`
2. Sélectionner l'offre "Site vitrine moderne" (25 000 DA)
3. Cliquer sur le bouton "Payer maintenant"
4. Remplir le formulaire de paiement:
   - **Nom complet**: Test User
   - **Email**: test@example.com
   - **Téléphone**: +213 555 123 456
   - Vérifier le captcha (réponse: 8)
   - Cocher "J'accepte les conditions"
5. Cliquer sur "Procéder au paiement"
6. Sur la page SATIM mock, utiliser:
   - **Carte**: 6280580610061011
   - **CVV**: 992
   - **Date d'expiration**: N'importe quelle date future
7. Valider le paiement

#### Vérifications:
- ✅ Redirection vers `/payment/confirmation?id={invoice_id}&hash={signature}`
- ✅ Page de confirmation affiche:
  - Logo/nom de l'entreprise en haut: "SiteDZ Store"
  - Message "Paiement confirmé !"
  - **ID Facture**: Format `INV-{timestamp}-{random}`
  - **ID Transaction**: Doit provenir de `satim_order_id` de votre API
  - **ID TAMAYYUZ ePay**: Doit être un nombre
  - **Montant ePay**: 25000.00 DZD
  - **Code d'approbation**: Code à 6 chiffres
  - **Date**: Date et heure de la transaction
  - **Titulaire carte**: Nom du porteur
  - Icône avec message "En cas de problème de paiement, veuillez contacter le numéro vert 3020"
- ✅ Webhook appelé à `/api/payment/webhook` avec payload complet
- ✅ Console logs montrent la vérification de signature réussie

### Test 2: Paiement Échoué (Solde Insuffisant)

#### Étapes:
1. Répéter les étapes 1-5 du Test 1
2. Sur la page SATIM mock, utiliser:
   - **Carte**: 6280580610061110
   - **CVV**: 260
3. Valider le paiement

#### Vérifications:
- ✅ Redirection vers `/payment/failed?id={invoice_id}`
- ✅ Page d'échec affiche:
  - Message "Paiement échoué"
  - Liste des raisons possibles
  - Icône avec numéro vert 3020
  - Bouton "Réessayer le paiement"
  - Bouton "Contacter le support"
- ✅ Webhook appelé avec statut 'F' (failed)

### Test 3: Paiement - E-commerce (Montant Élevé)

#### Étapes:
1. Sélectionner l'offre "E-commerce propulsé" (67 000 DA)
2. Suivre les mêmes étapes que Test 1

#### Vérifications:
- ✅ Montant correct: 67000.00 DZD
- ✅ Tous les détails corrects sur la page de confirmation

### Test 4: Plan SaaS (Sur Devis)

#### Étapes:
1. Sélectionner l'offre "SaaS sur-mesure"

#### Vérifications:
- ✅ Pas de bouton "Payer maintenant"
- ✅ Seulement bouton "Demander un devis personnalisé"
- ✅ Redirection WhatsApp au clic

### Test 5: Vérification de Signature (Sécurité)

#### Étapes:
1. Effectuer un paiement réussi
2. Sur la page de confirmation, copier l'URL
3. Modifier le paramètre `hash` dans l'URL
4. Recharger la page

#### Vérifications:
- ✅ Erreur de vérification de signature
- ✅ Message d'erreur approprié
- ✅ Pas d'affichage de données de paiement

### Test 6: Webhook - Réception et Traitement

#### Vérifications Backend:
1. Effectuer un paiement test
2. Vérifier les logs serveur

#### Points à Vérifier:
- ✅ Webhook reçu à `/api/payment/webhook`
- ✅ Header `X-Signature` présent
- ✅ Signature vérifiée avec succès
- ✅ Payload contient:
  ```json
  {
    "invoice_id": number,
    "satim_order_id": string,
    "tamayyuz_epay_id": number,
    "epay_amount": string,
    "date": string,
    "refunded": boolean,
    "refund_amount": string | null,
    "status": string,
    "description": string,
    "cardholder_name": string,
    "satim_description": string,
    "approval_code": number,
    "return_url": string,
    "fail_url": string
  }
  ```
- ✅ Réponse 200 OK retournée au webhook

## Endpoints API à Tester

### 1. Initiation de Paiement

**Endpoint**: `POST /api/payment/initiate`

**Request Body**:
```json
{
  "plan_name": "Site vitrine moderne",
  "client_name": "Test User",
  "client_email": "test@example.com",
  "client_phone": "+213555123456",
  "amount": 25000
}
```

**Response Attendue**:
```json
{
  "success": true,
  "payment_url": "https://test.tamayyuz-tijari.com/checkout/...",
  "invoice_id": "INV-1234567890-abc123"
}
```

### 2. Vérification de Statut

**Endpoint**: `POST /api/payment/status`

**Request Body**:
```json
{
  "invoice_id": "INV-1234567890-abc123",
  "hash": "SIGNATURE_HASH_HERE"
}
```

**Response Attendue**:
```json
{
  "success": true,
  "payment_details": {
    "invoice_id": "INV-1234567890-abc123",
    "satim_order_id": "SATIM123456",
    "tamayyuz_epay_id": 789,
    "epay_amount": "25000.00",
    "approval_code": "123456",
    "status": "S",
    "date": "2025-10-20T10:30:00Z",
    ...
  }
}
```

### 3. Webhook (Appelé par TAMAYYUZ)

**Endpoint**: `POST /api/payment/webhook`

**Headers**:
```
X-Signature: CALCULATED_HMAC_SHA256_SIGNATURE
Content-Type: application/json
```

**Response Attendue**:
```json
{
  "detail": "Webhook processed successfully"
}
```

## Points de Vérification Spécifiques TAMAYYUZ

### Page de Confirmation

- ✅ **Logo entreprise**: "SiteDZ Store" affiché en haut
- ✅ **ID Transaction**: Label changé de "ID commande SATIM" à "ID Transaction"
- ✅ **satim_order_id**: Provient bien de la réponse API (pas de mock data)
- ✅ **Icône**: SVG icon affiché avec le message du numéro vert
- ✅ **Pas de mention "SATIM"**: Seulement dans le message du support

### Page de Paiement

- ✅ **Logos cartes**: Icons CIB & EDAHABIA affichés (pas de texte simple)
- ✅ **Séparateur**: Symbole "&" entre les deux logos
- ✅ **Design**: Logos dans des cadres avec bordure

### Sécurité

- ✅ **Signature HMAC-SHA256**: Vérifiée sur webhook
- ✅ **Hash verification**: Vérifiée sur redirection
- ✅ **Secret key**: Jamais exposé côté client
- ✅ **API key**: Utilisée uniquement pour authentification serveur

## Cas Limites à Tester

### 1. Montant Minimum
- Tester avec montant < 50 DZD (devrait échouer)

### 2. Timeout
- Abandonner le paiement sur la page SATIM
- Vérifier qu'aucune charge n'est effectuée

### 3. Double Redirection
- Essayer d'accéder à la page de confirmation avec un invoice_id déjà utilisé
- Vérifier que les données correctes sont affichées

### 4. Caractères Spéciaux
- Tester avec nom contenant accents: "François Élève"
- Tester avec email spécial: "test+123@example.com"

### 5. Longue Session
- Laisser le formulaire de paiement ouvert pendant 15 minutes
- Soumettre et vérifier que ça fonctionne toujours

## Métriques de Performance

### Temps de Réponse Attendus:
- **Initiation de paiement**: < 2 secondes
- **Redirection SATIM**: < 1 seconde
- **Webhook**: < 500ms
- **Vérification status**: < 1 seconde

## Logs à Vérifier

### Console Serveur Devrait Montrer:

```
Payment initiation request received: {plan_name, client_name, ...}
Calling TAMAYYUZ API: https://apiv2.tamayyuz-tijari.com/api/gateway/epay/
TAMAYYUZ API Response status: 200
Payment initiation result: {success: true, payment_url: ...}

[Sur webhook]
Payment webhook received: {invoice_id, status, amount, ...}

[Sur confirmation]
Checking payment status: https://apiv2.tamayyuz-tijari.com/api/gateway/status/details/?invoice_id=...
Status check response: 200 OK
Status check data: {...}
```

## Checklist Final

Avant validation production:

- [ ] Tous les scénarios de paiement testés (succès + échecs)
- [ ] Webhook fonctionne et vérifie les signatures
- [ ] Tous les champs de la page de confirmation affichent les vraies données
- [ ] Labels mis à jour ("ID Transaction" au lieu de "ID commande SATIM")
- [ ] Logo entreprise affiché en haut des pages
- [ ] Icons CIB & EDAHABIA affichés correctement
- [ ] Icon avec numéro vert 3020 affiché
- [ ] Pas de mention "SATIM" sauf dans le message du support
- [ ] Signatures vérifiées correctement
- [ ] Gestion des erreurs testée
- [ ] Performance acceptable (< 2s pour initiation)
- [ ] Logs serveur propres et informatifs

## Contact Support

En cas de problème durant les tests:

- **Email**: autonomy.owner@gmail.com
- **WhatsApp**: +213 797 339 451

## Notes Techniques

### Architecture Actuelle

```
Frontend (Next.js)
    ↓
Backend API Routes (/api/payment/*)
    ↓
TAMAYYUZ ePay API (https://apiv2.tamayyuz-tijari.com/api)
    ↓
SATIM Mock Payment Page
    ↓
Redirection + Webhook
    ↓
Confirmation/Failure Pages
```

### Fichiers Clés

- **Paiement**: `src/app/api/payment/initiate/route.ts`
- **Webhook**: `src/app/api/payment/webhook/route.ts`
- **Status**: `src/app/api/payment/status/route.ts`
- **Confirmation**: `src/components/PaymentConfirmationContent.tsx`
- **Échec**: `src/components/PaymentFailedContent.tsx`
- **Utilitaires**: `src/lib/epay.ts`

### Variables d'Environnement

```env
NEXT_PUBLIC_EPAY_API_KEY=2025-10-icae77ribci26fwegivzwlsr31ry2jid
EPAY_SECRET_KEY=3619963911592
NEXT_PUBLIC_EPAY_API_URL=https://apiv2.tamayyuz-tijari.com/api
NEXT_PUBLIC_BASE_URL=https://votre-domaine.com
```

## Prochaines Étapes

1. ✅ Tests exhaustifs par l'équipe TAMAYYUZ
2. ⏳ Corrections si nécessaires
3. ⏳ Validation finale
4. ⏳ Signature du contrat
5. ⏳ Activation en production

---

**Dernière mise à jour**: 20 Octobre 2025  
**Version**: 1.0  
**Statut**: Prêt pour tests TAMAYYUZ

