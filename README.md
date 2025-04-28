# immo


<details>
    <summary>Cahier de charge</summary>

## 1. Objectifs du site

- Permettre aux utilisateurs de rechercher et consulter des annonces immobilières
- Faciliter la mise en relation entre propriétaires/agences et locataires/acheteurs potentiels
- Offrir une expérience utilisateur intuitive et agréable

## 2. Fonctionnalités principales

### 2.1 Recherche de biens
- Moteur de recherche avancé avec filtres (type de bien, localisation, prix, surface, etc.)
- Carte interactive pour visualiser les biens
- Sauvegarde des critères de recherche

### 2.2 Annonces immobilières
- Création et gestion d'annonces pour les propriétaires/agences
- Galerie photos et vidéos pour chaque bien
- Description détaillée des biens (caractéristiques, équipements, etc.)

### 2.3 Espace utilisateur
- Inscription et connexion sécurisées
- Profil utilisateur personnalisable
- Favoris et alertes personnalisées

### 2.4 Communication
- Messagerie interne entre utilisateurs
- Demande de visite en ligne
- Système de notation et d'avis

## 3. Aspects techniques

- Site responsive (adapté aux mobiles et tablettes)
- Optimisation SEO
- Sécurité des données et respect du RGPD
- Intégration de paiements sécurisés (si applicable)

## 4. Design et ergonomie

- Interface utilisateur moderne et intuitive
- Charte graphique cohérente
- Accessibilité pour tous les utilisateurs

## 5. Maintenance et évolution

- Mises à jour régulières de sécurité
- Ajout de nouvelles fonctionnalités selon les besoins des utilisateurs
- Support technique et assistance utilisateur



</details>



<details>
    <summary>Modules</summary>
    
Pour structurer le développement du backend, il est essentiel de prioriser les modules en fonction des **besoins fonctionnels** et des **dépendances techniques**. Voici une proposition d'ordre de priorité pour les modules, en tenant compte des fonctionnalités clés et des dépendances entre les modules :

---

### **1. Module Utilisateurs**
**Priorité : Élevée**  
**Raison** : Ce module est la base de tout le système. Il permet la gestion des utilisateurs (inscription, connexion, rôles, etc.), ce qui est indispensable pour accéder aux autres fonctionnalités.

- **Fonctionnalités clés** :
  - Inscription et connexion sécurisées (JWT/OAuth2)
  - Gestion des rôles (propriétaire, locataire, admin)
  - Profil utilisateur (informations personnelles, préférences)

- **Dépendances** :
  - Aucune dépendance externe, mais nécessaire pour tous les autres modules.

---

### **2. Module Annonces**
**Priorité : Élevée**  
**Raison** : Ce module est au cœur du projet, car il permet la création, la gestion et l'affichage des annonces immobilières. Il doit être développé tôt pour permettre la mise en place des autres fonctionnalités (recherche, favoris, etc.).

- **Fonctionnalités clés** :
  - Création, modification et suppression d'annonces
  - Gestion des médias (photos, vidéos)
  - Description détaillée des biens

- **Dépendances** :
  - Module Utilisateurs (pour associer une annonce à un propriétaire ou une agence)
  - Stockage de fichiers (AWS S3, Google Cloud Storage)

---

### **3. Module Recherche**
**Priorité : Élevée**  
**Raison** : La recherche est une fonctionnalité centrale pour les utilisateurs. Elle doit être implémentée rapidement pour permettre la découverte des annonces.

- **Fonctionnalités clés** :
  - Moteur de recherche avec filtres (localisation, prix, surface, etc.)
  - Intégration d'une carte interactive (Google Maps, OpenStreetMap)
  - Sauvegarde des critères de recherche

- **Dépendances** :
  - Module Annonces (pour récupérer les données des annonces)
  - Module Utilisateurs (pour sauvegarder les recherches)

---

### **4. Module Favoris et Alertes**
**Priorité : Moyenne**  
**Raison** : Ce module améliore l'expérience utilisateur en permettant de sauvegarder des annonces et de créer des alertes personnalisées. Il dépend des modules Utilisateurs et Annonces.

- **Fonctionnalités clés** :
  - Ajout/Suppression de biens en favoris
  - Création d'alertes personnalisées (notifications par email/SMS)

- **Dépendances** :
  - Module Utilisateurs (pour associer les favoris et alertes à un utilisateur)
  - Module Annonces (pour référencer les annonces)

---

### **5. Module Messagerie**
**Priorité : Moyenne**  
**Raison** : Ce module facilite la communication entre les utilisateurs (propriétaires et locataires/acheteurs). Il est important, mais moins critique que les modules de base.

- **Fonctionnalités clés** :
  - Messagerie interne entre utilisateurs
  - Demandes de visite en ligne
  - Notifications en temps réel (WebSockets)

- **Dépendances** :
  - Module Utilisateurs (pour identifier les interlocuteurs)
  - Module Annonces (pour référencer les annonces concernées)

---

### **6. Module Notation et Avis**
**Priorité : Moyenne**  
**Raison** : Ce module permet aux utilisateurs de noter et de laisser des avis sur les biens ou les propriétaires/agences. Il est utile pour la confiance et la transparence, mais moins prioritaire que les fonctionnalités de base.

- **Fonctionnalités clés** :
  - Notation des propriétaires/agences
  - Avis des utilisateurs

- **Dépendances** :
  - Module Utilisateurs (pour identifier les auteurs des avis)
  - Module Annonces (pour référencer les biens notés)

---

### **7. Module Administration**
**Priorité : Faible (initialement), puis Élevée (en production)**  
**Raison** : Ce module est essentiel pour la gestion globale du site, mais il peut être développé après les fonctionnalités principales. Il devient critique une fois le site en production.

- **Fonctionnalités clés** :
  - Gestion des utilisateurs, annonces et contenus
  - Tableau de bord pour les statistiques
  - Modération des avis et annonces

- **Dépendances** :
  - Tous les autres modules (pour accéder aux données à gérer)

---

### **8. Module Paiements (si applicable)**
**Priorité : Faible (initialement), puis Moyenne (si nécessaire)**  
**Raison** : Si votre projet inclut des transactions financières (par exemple, pour réserver une visite ou payer un acompte), ce module sera nécessaire. Cependant, il peut être ajouté ultérieurement.

- **Fonctionnalités clés** :
  - Intégration de paiements sécurisés (Stripe, PayPal)
  - Gestion des transactions

- **Dépendances** :
  - Module Utilisateurs (pour identifier les payeurs)
  - Module Annonces (pour référencer les biens concernés)

---

### **Ordre de priorité résumé**
1. **Module Utilisateurs** (Base du système)
2. **Module Annonces** (Cœur du projet)
3. **Module Recherche** (Fonctionnalité clé pour les utilisateurs)
4. **Module Favoris et Alertes** (Amélioration de l'expérience utilisateur)
5. **Module Messagerie** (Communication entre utilisateurs)
6. **Module Notation et Avis** (Confiance et transparence)
7. **Module Administration** (Gestion globale)
8. **Module Paiements** (Si applicable)

---

### **Plan de développement suggéré**
1. **Phase 1** : Développer les modules **Utilisateurs**, **Annonces** et **Recherche**.
2. **Phase 2** : Ajouter les modules **Favoris et Alertes** et **Messagerie**.
3. **Phase 3** : Implémenter les modules **Notation et Avis** et **Administration**.
4. **Phase 4** : Intégrer le module **Paiements** (si nécessaire).

Cette approche permet de livrer rapidement un produit fonctionnel (MVP) avec les fonctionnalités essentielles, tout en ajoutant des améliorations progressives.


</details>

<details>
    <summary>Module Utilisateur</summary>


### **1. Fonctionnalités du module utilisateur**
Le module utilisateur doit couvrir les fonctionnalités suivantes :

#### **1.1 Inscription et connexion**
- **Inscription** : Permettre à un utilisateur de créer un compte (propriétaire, locataire, ou admin).
- **Connexion** : Authentifier les utilisateurs via un système sécurisé (JWT, OAuth2).
- **Validation** : Valider l'email ou le numéro de téléphone lors de l'inscription.

#### **1.2 Gestion du profil**
- **Profil utilisateur** : Permettre à l'utilisateur de mettre à jour ses informations personnelles (nom, email, photo, etc.).
- **Rôles et permissions** : Gérer les rôles (propriétaire, locataire, admin) et les permissions associées.

#### **1.3 Sécurité**
- **Mot de passe sécurisé** : Stocker les mots de passe de manière sécurisée (hachage avec bcrypt ou équivalent).
- **Récupération de compte** : Permettre la réinitialisation du mot de passe en cas d'oubli.
- **Protection des données** : Respecter le RGPD (consentement, droit à l'oubli, etc.).

#### **1.4 Administration**
- **Gestion des utilisateurs** : Permettre à l'admin de lister, modifier ou supprimer des utilisateurs.
- **Statistiques** : Fournir des statistiques sur les utilisateurs (nombre d'inscriptions, etc.).

---

### **2. Conception technique**

#### **2.1 Structure de la base de données**
La table `Users` sera la table principale pour ce module. Voici un exemple de structure :

```sql
CREATE TABLE Users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL, -- 'propriétaire', 'locataire', 'admin'
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone_number VARCHAR(20),
    profile_picture_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_verified BOOLEAN DEFAULT FALSE
);

-- Création d'une fonction qui met à jour updated_at avant chaque modification
CREATE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Création du trigger qui applique la fonction à chaque update
CREATE TRIGGER trigger_update_updated_at
BEFORE UPDATE ON Users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();


CREATE TABLE Permissions (
    id UUID PRIMARY KEY,
    role VARCHAR(50) NOT NULL,
    resource VARCHAR(50) NOT NULL, -- Ex: 'annonce', 'utilisateur', 'message'
    action VARCHAR(50) NOT NULL,   -- Ex: 'create', 'read', 'update', 'delete'
    UNIQUE (role, resource, action)
);
```

Exemple de permissions
```sql
INSERT INTO Permissions (id, role, resource, action) VALUES
(gen_random_uuid(), 'admin', 'annonce', 'create'),
(gen_random_uuid(), 'admin', 'annonce', 'read'),
(gen_random_uuid(), 'admin', 'annonce', 'update'),
(gen_random_uuid(), 'admin', 'annonce', 'delete'),
(gen_random_uuid(), 'propriétaire', 'annonce', 'create'),
(gen_random_uuid(), 'propriétaire', 'annonce', 'read'),
(gen_random_uuid(), 'propriétaire', 'annonce', 'update'),
(gen_random_uuid(), 'locataire', 'annonce', 'read');
```

#### **2.2 API Endpoints**
Voici les endpoints principaux pour ce module :

- **Inscription** :
  - `POST /api/register` : Créer un nouveau compte.
  - `POST /api/verify-email` : Valider l'email.

- **Connexion** :
  - `POST /api/login` : Authentifier un utilisateur et retourner un token JWT.

- **Profil utilisateur** :
  - `GET /api/user/{id}` : Récupérer les informations d'un utilisateur.
  - `PUT /api/user/{id}` : Mettre à jour les informations d'un utilisateur.

- **Sécurité** :
  - `POST /api/forgot-password` : Demander une réinitialisation de mot de passe.
  - `POST /api/reset-password` : Réinitialiser le mot de passe.

- **Administration** :
  - `GET /api/admin/users` : Lister tous les utilisateurs (admin seulement).
  - `DELETE /api/admin/users/{id}` : Supprimer un utilisateur (admin seulement).

---

### **3. Diagramme de séquence pour l'inscription**

Voici un diagramme de séquence en PlantUML pour illustrer le processus d'inscription :

```plantuml
@startuml
actor Utilisateur
participant "Frontend" as FE
participant "API Gateway" as API
participant "Module Utilisateurs" as Users
participant "Base de Données" as DB
participant "Service d'Email" as Email

Utilisateur -> FE : Remplit le formulaire d'inscription
FE -> API : Envoie les données d'inscription
API -> Users : Valide les données
Users -> DB : Vérifie si l'email existe déjà
DB --> Users : Retourne le résultat
Users -> DB : Crée un nouvel utilisateur
DB --> Users : Retourne l'utilisateur créé
Users -> Email : Envoie un email de validation
Email --> Utilisateur : Reçoit l'email de validation
Users --> API : Retourne une réponse de succès
API --> FE : Affiche un message de succès
FE --> Utilisateur : Affiche un message de succès
@enduml
```

---

### **4. Diagramme de classes pour le module utilisateur**

Voici un diagramme de classes en PlantUML pour représenter les entités et leurs relations :

```plantuml
@startuml
class Users {
  +id: UUID
  +email: String
  +password_hash: String
  +role: String
  +first_name: String
  +last_name: String
  +phone_number: String
  +profile_picture_url: String
  +created_at: DateTime
  +updated_at: DateTime
  +is_verified: Boolean
}

class Tokens {
  +id: UUID
  +user_id: UUID
  +token: String
  +expires_at: DateTime
}

class PasswordResets {
  +id: UUID
  +user_id: UUID
  +token: String
  +expires_at: DateTime
}

Users "1" --> "0..*" Tokens : Possède
Users "1" --> "0..*" PasswordResets : Possède
@enduml
```

---

### **5. Sécurité et bonnes pratiques**
- **Hachage des mots de passe** : Utiliser bcrypt ou Argon2 pour le hachage des mots de passe.
- **Validation des entrées** : Valider toutes les entrées utilisateur pour éviter les injections SQL ou XSS.
- **JWT (JSON Web Tokens)** : Utiliser des tokens JWT pour l'authentification. Inclure un mécanisme d'expiration et de renouvellement.
- **RGPD** : Assurer la confidentialité des données utilisateur et permettre la suppression des comptes.

---

### **6. Prochaines étapes**
Une fois le module utilisateur implémenté, vous pouvez passer au **module annonces**, qui dépend de ce module pour associer les annonces aux utilisateurs (propriétaires ou agences).

Si vous souhaitez approfondir un aspect spécifique (comme la gestion des rôles ou la récupération de mot de passe), n'hésitez pas à me le dire !
    ```

</details>



<details>
   <summary>Module Annonce</summary>
</details>

<details>
    <summary>Code</summary>
    D'accord, je comprends. Fournir un code *absolument complet et immédiatement fonctionnel* pour un projet de cette taille dans une seule réponse est un défi, car il dépend de votre environnement exact (base de données, variables d'environnement, etc.) et nécessiterait des tests et débogages itératifs.

Cependant, je vais vous fournir une version **très avancée et structurée** du code pour la **Phase 1 (Utilisateurs, Annonces, Recherche)**, en remplissant les fichiers clés basés sur nos discussions précédentes. Vous devrez :

1.  **Créer la structure de fichiers** indiquée.
2.  **Copier-coller** le contenu dans les fichiers correspondants.
3.  **Installer les dépendances** (`pyproject.toml`).
4.  **Configurer votre fichier `.env`**.
5.  **Mettre en place la base de données** (ex: PostgreSQL) et lancer **Alembic** pour créer les tables.
6.  **Lancer l'application** avec Uvicorn.

Ce code vise à être aussi proche que possible d'un état fonctionnel pour la Phase 1, en intégrant les meilleures pratiques de Clean Architecture et FastAPI.

---

**1. `pyproject.toml` (Exemple avec Poetry)**

```toml
[tool.poetry]
name = "kmerimmo"
version = "0.1.0"
description = "KmerImmo Real Estate Platform API"
authors = ["Your Name <you@example.com>"]
readme = "README.md"
packages = [{include = "kmerimmo", from = "src"}]

[tool.poetry.dependencies]
python = "^3.10" # Ou version supérieure
fastapi = "^0.104.0"
uvicorn = {extras = ["standard"], version = "^0.23.2"}
sqlalchemy = "^2.0.22"
alembic = "^1.12.0"
pydantic = "^2.4.2"
pydantic-settings = "^2.0.3"
python-dotenv = "^1.0.0"
passlib = {extras = ["bcrypt"], version = "^1.7.4"}
python-jose = {extras = ["cryptography"], version = "^3.3.0"}
psycopg2-binary = "^2.9.9" # Pour PostgreSQL
email-validator = "^2.1.0.post1"
greenlet = "^3.0.0" # Souvent requis par SQLAlchemy async/sync context

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"
```

**2. `.env` (Exemple)**

```dotenv
# Database
DATABASE_URL=postgresql://kmerimmo_user:your_strong_password@localhost:5432/kmerimmo_db

# Security
SECRET_KEY=d9a1b3c8f7e6d5c4b3a2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0 # Générez une clé forte et aléatoire (ex: openssl rand -hex 32)
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
```

**3. `src/kmerimmo/config.py`**

```python
# src/kmerimmo/config.py
from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache

class Settings(BaseSettings):
    DATABASE_URL: str
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    model_config = SettingsConfigDict(env_file='.env')

@lru_cache()
def get_settings() -> Settings:
    return Settings()

settings = get_settings()
```

**4. `src/kmerimmo/adapters/database/session.py`**

```python
# src/kmerimmo/adapters/database/session.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from kmerimmo.config import settings
from typing import Generator
from sqlalchemy.orm import Session as SQLAlchemySession # Alias pour éviter confusion

# pool_recycle: évite les erreurs de connexion après inactivité
engine = create_engine(settings.DATABASE_URL, pool_pre_ping=True, pool_recycle=3600)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db() -> Generator[SQLAlchemySession, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

```

**5. `src/kmerimmo/core/entities/enums.py`**

```python
# src/kmerimmo/core/entities/enums.py
import enum

class UserRole(str, enum.Enum):
    OWNER = "OWNER"         # Propriétaire/Vendeur
    TENANT = "TENANT"       # Locataire/Acheteur potentiel
    ADMIN = "ADMIN"

class ListingStatus(str, enum.Enum):
    PENDING = "pending"     # En attente de validation/publication
    PUBLISHED = "published" # Visible publiquement
    RENTED = "rented"       # Loué (pour catégorie location)
    SOLD = "sold"           # Vendu (pour catégorie vente)
    ARCHIVED = "archived"   # Retiré mais conservé
    DELETED = "deleted"     # Marqué pour suppression (soft delete)

class ListingType(str, enum.Enum):
    HOUSE = "house"
    APARTMENT = "apartment"
    OFFICE = "office"
    LAND = "land"
    OTHER = "other"

class ListingCategory(str, enum.Enum):
    SALE = "sale"
    RENT = "rent"

```

**6. `src/kmerimmo/core/entities/user.py`**

```python
# src/kmerimmo/core/entities/user.py
import uuid
from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr, Field
from .enums import UserRole

class User(BaseModel):
    id: uuid.UUID = Field(default_factory=uuid.uuid4)
    email: EmailStr
    first_name: Optional[str] = Field(None, max_length=50)
    last_name: Optional[str] = Field(None, max_length=50)
    role: UserRole = UserRole.TENANT # Default role
    is_active: bool = True
    hashed_password: str # Important: Ne jamais exposer via API Read schemas
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        from_attributes = True # Pydantic V2 alias for orm_mode
```

**7. `src/kmerimmo/core/entities/listing.py`**

```python
# src/kmerimmo/core/entities/listing.py
import uuid
from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, Field, HttpUrl, field_validator, model_validator

from .enums import ListingStatus, ListingType, ListingCategory

class Amenities(BaseModel):
    wifi: bool = False
    kitchen: bool = False
    bathroom: bool = False
    balcony: bool = False
    electricity_included: bool = Field(False, alias="electricityIncluded")
    air_conditioner: bool = Field(False, alias="airConditioner")
    all_charges_included: bool = Field(False, alias="allChargesIncluded")
    parking: bool = False
    elevator: bool = False
    security_guard: bool = Field(False, alias="securityGuard")
    swimming_pool: bool = Field(False, alias="swimmingPool")
    garden: bool = False
    terrace: bool = False
    heating: bool = False
    furnished: bool = False
    pets_allowed: bool = Field(False, alias="petsAllowed")

    class Config:
        populate_by_name = True # Allow using aliases on input

class Listing(BaseModel):
    id: uuid.UUID = Field(default_factory=uuid.uuid4)
    user_id: uuid.UUID = Field(alias="userId")

    title: str = Field(..., min_length=5, max_length=150)
    description: str = Field(..., min_length=20)
    price: float = Field(..., gt=0)
    surface: float = Field(..., gt=0)
    address: str = Field(..., max_length=255)
    country: str = Field(..., max_length=100)
    city: str = Field(..., max_length=100)
    zip_code: str = Field(..., alias="zipCode", max_length=20)
    state: str = Field(..., max_length=100) # Province/Region

    number_of_rooms: int = Field(..., alias="numberOfRooms", gt=0)
    year_of_construction: Optional[int] = Field(None, alias="yearOfConstruction", gt=1800)

    status: ListingStatus = ListingStatus.PENDING
    type: ListingType
    category: ListingCategory

    # Use HttpUrl for validation
    images: List[HttpUrl] = []
    videos: List[HttpUrl] = []

    amenities: Amenities = Field(default_factory=Amenities)

    created_at: datetime = Field(default_factory=datetime.utcnow, alias="createdAt")
    updated_at: datetime = Field(default_factory=datetime.utcnow, alias="updatedAt")

    @field_validator('year_of_construction')
    @classmethod
    def validate_year(cls, v):
        if v is not None and v > datetime.now().year + 1:
            raise ValueError('Year of construction cannot be in the future')
        return v

    @model_validator(mode='before') # Pydantic V2 (use root_validator for V1)
    @classmethod
    def check_status_category_consistency(cls, values):
        # Example: Can't be 'SOLD' if category is 'RENT'
        # This logic might be better placed in a Use Case though
        status, category = values.get('status'), values.get('category')
        if status == ListingStatus.SOLD and category == ListingCategory.RENT:
            raise ValueError("Listing category is RENT, status cannot be SOLD")
        if status == ListingStatus.RENTED and category == ListingCategory.SALE:
             raise ValueError("Listing category is SALE, status cannot be RENTED")
        return values


    class Config:
        from_attributes = True
        populate_by_name = True
        # Allow both snake_case and camelCase input/output names where alias is defined
        allow_population_by_field_name = True

```

**8. `src/kmerimmo/core/ports/repositories.py`**

```python
# src/kmerimmo/core/ports/repositories.py
from abc import ABC, abstractmethod
from typing import Optional, List, Any, Tuple
import uuid
from kmerimmo.core.entities.user import User
from kmerimmo.core.entities.listing import Listing
from kmerimmo.api.schemas import listing_schemas # OK for search query schema

class IUserRepository(ABC):
    @abstractmethod
    async def get_by_id(self, user_id: uuid.UUID) -> Optional[User]: # Mark as async
        raise NotImplementedError

    @abstractmethod
    async def get_by_email(self, email: str) -> Optional[User]: # Mark as async
        raise NotImplementedError

    @abstractmethod
    async def add(self, user: User) -> User: # Mark as async
        raise NotImplementedError

    @abstractmethod
    async def update(self, user: User) -> User: # Mark as async
        raise NotImplementedError

class IListingRepository(ABC):
    @abstractmethod
    async def get_by_id(self, listing_id: uuid.UUID) -> Optional[Listing]: # Mark as async
        raise NotImplementedError

    @abstractmethod
    async def add(self, listing: Listing) -> Listing: # Mark as async
        raise NotImplementedError

    @abstractmethod
    async def update(self, listing: Listing) -> Listing: # Mark as async
        raise NotImplementedError

    @abstractmethod
    async def delete(self, listing_id: uuid.UUID) -> bool: # Mark as async
        raise NotImplementedError # Returns True if deleted

    @abstractmethod
    async def list_and_count_by_criteria( # Combine list & count for efficiency
        self,
        criteria: listing_schemas.ListingSearchQuery, # Use the schema directly
        limit: int = 20,
        offset: int = 0,
    ) -> Tuple[List[Listing], int]: # Mark as async
        raise NotImplementedError

    # Potentially add methods like list_by_owner_id etc.
```

**9. `src/kmerimmo/adapters/database/models/base.py`**

```python
# src/kmerimmo/adapters/database/models/base.py
from kmerimmo.adapters.database.session import Base

# Import models here so Base knows about them for Alembic/create_all
from .user import UserModel
from .listing import ListingModel

__all__ = ["Base", "UserModel", "ListingModel"]

```

**10. `src/kmerimmo/adapters/database/models/user.py`**

```python
# src/kmerimmo/adapters/database/models/user.py
import uuid
from sqlalchemy import Column, String, Boolean, DateTime, Enum as SQLAlchemyEnum
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from kmerimmo.adapters.database.models.base import Base
from kmerimmo.core.entities.enums import UserRole

class UserModel(Base):
    __tablename__ = 'users'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(255), unique=True, index=True, nullable=False)
    first_name = Column(String(50), nullable=True)
    last_name = Column(String(50), nullable=True)
    role = Column(SQLAlchemyEnum(UserRole, name="user_role_enum", create_type=False),
                  nullable=False, default=UserRole.TENANT)
    is_active = Column(Boolean, default=True, nullable=False)
    hashed_password = Column(String(255), nullable=False) # Store hash only

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    # Relationship to listings owned by this user
    listings = relationship("ListingModel", back_populates="owner", cascade="all, delete-orphan")

    def __repr__(self):
        return f"<User(id={self.id}, email='{self.email}', role='{self.role}')>"

```

**11. `src/kmerimmo/adapters/database/models/listing.py`** (Voir code précédent, s'assurer que `to_entity` est retiré ou non utilisé directement par repo, la conversion se fait dans le repo)

```python
# src/kmerimmo/adapters/database/models/listing.py
import uuid
from sqlalchemy import (
    Column, String, Text, Float, Integer, Boolean, DateTime, ForeignKey,
    Enum as SQLAlchemyEnum, Index
)
from sqlalchemy.dialects.postgresql import UUID as PG_UUID, ARRAY
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from sqlalchemy.schema import CheckConstraint

from kmerimmo.adapters.database.models.base import Base
from kmerimmo.core.entities.enums import ListingStatus, ListingType, ListingCategory
# Import HttpUrl for potential default construction if needed (though default=list is better)
# from pydantic import HttpUrl

class ListingModel(Base):
    __tablename__ = 'listings'

    id = Column(PG_UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(PG_UUID(as_uuid=True), ForeignKey('users.id'), nullable=False, index=True)

    title = Column(String(150), nullable=False)
    description = Column(Text, nullable=False)
    price = Column(Float, nullable=False, index=True)
    surface = Column(Float, nullable=False, index=True)
    address = Column(String(255), nullable=False)
    country = Column(String(100), nullable=False)
    city = Column(String(100), nullable=False, index=True)
    zip_code = Column(String(20), nullable=False)
    state = Column(String(100), nullable=False)

    number_of_rooms = Column(Integer, nullable=False)
    year_of_construction = Column(Integer, nullable=True)

    status = Column(SQLAlchemyEnum(ListingStatus, name="listing_status_enum", create_type=False),
                    nullable=False, default=ListingStatus.PENDING, index=True)
    type = Column(SQLAlchemyEnum(ListingType, name="listing_type_enum", create_type=False),
                  nullable=False, index=True)
    category = Column(SQLAlchemyEnum(ListingCategory, name="listing_category_enum", create_type=False),
                      nullable=False, index=True)

    images = Column(ARRAY(String), default=list, nullable=False)
    videos = Column(ARRAY(String), default=list, nullable=False)

    # --- Amenities: Colonnes Booléennes ---
    amenity_wifi = Column(Boolean, default=False, nullable=False)
    amenity_kitchen = Column(Boolean, default=False, nullable=False)
    amenity_bathroom = Column(Boolean, default=False, nullable=False)
    amenity_balcony = Column(Boolean, default=False, nullable=False)
    amenity_electricity_included = Column(Boolean, default=False, nullable=False)
    amenity_air_conditioner = Column(Boolean, default=False, nullable=False)
    amenity_all_charges_included = Column(Boolean, default=False, nullable=False)
    amenity_parking = Column(Boolean, default=False, nullable=False)
    amenity_elevator = Column(Boolean, default=False, nullable=False)
    amenity_security_guard = Column(Boolean, default=False, nullable=False)
    amenity_swimming_pool = Column(Boolean, default=False, nullable=False)
    amenity_garden = Column(Boolean, default=False, nullable=False)
    amenity_terrace = Column(Boolean, default=False, nullable=False)
    amenity_heating = Column(Boolean, default=False, nullable=False)
    amenity_furnished = Column(Boolean, default=False, nullable=False)
    amenity_pets_allowed = Column(Boolean, default=False, nullable=False)
    # --- Fin Amenities ---

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    owner = relationship("UserModel", back_populates="listings")

    __table_args__ = (
        Index('ix_listing_location', 'country', 'city', 'state'),
        Index('ix_listing_price_surface', 'price', 'surface'),
        # Index full-text (exemple pour PostgreSQL, nécessite l'extension pg_trgm)
        # Index('ix_listing_fulltext', 'title', 'description', 'address',
        #       postgresql_using='gin',
        #       postgresql_ops={'title': 'gin_trgm_ops', 'description': 'gin_trgm_ops', 'address': 'gin_trgm_ops'}),
        CheckConstraint('price >= 0', name='check_listing_price_positive'),
        CheckConstraint('surface >= 0', name='check_listing_surface_positive'),
        CheckConstraint('number_of_rooms > 0', name='check_listing_rooms_positive'),
        CheckConstraint('year_of_construction > 1800 OR year_of_construction IS NULL', name='check_listing_year'),
    )

    def __repr__(self):
        return f"<Listing(id={self.id}, title='{self.title}', city='{self.city}')>"

```

**12. `src/kmerimmo/adapters/security/auth.py`**

```python
# src/kmerimmo/adapters/security/auth.py
from datetime import datetime, timedelta, timezone
from typing import Optional, Dict, Any
from passlib.context import CryptContext
from jose import JWTError, jwt
from kmerimmo.config import settings

# --- Password Hashing ---
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verifies a plain password against a stored hash."""
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password: str) -> str:
    """Hashes a plain password."""
    return pwd_context.hash(password)

# --- JWT Token Handling ---
def create_access_token(data: Dict[str, Any], expires_delta: Optional[timedelta] = None) -> str:
    """Creates a JWT access token."""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return encoded_jwt

def decode_access_token(token: str) -> Optional[Dict[str, Any]]:
    """
    Decodes a JWT token.
    Returns the payload if valid and not expired, otherwise None.
    """
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        # Optionally add more validation here (e.g., check token type, audience)
        return payload
    except JWTError:
        # Log the error ideally
        return None

```

**13. `src/kmerimmo/core/exceptions.py`**

```python
# src/kmerimmo/core/exceptions.py
from typing import Any

class CoreException(Exception):
    """Base exception for core application logic errors."""
    def __init__(self, message: str = "An application error occurred."):
        self.message = message
        super().__init__(self.message)

class EntityNotFoundException(CoreException):
    """Raised when an entity cannot be found."""
    def __init__(self, entity_type: str, entity_id: Any):
        self.entity_type = entity_type
        self.entity_id = str(entity_id) # Ensure ID is string for message
        super().__init__(f"{entity_type} with ID '{self.entity_id}' not found.")

class DuplicateEntityException(CoreException):
    """Raised when trying to create an entity that conflicts with an existing one."""
    def __init__(self, entity_type: str, field: str, value: Any):
        self.entity_type = entity_type
        self.field = field
        self.value = str(value)
        super().__init__(f"{entity_type} with {field} '{self.value}' already exists.")

class AuthenticationException(CoreException):
    """Base for authentication errors."""
    pass

class InvalidCredentialsException(AuthenticationException):
    """Raised for bad username/password or inactive user."""
    def __init__(self, message: str = "Invalid credentials provided."):
        super().__init__(message)

class AuthorizationException(CoreException):
    """Raised when user is authenticated but not authorized for an action."""
    def __init__(self, message: str = "You are not authorized to perform this action."):
        super().__init__(message)

class ValidationException(CoreException):
    """Raised for business rule validation errors."""
    def __init__(self, message: str):
        super().__init__(message)

```

**14. `src/kmerimmo/api/schemas/__init__.py`**

```python
# src/kmerimmo/api/schemas/__init__.py
# Make schemas easily importable
from .user_schemas import UserRead, UserCreate, UserUpdate, Token, UserLogin
from .listing_schemas import (
    ListingRead, ListingCreate, ListingUpdate, ListingSearchQuery,
    PaginatedListingResponse, AmenitiesSchema
)

# You can add __all__ if you want to be explicit
# __all__ = [ ... list all imported schemas ... ]

```

**15. `src/kmerimmo/api/schemas/user_schemas.py`**

```python
# src/kmerimmo/api/schemas/user_schemas.py
import uuid
from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr, Field, validator # validator for Pydantic v1/v2 compat if needed
from kmerimmo.core.entities.enums import UserRole

# --- Base Schemas ---
class UserBase(BaseModel):
    email: EmailStr = Field(..., example="user@example.com")
    first_name: Optional[str] = Field(None, min_length=1, max_length=50, example="John")
    last_name: Optional[str] = Field(None, min_length=1, max_length=50, example="Doe")
    role: UserRole = Field(UserRole.TENANT, example=UserRole.OWNER) # Default TENANT

# --- Create Schema ---
class UserCreate(UserBase):
    password: str = Field(..., min_length=8, example="SecureP@ssw0rd")

# --- Update Schema ---
class UserUpdate(BaseModel):
    email: Optional[EmailStr] = Field(None, example="new_user@example.com")
    first_name: Optional[str] = Field(None, min_length=1, max_length=50, example="Johnny")
    last_name: Optional[str] = Field(None, min_length=1, max_length=50, example="Doer")
    role: Optional[UserRole] = Field(None, example=UserRole.ADMIN) # Only Admins should change roles maybe?
    is_active: Optional[bool] = Field(None, example=True)
    password: Optional[str] = Field(None, min_length=8, description="Only set to change password")


# --- Read Schema (for API responses) ---
class UserRead(UserBase):
    id: uuid.UUID
    is_active: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True # Pydantic V2

# --- Authentication Schemas ---
class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

class TokenPayload(BaseModel):
    sub: Optional[str] = None # Subject (user ID)

class UserLogin(BaseModel):
    username: EmailStr # Using email as username
    password: str

```

**16. `src/kmerimmo/api/schemas/listing_schemas.py`**

```python
# src/kmerimmo/api/schemas/listing_schemas.py
import uuid
from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, Field, HttpUrl
from kmerimmo.core.entities.enums import ListingStatus, ListingType, ListingCategory

# --- Amenities Schema for API ---
# Reuse entity or define separately if API differs
# from kmerimmo.core.entities.listing import Amenities as AmenitiesEntity
# class AmenitiesSchema(AmenitiesEntity): pass
class AmenitiesSchema(BaseModel): # Defining separately for clarity
    wifi: bool = False
    kitchen: bool = False
    bathroom: bool = False
    balcony: bool = False
    electricity_included: bool = Field(False, alias="electricityIncluded")
    air_conditioner: bool = Field(False, alias="airConditioner")
    all_charges_included: bool = Field(False, alias="allChargesIncluded")
    parking: bool = False
    elevator: bool = False
    security_guard: bool = Field(False, alias="securityGuard")
    swimming_pool: bool = Field(False, alias="swimmingPool")
    garden: bool = False
    terrace: bool = False
    heating: bool = False
    furnished: bool = False
    pets_allowed: bool = Field(False, alias="petsAllowed")

    class Config:
        populate_by_name = True


# --- Base Listing Schema ---
class ListingBase(BaseModel):
    title: str = Field(..., min_length=5, max_length=150, example="Spacious Apartment Downtown")
    description: str = Field(..., min_length=20, example="Bright and modern apartment with city views.")
    price: float = Field(..., gt=0, example=1200.50)
    surface: float = Field(..., gt=0, example=85.0)
    address: str = Field(..., max_length=255, example="456 Avenue Centrale")
    country: str = Field(..., max_length=100, example="Cameroun")
    city: str = Field(..., max_length=100, example="Douala")
    zip_code: str = Field(..., alias="zipCode", max_length=20, example="00000")
    state: str = Field(..., max_length=100, example="Littoral")
    number_of_rooms: int = Field(..., alias="numberOfRooms", gt=0, example=3)
    year_of_construction: Optional[int] = Field(None, alias="yearOfConstruction", gt=1800, example=2015)
    type: ListingType = Field(..., example=ListingType.APARTMENT)
    category: ListingCategory = Field(..., example=ListingCategory.RENT)
    # Use HttpUrl for validation during creation/update
    images: List[HttpUrl] = Field([], example=["https://example.com/img1.jpg", "https://example.com/img2.png"])
    videos: List[HttpUrl] = Field([], example=["https://example.com/vid1.mp4"])
    amenities: AmenitiesSchema = Field(default_factory=AmenitiesSchema)

    class Config:
        populate_by_name = True
        allow_population_by_field_name = True


# --- Create Schema (Input for POST) ---
class ListingCreate(ListingBase):
    # userId will be injected from the authenticated user
    pass

# --- Update Schema (Input for PUT/PATCH) ---
# For PATCH, make all fields Optional. For PUT, inherit from Base.
class ListingUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=5, max_length=150)
    description: Optional[str] = Field(None, min_length=20)
    price: Optional[float] = Field(None, gt=0)
    surface: Optional[float] = Field(None, gt=0)
    address: Optional[str] = Field(None, max_length=255)
    # Usually location fields are less likely to be updated, but allow if needed
    country: Optional[str] = Field(None, max_length=100)
    city: Optional[str] = Field(None, max_length=100)
    zip_code: Optional[str] = Field(None, alias="zipCode", max_length=20)
    state: Optional[str] = Field(None, max_length=100)
    number_of_rooms: Optional[int] = Field(None, alias="numberOfRooms", gt=0)
    year_of_construction: Optional[int] = Field(None, alias="yearOfConstruction", gt=1800)
    status: Optional[ListingStatus] = None # Allow changing status
    type: Optional[ListingType] = None
    category: Optional[ListingCategory] = None
    images: Optional[List[HttpUrl]] = None
    videos: Optional[List[HttpUrl]] = None
    amenities: Optional[AmenitiesSchema] = None

    class Config:
         populate_by_name = True
         allow_population_by_field_name = True


# --- Read Schema (Output for GET) ---
class ListingRead(ListingBase):
    id: uuid.UUID
    user_id: uuid.UUID = Field(alias="userId")
    status: ListingStatus
    created_at: datetime = Field(alias="createdAt")
    updated_at: datetime = Field(alias="updatedAt")
    # Optional: Include owner info
    # owner: Optional[UserRead] = None # Requires UserRead schema

    class Config:
        from_attributes = True
        populate_by_name = True
        allow_population_by_field_name = True


# --- Search Query Schema (Input for GET /search) ---
class ListingSearchQuery(BaseModel):
    # Location
    country: Optional[str] = Field(None, example="Cameroun")
    city: Optional[str] = Field(None, example="Yaoundé")
    state: Optional[str] = Field(None, example="Centre")
    # Price & Surface
    min_price: Optional[float] = Field(None, alias="minPrice", ge=0)
    max_price: Optional[float] = Field(None, alias="maxPrice", ge=0)
    min_surface: Optional[float] = Field(None, alias="minSurface", ge=0)
    max_surface: Optional[float] = Field(None, alias="maxSurface", ge=0)
    # Property details
    min_rooms: Optional[int] = Field(None, alias="minRooms", ge=1)
    max_rooms: Optional[int] = Field(None, alias="maxRooms", ge=1)
    type: Optional[ListingType] = None
    category: Optional[ListingCategory] = None
    # Status (usually only 'published' for public search)
    status: ListingStatus = Field(ListingStatus.PUBLISHED, example=ListingStatus.PUBLISHED)
    # Amenities (example)
    furnished: Optional[bool] = None
    pets_allowed: Optional[bool] = Field(None, alias="petsAllowed")
    wifi: Optional[bool] = None
    parking: Optional[bool] = None
    # Text search
    q: Optional[str] = Field(None, description="Free text search across title, description, address")

    class Config:
        populate_by_name = True


# --- Paginated Response Schema ---
class PaginatedListingResponse(BaseModel):
    total: int = Field(..., example=150)
    limit: int = Field(..., example=20)
    offset: int = Field(..., example=0)
    results: List[ListingRead]

```

**17. `src/kmerimmo/adapters/database/repositories/sql_user_repository.py`**

```python
# src/kmerimmo/adapters/database/repositories/sql_user_repository.py
import uuid
from typing import Optional
from sqlalchemy.orm import Session
from sqlalchemy.future import select # Use 2.0 style select
from kmerimmo.core.entities.user import User
from kmerimmo.core.ports.repositories import IUserRepository
from kmerimmo.adapters.database.models.user import UserModel
import logging # Import logging

logger = logging.getLogger(__name__) # Get logger instance

# --- Helper for Conversion ---
# Moved outside the class for clarity or keep inside if preferred
def _map_model_to_entity(user_model: UserModel) -> User:
    """Maps SQLAlchemy UserModel to Pydantic User entity."""
    # Use model_validate for Pydantic V2
    return User.model_validate(user_model)

# --- Repository Implementation ---
class SQLUserRepository(IUserRepository):
    def __init__(self, db: Session):
        self.db = db

    async def get_by_id(self, user_id: uuid.UUID) -> Optional[User]:
        logger.debug(f"Fetching user by ID: {user_id}")
        # Use execute with select for SQLAlchemy 2.0 style
        statement = select(UserModel).where(UserModel.id == user_id)
        result = await self.db.execute(statement)
        user_model = result.scalar_one_or_none()
        if user_model:
            logger.debug(f"User found: {user_model.email}")
            return _map_model_to_entity(user_model)
        logger.debug("User not found.")
        return None

    async def get_by_email(self, email: str) -> Optional[User]:
        logger.debug(f"Fetching user by email: {email}")
        statement = select(UserModel).where(UserModel.email == email)
        result = await self.db.execute(statement)
        user_model = result.scalar_one_or_none()
        if user_model:
             logger.debug(f"User found: {user_model.email}")
             return _map_model_to_entity(user_model)
        logger.debug("User not found.")
        return None

    async def add(self, user: User) -> User:
        logger.info(f"Adding new user: {user.email}")
        try:
            # Use model_dump for Pydantic V2
            user_data = user.model_dump()
            user_model = UserModel(**user_data)
            self.db.add(user_model)
            await self.db.commit() # Use await for async commit
            await self.db.refresh(user_model) # Use await for async refresh
            logger.info(f"User added successfully with ID: {user_model.id}")
            return _map_model_to_entity(user_model)
        except Exception as e:
            logger.error(f"Error adding user {user.email}: {e}", exc_info=True)
            await self.db.rollback() # Rollback on error
            raise # Re-raise the exception

    async def update(self, user: User) -> User:
        logger.info(f"Updating user: {user.email} (ID: {user.id})")
        # Fetch existing user model
        statement = select(UserModel).where(UserModel.id == user.id)
        result = await self.db.execute(statement)
        user_model = result.scalar_one_or_none()

        if not user_model:
            # Should not happen if called after validation, but good practice
            logger.warning(f"Attempted to update non-existent user: {user.id}")
            raise ValueError("User not found for update") # Or custom exception

        # Get update data, excluding non-updatable fields and None values
        # exclude_unset=True is crucial for PATCH-like updates
        update_data = user.model_dump(exclude_unset=True, exclude={'id', 'created_at'})
        logger.debug(f"Update data for user {user.id}: {update_data}")

        try:
            for key, value in update_data.items():
                # Only update if the value is actually different (optional optimization)
                if hasattr(user_model, key) and getattr(user_model, key) != value:
                   setattr(user_model, key, value)
                   logger.debug(f"Updating user {user.id} field '{key}'")


            # Explicitly set updated_at if not handled by onupdate (SQLAlchemy 2 might handle it better)
            # user_model.updated_at = datetime.utcnow() # Check if needed

            await self.db.commit()
            await self.db.refresh(user_model)
            logger.info(f"User {user.id} updated successfully.")
            return _map_model_to_entity(user_model)
        except Exception as e:
            logger.error(f"Error updating user {user.id}: {e}", exc_info=True)
            await self.db.rollback()
            raise

```

**18. `src/kmerimmo/adapters/database/repositories/sql_listing_repository.py`**

```python
# src/kmerimmo/adapters/database/repositories/sql_listing_repository.py
import uuid
from typing import Optional, List, Tuple
from sqlalchemy.orm import Session
from sqlalchemy import select, func, update as sql_update, delete as sql_delete, and_
from kmerimmo.core.entities.listing import Listing, Amenities
from kmerimmo.core.ports.repositories import IListingRepository
from kmerimmo.adapters.database.models.listing import ListingModel
from kmerimmo.api.schemas import listing_schemas # OK for search criteria
from pydantic import HttpUrl
import logging

logger = logging.getLogger(__name__)

# --- Helper for Conversion ---
def _map_listing_model_to_entity(listing_model: ListingModel) -> Listing:
    """Maps SQLAlchemy ListingModel to Pydantic Listing entity."""
    # Reconstruct Amenities from individual columns
    amenities_data = {
        "wifi": listing_model.amenity_wifi,
        "kitchen": listing_model.amenity_kitchen,
        "bathroom": listing_model.amenity_bathroom,
        "balcony": listing_model.amenity_balcony,
        # Use alias names for Pydantic model fields
        "electricityIncluded": listing_model.amenity_electricity_included,
        "airConditioner": listing_model.amenity_air_conditioner,
        "allChargesIncluded": listing_model.amenity_all_charges_included,
        "parking": listing_model.amenity_parking,
        "elevator": listing_model.amenity_elevator,
        "securityGuard": listing_model.amenity_security_guard,
        "swimmingPool": listing_model.amenity_swimming_pool,
        "garden": listing_model.amenity_garden,
        "terrace": listing_model.amenity_terrace,
        "heating": listing_model.amenity_heating,
        "furnished": listing_model.amenity_furnished,
        "petsAllowed": listing_model.amenity_pets_allowed,
    }
    amenities_entity = Amenities(**amenities_data)

    # Handle HttpUrl conversion for images/videos
    images = [HttpUrl(url) for url in listing_model.images] if listing_model.images else []
    videos = [HttpUrl(url) for url in listing_model.videos] if listing_model.videos else []


    # Use model_validate for Pydantic V2, manually map fields not 1:1
    listing_entity = Listing(
        id=listing_model.id,
        userId=listing_model.user_id, # Alias handled by Pydantic config
        title=listing_model.title,
        description=listing_model.description,
        price=listing_model.price,
        surface=listing_model.surface,
        address=listing_model.address,
        country=listing_model.country,
        city=listing_model.city,
        zipCode=listing_model.zip_code, # Alias handled by Pydantic config
        state=listing_model.state,
        numberOfRooms=listing_model.number_of_rooms, # Alias handled by Pydantic config
        yearOfConstruction=listing_model.year_of_construction, # Alias handled by Pydantic config
        status=listing_model.status,
        type=listing_model.type,
        category=listing_model.category,
        images=images,
        videos=videos,
        amenities=amenities_entity,
        createdAt=listing_model.created_at, # Alias handled by Pydantic config
        updatedAt=listing_model.updated_at, # Alias handled by Pydantic config
    )
    return listing_entity

# --- Repository Implementation ---
class SQLListingRepository(IListingRepository):
    def __init__(self, db: Session):
        self.db = db

    async def get_by_id(self, listing_id: uuid.UUID) -> Optional[Listing]:
        logger.debug(f"Fetching listing by ID: {listing_id}")
        statement = select(ListingModel).where(ListingModel.id == listing_id)
        result = await self.db.execute(statement)
        listing_model = result.scalar_one_or_none()
        if listing_model:
            logger.debug(f"Listing found: {listing_model.title}")
            return _map_listing_model_to_entity(listing_model)
        logger.debug("Listing not found.")
        return None

    async def add(self, listing: Listing) -> Listing:
        logger.info(f"Adding new listing: {listing.title}")
        try:
            # Convert entity to dict, handling nested Amenities and aliases
            listing_data = listing.model_dump(by_alias=True) # Use by_alias=True for Pydantic V2

            # Map Amenities entity back to individual ORM columns
            amenities_dict = listing_data.pop('amenities', {})
            for amenity_key, model_key in {
                "wifi": "amenity_wifi", "kitchen": "amenity_kitchen", "bathroom": "amenity_bathroom",
                "balcony": "amenity_balcony", "electricityIncluded": "amenity_electricity_included",
                "airConditioner": "amenity_air_conditioner", "allChargesIncluded": "amenity_all_charges_included",
                "parking": "amenity_parking", "elevator": "amenity_elevator",
                "securityGuard": "amenity_security_guard", "swimmingPool": "amenity_swimming_pool",
                "garden": "amenity_garden", "terrace": "amenity_terrace", "heating": "amenity_heating",
                "furnished": "amenity_furnished", "petsAllowed": "amenity_pets_allowed"
            }.items():
                listing_data[model_key] = amenities_dict.get(amenity_key, False)

            # Convert HttpUrl lists back to string lists for ARRAY type
            listing_data['images'] = [str(url) for url in listing_data.get('images', [])]
            listing_data['videos'] = [str(url) for url in listing_data.get('videos', [])]


            # Create ORM model instance
            listing_model = ListingModel(**listing_data)
            self.db.add(listing_model)
            await self.db.commit()
            await self.db.refresh(listing_model)
            logger.info(f"Listing added successfully with ID: {listing_model.id}")
            return _map_listing_model_to_entity(listing_model)
        except Exception as e:
            logger.error(f"Error adding listing {listing.title}: {e}", exc_info=True)
            await self.db.rollback()
            raise

    async def update(self, listing: Listing) -> Listing:
        logger.info(f"Updating listing ID: {listing.id}")

        # Fetch existing model
        statement = select(ListingModel).where(ListingModel.id == listing.id)
        result = await self.db.execute(statement)
        listing_model = result.scalar_one_or_none()

        if not listing_model:
            logger.warning(f"Attempted to update non-existent listing: {listing.id}")
            raise ValueError("Listing not found for update")

        # Get update data from entity
        # Use exclude_unset=True for PATCH-like behavior if called from PATCH endpoint
        update_data = listing.model_dump(exclude_unset=True, by_alias=True, exclude={'id', 'userId', 'createdAt'})
        logger.debug(f"Update data for listing {listing.id}: {update_data}")

        try:
            # Map fields, including amenities and images/videos
            for key, value in update_data.items():
                # Map amenity fields
                amenity_map = {
                    "wifi": "amenity_wifi", "kitchen": "amenity_kitchen", # ... add all others
                    "petsAllowed": "amenity_pets_allowed"
                }
                if key == 'amenities' and isinstance(value, dict):
                     for amenity_alias, model_field in amenity_map.items():
                         if amenity_alias in value:
                             setattr(listing_model, model_field, value[amenity_alias])
                elif key == 'images' and isinstance(value, list):
                     listing_model.images = [str(url) for url in value]
                elif key == 'videos' and isinstance(value, list):
                     listing_model.videos = [str(url) for url in value]
                elif hasattr(listing_model, key): # Direct mapping for other fields
                     setattr(listing_model, key, value)
                # Handle aliases not directly mapping if necessary (though populate_by_name helps)

            await self.db.commit()
            await self.db.refresh(listing_model)
            logger.info(f"Listing {listing.id} updated successfully.")
            return _map_listing_model_to_entity(listing_model)

        except Exception as e:
            logger.error(f"Error updating listing {listing.id}: {e}", exc_info=True)
            await self.db.rollback()
            raise

    async def delete(self, listing_id: uuid.UUID) -> bool:
        logger.info(f"Attempting to delete listing ID: {listing_id}")
        statement = sql_delete(ListingModel).where(ListingModel.id == listing_id)
        try:
            result = await self.db.execute(statement)
            await self.db.commit()
            deleted_count = result.rowcount
            if deleted_count > 0:
                logger.info(f"Listing {listing_id} deleted successfully.")
                return True
            else:
                logger.warning(f"Listing {listing_id} not found for deletion.")
                return False
        except Exception as e:
            logger.error(f"Error deleting listing {listing_id}: {e}", exc_info=True)
            await self.db.rollback()
            raise

    async def list_and_count_by_criteria(
        self,
        criteria: listing_schemas.ListingSearchQuery,
        limit: int = 20,
        offset: int = 0,
    ) -> Tuple[List[Listing], int]:
        logger.debug(f"Searching listings with criteria: {criteria.model_dump()}, limit={limit}, offset={offset}")

        # Base query for selecting listings
        base_query = select(ListingModel)
        # Base query for counting
        count_query = select(func.count()).select_from(ListingModel)

        # Apply filters dynamically
        filters = []
        if criteria.country:
            filters.append(ListingModel.country == criteria.country)
        if criteria.city:
            filters.append(ListingModel.city == criteria.city)
        if criteria.state:
            filters.append(ListingModel.state == criteria.state)
        if criteria.min_price is not None:
            filters.append(ListingModel.price >= criteria.min_price)
        if criteria.max_price is not None:
            filters.append(ListingModel.price <= criteria.max_price)
        if criteria.min_surface is not None:
             filters.append(ListingModel.surface >= criteria.min_surface)
        if criteria.max_surface is not None:
             filters.append(ListingModel.surface <= criteria.max_surface)
        if criteria.min_rooms is not None:
             filters.append(ListingModel.number_of_rooms >= criteria.min_rooms)
        if criteria.max_rooms is not None:
             filters.append(ListingModel.number_of_rooms <= criteria.max_rooms)
        if criteria.type:
            filters.append(ListingModel.type == criteria.type)
        if criteria.category:
            filters.append(ListingModel.category == criteria.category)
        if criteria.status: # Should usually be 'published' by default in schema
            filters.append(ListingModel.status == criteria.status)

        # --- Filter by Amenities ---
        amenity_map = {
            "wifi": ListingModel.amenity_wifi, "kitchen": ListingModel.amenity_kitchen,
            "furnished": ListingModel.amenity_furnished, "petsAllowed": ListingModel.amenity_pets_allowed,
            "parking": ListingModel.amenity_parking
             # ... add all others specified in ListingSearchQuery ...
        }
        for key, model_field in amenity_map.items():
             value = getattr(criteria, key, None)
             if value is not None: # If the amenity filter is present
                 filters.append(model_field == value) # filter for true or false

        # --- Text Search (Example for PostgreSQL using ilike) ---
        if criteria.q:
            search_term = f"%{criteria.q}%"
            filters.append(
                (ListingModel.title.ilike(search_term)) |
                (ListingModel.description.ilike(search_term)) |
                (ListingModel.address.ilike(search_term)) |
                (ListingModel.city.ilike(search_term)) # Add other relevant fields
            )

        # Apply filters to both queries
        if filters:
            combined_filters = and_(*filters)
            base_query = base_query.where(combined_filters)
            count_query = count_query.where(combined_filters)

        # --- Execute Count Query ---
        total_count_result = await self.db.execute(count_query)
        total_count = total_count_result.scalar_one()
        logger.debug(f"Total count found: {total_count}")

        # --- Execute List Query with Pagination and Ordering ---
        list_query = base_query.order_by(ListingModel.created_at.desc()).offset(offset).limit(limit)
        results = await self.db.execute(list_query)
        listing_models = results.scalars().all()

        # Map results to entities
        listings = [_map_listing_model_to_entity(model) for model in listing_models]
        logger.debug(f"Returning {len(listings)} listings for offset {offset}, limit {limit}.")

        return listings, total_count
```

**19. `src/kmerimmo/core/use_cases/*_use_cases.py`** (Implémentez la logique métier ici, appelant les méthodes async des repositories)

*   **`user_use_cases.py`**

    ```python
    # src/kmerimmo/core/use_cases/user_use_cases.py
    import uuid
    import logging
    from kmerimmo.core.entities.user import User
    from kmerimmo.core.ports.repositories import IUserRepository
    from kmerimmo.adapters.security.auth import get_password_hash, verify_password, create_access_token
    from kmerimmo.core.exceptions import DuplicateEntityException, InvalidCredentialsException, EntityNotFoundException
    # Import schemas from api layer - pragmatic approach for now
    from kmerimmo.api import schemas

    logger = logging.getLogger(__name__)

    class RegisterUserUseCase:
        def __init__(self, user_repo: IUserRepository):
            self.user_repo = user_repo

        async def execute(self, user_create: schemas.UserCreate) -> User:
            logger.info(f"Executing RegisterUserUseCase for email: {user_create.email}")
            existing_user = await self.user_repo.get_by_email(user_create.email)
            if existing_user:
                logger.warning(f"Registration attempt failed: email {user_create.email} already exists.")
                raise DuplicateEntityException("User", "email", user_create.email)

            hashed_password = get_password_hash(user_create.password)

            # Create domain entity
            user_entity = User(
                email=user_create.email,
                hashed_password=hashed_password,
                first_name=user_create.first_name,
                last_name=user_create.last_name,
                role=user_create.role,
                is_active=True # Default to active on registration
            )

            # Add via repository
            created_user = await self.user_repo.add(user_entity)
            logger.info(f"User registered successfully: {created_user.email} (ID: {created_user.id})")
            # Return the created user entity (without hashed password if necessary, Pydantic handles this)
            return created_user

    class LoginUserUseCase:
        def __init__(self, user_repo: IUserRepository):
            self.user_repo = user_repo

        async def execute(self, user_login: schemas.UserLogin) -> str:
            logger.info(f"Executing LoginUserUseCase for user: {user_login.username}")
            user = await self.user_repo.get_by_email(user_login.username)

            if not user:
                logger.warning(f"Login failed: User {user_login.username} not found.")
                raise InvalidCredentialsException("Incorrect email or password.")

            if not verify_password(user_login.password, user.hashed_password):
                 logger.warning(f"Login failed: Incorrect password for user {user_login.username}.")
                 raise InvalidCredentialsException("Incorrect email or password.")

            if not user.is_active:
                 logger.warning(f"Login failed: User {user_login.username} is inactive.")
                 raise InvalidCredentialsException("Inactive user.")

            # Create JWT
            access_token = create_access_token(data={"sub": str(user.id), "role": user.role.value}) # Include role in token maybe
            logger.info(f"Login successful for user: {user.email}")
            return access_token

    class GetUserUseCase:
        def __init__(self, user_repo: IUserRepository):
            self.user_repo = user_repo

        async def execute(self, user_id: uuid.UUID) -> User:
            logger.info(f"Executing GetUserUseCase for user ID: {user_id}")
            user = await self.user_repo.get_by_id(user_id)
            if not user:
                 logger.warning(f"GetUserUseCase failed: User {user_id} not found.")
                 raise EntityNotFoundException("User", user_id)
            logger.info(f"User found: {user.email}")
            return user

    # Add UpdateUserUseCase if needed, handling password change etc.
    ```

*   **`listing_use_cases.py`**

    ```python
    # src/kmerimmo/core/use_cases/listing_use_cases.py
    import uuid
    import logging
    from typing import Optional
    from kmerimmo.core.entities.listing import Listing
    from kmerimmo.core.entities.user import User
    from kmerimmo.core.entities.enums import ListingStatus, UserRole
    from kmerimmo.core.ports.repositories import IListingRepository
    from kmerimmo.core.exceptions import EntityNotFoundException, AuthorizationException, ValidationException
    from kmerimmo.api import schemas # Pragmatic approach

    logger = logging.getLogger(__name__)

    class CreateListingUseCase:
        def __init__(self, listing_repo: IListingRepository):
            self.listing_repo = listing_repo

        async def execute(self, listing_create: schemas.ListingCreate, owner: User) -> Listing:
            logger.info(f"Executing CreateListingUseCase for owner: {owner.email}")
            # Business logic: Only owners or admins can create? (Check owner.role)
            # if owner.role not in [UserRole.OWNER, UserRole.ADMIN]:
            #     raise AuthorizationException("User must be an OWNER or ADMIN to create listings.")

            # Create Listing entity from schema + owner info
            listing_entity = Listing(
                user_id=owner.id,
                status=ListingStatus.PENDING, # Default status on creation
                **listing_create.model_dump() # Pydantic V2
            )

            # Add via repository
            created_listing = await self.listing_repo.add(listing_entity)
            logger.info(f"Listing created successfully: {created_listing.title} (ID: {created_listing.id})")
            return created_listing

    class GetListingUseCase:
        def __init__(self, listing_repo: IListingRepository):
            self.listing_repo = listing_repo

        async def execute(self, listing_id: uuid.UUID) -> Listing:
            logger.info(f"Executing GetListingUseCase for ID: {listing_id}")
            listing = await self.listing_repo.get_by_id(listing_id)
            if not listing:
                 logger.warning(f"GetListingUseCase failed: Listing {listing_id} not found.")
                 raise EntityNotFoundException("Listing", listing_id)

            # Business Logic: Check status for public view?
            # if listing.status != ListingStatus.PUBLISHED:
            #    # Might need user role check here for non-public statuses
            #    logger.warning(f"Attempt to access non-published listing {listing_id} without auth.")
            #    raise AuthorizationException("Listing not available.") # Or NotFound?

            logger.info(f"Listing found: {listing.title}")
            return listing

    class UpdateListingUseCase:
        def __init__(self, listing_repo: IListingRepository):
            self.listing_repo = listing_repo

        async def execute(
            self,
            listing_id: uuid.UUID,
            listing_update: schemas.ListingUpdate,
            current_user: User
        ) -> Listing:
            logger.info(f"Executing UpdateListingUseCase for ID: {listing_id} by user {current_user.email}")
            existing_listing = await self.listing_repo.get_by_id(listing_id)
            if not existing_listing:
                 logger.warning(f"Update failed: Listing {listing_id} not found.")
                 raise EntityNotFoundException("Listing", listing_id)

            # Authorization: Check if current user is owner or admin
            if existing_listing.user_id != current_user.id and current_user.role != UserRole.ADMIN:
                logger.error(f"Authorization failed: User {current_user.email} cannot update listing {listing_id}.")
                raise AuthorizationException("You cannot update this listing.")

            # Create an updated entity based on existing + updates
            # Pydantic's update_forward_refs or manual merge might be needed
            # Simple approach: load existing into model, update fields, validate
            update_data = listing_update.model_dump(exclude_unset=True) # Pydantic V2

            # Apply updates to the fetched entity
            updated_entity = existing_listing.model_copy(update=update_data) # Pydantic V2 model_copy

            # Add validation logic here if needed (e.g., status transitions)
            if 'status' in update_data and not self._is_valid_status_transition(existing_listing.status, updated_entity.status):
                 raise ValidationException(f"Invalid status transition from {existing_listing.status} to {updated_entity.status}")

            # Update via repository
            final_listing = await self.listing_repo.update(updated_entity)
            logger.info(f"Listing {listing_id} updated successfully.")
            return final_listing

        def _is_valid_status_transition(self, old_status: ListingStatus, new_status: ListingStatus) -> bool:
            # Implement allowed status change logic (e.g., PENDING -> PUBLISHED)
            allowed_transitions = {
                ListingStatus.PENDING: [ListingStatus.PUBLISHED, ListingStatus.ARCHIVED],
                ListingStatus.PUBLISHED: [ListingStatus.RENTED, ListingStatus.SOLD, ListingStatus.ARCHIVED],
                # ... add other valid transitions
            }
            return new_status in allowed_transitions.get(old_status, []) or old_status == new_status


    class DeleteListingUseCase:
        def __init__(self, listing_repo: IListingRepository):
            self.listing_repo = listing_repo

        async def execute(self, listing_id: uuid.UUID, current_user: User) -> bool:
            logger.info(f"Executing DeleteListingUseCase for ID: {listing_id} by user {current_user.email}")
            existing_listing = await self.listing_repo.get_by_id(listing_id) # Check existence and ownership first
            if not existing_listing:
                logger.warning(f"Delete failed: Listing {listing_id} not found.")
                raise EntityNotFoundException("Listing", listing_id)

            # Authorization
            if existing_listing.user_id != current_user.id and current_user.role != UserRole.ADMIN:
                logger.error(f"Authorization failed: User {current_user.email} cannot delete listing {listing_id}.")
                raise AuthorizationException("You cannot delete this listing.")

            # Perform deletion (consider soft delete: update status to DELETED/ARCHIVED instead)
            # deleted = await self.listing_repo.delete(listing_id)

            # --- Soft Delete Example ---
            try:
                 existing_listing.status = ListingStatus.ARCHIVED # Or DELETED
                 await self.listing_repo.update(existing_listing)
                 deleted = True
                 logger.info(f"Listing {listing_id} marked as {existing_listing.status}.")
            except Exception as e:
                 logger.error(f"Soft delete failed for listing {listing_id}: {e}")
                 deleted = False # Indicate failure


            if not deleted:
                 logger.error(f"Deletion failed for listing {listing_id} in repository.")
                 # Maybe raise a different exception?
                 return False

            logger.info(f"Listing {listing_id} deletion process completed (status={deleted}).")
            return deleted

    ```

*   **`search_use_cases.py`**

    ```python
    # src/kmerimmo/core/use_cases/search_use_cases.py
    import logging
    from typing import List, Tuple
    from kmerimmo.core.entities.listing import Listing
    from kmerimmo.core.ports.repositories import IListingRepository
    from kmerimmo.api import schemas # Pragmatic approach

    logger = logging.getLogger(__name__)

    class SearchListingsUseCase:
        def __init__(self, listing_repo: IListingRepository):
            self.listing_repo = listing_repo

        async def execute(
            self,
            search_params: schemas.ListingSearchQuery,
            limit: int = 20,
            offset: int = 0
        ) -> Tuple[List[Listing], int]:
            logger.info(f"Executing SearchListingsUseCase with params: {search_params.model_dump()}, limit={limit}, offset={offset}")

            # Usually enforce 'PUBLISHED' status for public searches unless overridden
            if search_params.status is None: # If not specified by client, default to published
                search_params.status = schemas.ListingStatus.PUBLISHED
                logger.debug("Defaulting search status to PUBLISHED.")

            # Call repository method
            listings, total = await self.listing_repo.list_and_count_by_criteria(
                criteria=search_params,
                limit=limit,
                offset=offset
            )

            logger.info(f"Search returned {len(listings)} listings (total: {total}).")
            return listings, total

    ```

**20. `src/kmerimmo/api/dependencies.py`**

```python
# src/kmerimmo/api/dependencies.py
import uuid
import logging
from typing import Optional, Generator # Import Generator
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session # Use the alias defined in session.py if needed
from jose import JWTError

from kmerimmo.adapters.database.session import get_db
from kmerimmo.core.ports.repositories import IUserRepository, IListingRepository
from kmerimmo.adapters.database.repositories.sql_user_repository import SQLUserRepository
from kmerimmo.adapters.database.repositories.sql_listing_repository import SQLListingRepository
from kmerimmo.core.use_cases import user_use_cases, listing_use_cases, search_use_cases
from kmerimmo.adapters.security.auth import decode_access_token
from kmerimmo.core.entities.user import User
from kmerimmo.core.entities.enums import UserRole
from kmerimmo.api.schemas import TokenPayload
from kmerimmo.config import settings # Needed? Maybe not directly

logger = logging.getLogger(__name__)

# --- OAuth2 Scheme ---
# Point tokenUrl to your actual login endpoint
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/users/login")

# --- Repository Providers ---
# Make these async if your repo methods are async
async def get_user_repository(db: Session = Depends(get_db)) -> IUserRepository:
    # Note: If SQLUserRepository methods were synchronous, this doesn't need async.
    # But since we marked repo methods async, keep this async.
    return SQLUserRepository(db)

async def get_listing_repository(db: Session = Depends(get_db)) -> IListingRepository:
    return SQLListingRepository(db)

# --- Use Case Providers ---
# Make these async if they depend on async repositories
async def get_register_user_use_case(user_repo: IUserRepository = Depends(get_user_repository)) -> user_use_cases.RegisterUserUseCase:
    return user_use_cases.RegisterUserUseCase(user_repo)

async def get_login_user_use_case(user_repo: IUserRepository = Depends(get_user_repository)) -> user_use_cases.LoginUserUseCase:
    return user_use_cases.LoginUserUseCase(user_repo)

async def get_get_user_use_case(user_repo: IUserRepository = Depends(get_user_repository)) -> user_use_cases.GetUserUseCase:
    return user_use_cases.GetUserUseCase(user_repo)

async def get_create_listing_use_case(listing_repo: IListingRepository = Depends(get_listing_repository)) -> listing_use_cases.CreateListingUseCase:
    return listing_use_cases.CreateListingUseCase(listing_repo)

async def get_get_listing_use_case(listing_repo: IListingRepository = Depends(get_listing_repository)) -> listing_use_cases.GetListingUseCase:
    return listing_use_cases.GetListingUseCase(listing_repo)

async def get_update_listing_use_case(listing_repo: IListingRepository = Depends(get_listing_repository)) -> listing_use_cases.UpdateListingUseCase:
    return listing_use_cases.UpdateListingUseCase(listing_repo)

async def get_delete_listing_use_case(listing_repo: IListingRepository = Depends(get_listing_repository)) -> listing_use_cases.DeleteListingUseCase:
    return listing_use_cases.DeleteListingUseCase(listing_repo)

async def get_search_listings_use_case(listing_repo: IListingRepository = Depends(get_listing_repository)) -> search_use_cases.SearchListingsUseCase:
    return search_use_cases.SearchListingsUseCase(listing_repo)


# --- Authentication Dependency ---
credentials_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
)

async def get_current_user(
    token: str = Depends(oauth2_scheme),
    user_repo: IUserRepository = Depends(get_user_repository) # Inject repo here
) -> User:
    """Decodes token, validates payload, fetches user from DB."""
    payload = decode_access_token(token)
    if payload is None:
        logger.warning("Token decoding failed or token is invalid.")
        raise credentials_exception

    # Use TokenPayload schema for validation (optional but good)
    try:
        token_data = TokenPayload(**payload)
    except Exception: # Catches Pydantic validation errors
         logger.warning("Token payload validation failed.")
         raise credentials_exception

    if token_data.sub is None:
        logger.warning("Token payload missing 'sub' (user ID).")
        raise credentials_exception

    try:
        user_id = uuid.UUID(token_data.sub)
    except ValueError:
        logger.warning(f"Invalid UUID format in token 'sub': {token_data.sub}")
        raise credentials_exception

    user = await user_repo.get_by_id(user_id)
    if user is None:
        logger.warning(f"User specified in token (ID: {user_id}) not found in DB.")
        raise credentials_exception

    logger.debug(f"Authenticated user retrieved: {user.email} (ID: {user.id})")
    return user

async def get_current_active_user(
    current_user: User = Depends(get_current_user)
) -> User:
    """Checks if the user retrieved from the token is active."""
    if not current_user.is_active:
        logger.warning(f"Authentication attempt by inactive user: {current_user.email}")
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Inactive user")
    return current_user

# --- Authorization Dependencies (Examples) ---
async def get_admin_user(
    current_user: User = Depends(get_current_active_user)
) -> User:
    """Requires the current user to have the ADMIN role."""
    if current_user.role != UserRole.ADMIN:
         logger.warning(f"Admin access denied for user: {current_user.email} (Role: {current_user.role})")
         raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Administrator privileges required.")
    return current_user

# Dependency to check if the user is the owner of a listing or an admin
# Needs the listing_id from the path parameter
async def get_listing_owner_or_admin_dependency(
    listing_id: uuid.UUID, # Get listing_id from path
    current_user: User = Depends(get_current_active_user),
    get_listing_uc: listing_use_cases.GetListingUseCase = Depends(get_get_listing_use_case) # Use Case to fetch
) -> User:
    """
    Ensures the current user is the owner of the listing or an admin.
    Returns the current user if authorized.
    """
    try:
        listing = await get_listing_uc.execute(listing_id)
    except EntityNotFoundException:
         # Re-raise as HTTPException if listing not found by ID path parameter
         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Listing not found")

    if listing.user_id != current_user.id and current_user.role != UserRole.ADMIN:
        logger.warning(f"Authorization failed: User {current_user.email} tried to access/modify listing {listing_id} owned by {listing.user_id}")
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized to access this listing")

    return current_user # Return the user object if authorized

```

**21. `src/kmerimmo/api/routers/users.py`**

```python
# src/kmerimmo/api/routers/users.py
import uuid
import logging
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from kmerimmo.api import schemas
from kmerimmo.core.use_cases import user_use_cases
from kmerimmo.api.dependencies import (
    get_register_user_use_case,
    get_login_user_use_case,
    get_get_user_use_case,
    get_current_active_user,
    get_admin_user, # Example for admin-only routes
)
from kmerimmo.core.exceptions import DuplicateEntityException, InvalidCredentialsException, EntityNotFoundException
from kmerimmo.core.entities.user import User

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/users",
    tags=["Users"],
    responses={404: {"description": "Not found"}}, # Default response for this router
)

@router.post(
    "/register",
    response_model=schemas.UserRead,
    status_code=status.HTTP_201_CREATED,
    summary="Register a new user",
    description="Creates a new user account. Default role is TENANT."
)
async def register_user_endpoint(
    user_in: schemas.UserCreate,
    register_use_case: user_use_cases.RegisterUserUseCase = Depends(get_register_user_use_case)
):
    try:
        user = await register_use_case.execute(user_in)
        # Note: UserRead schema excludes hashed_password
        return user
    except DuplicateEntityException as e:
        logger.warning(f"Registration failed: {e}")
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    except Exception as e:
        logger.exception("Unexpected error during user registration.") # Log full traceback
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="An internal error occurred.")


@router.post(
    "/login",
    response_model=schemas.Token,
    summary="User Login",
    description="Authenticates a user and returns a JWT access token."
)
async def login_for_access_token_endpoint(
    form_data: OAuth2PasswordRequestForm = Depends(),
    login_use_case: user_use_cases.LoginUserUseCase = Depends(get_login_user_use_case)
):
    # Adapt OAuth2 form data to our UserLogin schema
    user_login_schema = schemas.UserLogin(username=form_data.username, password=form_data.password)
    try:
        access_token = await login_use_case.execute(user_login_schema)
        return {"access_token": access_token, "token_type": "bearer"}
    except InvalidCredentialsException as e:
         logger.warning(f"Login attempt failed for {form_data.username}: {e}")
         # Raise with 401 status for authentication failures
         raise HTTPException(
             status_code=status.HTTP_401_UNAUTHORIZED,
             detail=str(e),
             headers={"WWW-Authenticate": "Bearer"},
         )
    except Exception as e:
        logger.exception("Unexpected error during user login.")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="An internal error occurred.")


@router.get(
    "/me",
    response_model=schemas.UserRead,
    summary="Get Current User",
    description="Returns the profile information of the currently authenticated user."
)
async def read_users_me_endpoint(
    current_user: User = Depends(get_current_active_user) # Depends ensures authentication
):
    """Returns the currently logged-in user."""
    return current_user


@router.get(
    "/{user_id}",
    response_model=schemas.UserRead,
    summary="Get User by ID",
    description="Retrieves profile information for a specific user by their ID. (Admin access required).",
    dependencies=[Depends(get_admin_user)] # Example: Only admins can view arbitrary user profiles
)
async def read_user_endpoint(
    user_id: uuid.UUID,
    get_user_use_case: user_use_cases.GetUserUseCase = Depends(get_get_user_use_case),
    # current_user: User = Depends(get_current_active_user) # Already checked by get_admin_user
):
    """Retrieves a user by their ID."""
    try:
        user = await get_user_use_case.execute(user_id)
        return user
    except EntityNotFoundException as e:
        logger.warning(f"Admin request for non-existent user {user_id}.")
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=str(e))
    except Exception as e:
        logger.exception(f"Unexpected error retrieving user {user_id}.")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="An internal error occurred.")

# --- Potential additional endpoints ---
# @router.put("/me", response_model=schemas.UserRead, summary="Update Current User")
# async def update_current_user(...): ...

# @router.put("/{user_id}", response_model=schemas.UserRead, summary="Update User by ID (Admin)", dependencies=[Depends(get_admin_user)])
# async def update_user_by_id(...): ...

```

**22. `src/kmerimmo/api/routers/listings.py`**

```python
# src/kmerimmo/api/routers/listings.py
import uuid
import logging
from typing import List # Import List for response model
from fastapi import APIRouter, Depends, HTTPException, status, Query # Import Query

from kmerimmo.api import schemas
from kmerimmo.core.use_cases import listing_use_cases
from kmerimmo.api.dependencies import (
    get_create_listing_use_case,
    get_get_listing_use_case,
    get_update_listing_use_case,
    get_delete_listing_use_case,
    get_current_active_user,
    get_listing_owner_or_admin_dependency, # Dependency for checking ownership/admin
)
from kmerimmo.core.exceptions import EntityNotFoundException, AuthorizationException, ValidationException
from kmerimmo.core.entities.user import User # Import User

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/listings",
    tags=["Listings"],
    responses={404: {"description": "Listing not found"}},
)

@router.post(
    "/",
    response_model=schemas.ListingRead,
    status_code=status.HTTP_201_CREATED,
    summary="Create a new listing",
    description="Adds a new property listing to the platform. Requires authentication.",
)
async def create_listing_endpoint(
    listing_in: schemas.ListingCreate,
    create_listing_uc: listing_use_cases.CreateListingUseCase = Depends(get_create_listing_use_case),
    current_user: User = Depends(get_current_active_user), # Get authenticated user
):
    try:
        listing = await create_listing_uc.execute(listing_in, current_user)
        return listing
    except AuthorizationException as e:
         logger.warning(f"Listing creation auth failed for user {current_user.email}: {e}")
         raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=str(e))
    except ValidationException as e:
         logger.warning(f"Listing creation validation failed: {e}")
         raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    except Exception as e:
        logger.exception("Unexpected error during listing creation.")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="An internal error occurred.")


@router.get(
    "/{listing_id}",
    response_model=schemas.ListingRead,
    summary="Get Listing Details",
    description="Retrieves the details of a specific property listing by its ID."
)
async def read_listing_endpoint(
    listing_id: uuid.UUID,
    get_listing_uc: listing_use_cases.GetListingUseCase = Depends(get_get_listing_use_case),
    # No auth needed for public view, but UC might check status
):
    try:
        listing = await get_listing_uc.execute(listing_id)
        # Ensure only published listings are returned to unauthenticated users if needed
        # This logic could be in the Use Case or here
        # if listing.status != schemas.ListingStatus.PUBLISHED:
        #     # Consider raising 404 instead of 403 for public access
        #     raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Listing not found or not available")
        return listing
    except EntityNotFoundException as e:
        logger.info(f"Listing {listing_id} not found for public view.")
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=str(e))
    except AuthorizationException as e: # If UC raises auth error for non-public status
         logger.warning(f"Unauthorized access attempt for listing {listing_id}: {e}")
         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Listing not found or not available") # Mask as 404
    except Exception as e:
        logger.exception(f"Unexpected error retrieving listing {listing_id}.")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="An internal error occurred.")


@router.put(
    "/{listing_id}",
    response_model=schemas.ListingRead,
    summary="Update a Listing",
    description="Updates the details of an existing listing. Requires ownership or admin rights.",
    # Use the dependency to check ownership/admin *before* the endpoint logic runs
    dependencies=[Depends(get_listing_owner_or_admin_dependency)]
)
async def update_listing_endpoint(
    listing_id: uuid.UUID, # Already validated by dependency that listing exists
    listing_in: schemas.ListingUpdate, # Use the update schema
    update_listing_uc: listing_use_cases.UpdateListingUseCase = Depends(get_update_listing_use_case),
    current_user: User = Depends(get_current_active_user), # Get user again (dependency returns it too)
):
    """
    Updates a listing. Authorization (owner/admin) is handled by the dependency.
    The dependency also ensures the listing exists.
    """
    try:
        # Pass listing_id, update data, and the user performing the action
        updated_listing = await update_listing_uc.execute(listing_id, listing_in, current_user)
        return updated_listing
    except EntityNotFoundException as e:
         # Should be caught by dependency, but handle defensively
         logger.error(f"Consistency error: Listing {listing_id} not found during update after dependency check.")
         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=str(e))
    except AuthorizationException as e:
         # Should be caught by dependency, but handle defensively
         logger.error(f"Consistency error: Auth failed during update for listing {listing_id} after dependency check.")
         raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=str(e))
    except ValidationException as e:
         logger.warning(f"Listing update validation failed for {listing_id}: {e}")
         raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    except Exception as e:
        logger.exception(f"Unexpected error updating listing {listing_id}.")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="An internal error occurred.")


@router.delete(
    "/{listing_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Delete a Listing",
    description="Deletes a listing. Requires ownership or admin rights.",
    dependencies=[Depends(get_listing_owner_or_admin_dependency)]
)
async def delete_listing_endpoint(
    listing_id: uuid.UUID, # Existence and ownership checked by dependency
    delete_listing_uc: listing_use_cases.DeleteListingUseCase = Depends(get_delete_listing_use_case),
    current_user: User = Depends(get_current_active_user), # Get user performing action
):
    """
    Deletes a listing (or marks as deleted/archived).
    Authorization (owner/admin) is handled by the dependency.
    """
    try:
        success = await delete_listing_uc.execute(listing_id, current_user)
        if not success:
            # This might indicate an internal issue if dependency passed but delete failed
            logger.error(f"Listing deletion failed internally for ID {listing_id} despite passing checks.")
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Listing could not be deleted.")
        # Return No Content on success
        return None # FastAPI handles 204 automatically when None is returned
    except EntityNotFoundException:
        # Should be caught by dependency
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Listing not found")
    except AuthorizationException:
        # Should be caught by dependency
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized to delete this listing")
    except Exception as e:
        logger.exception(f"Unexpected error deleting listing {listing_id}.")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="An internal error occurred during deletion.")

# --- Endpoint to list listings (simple version, advanced search is separate) ---
# This could be part of the search router or a basic list here
@router.get(
    "/",
    response_model=List[schemas.ListingRead], # Return a list
    summary="List Public Listings",
    description="Retrieves a list of publicly available listings (status='published'). Use /search/listings for advanced filtering."
)
async def list_public_listings_endpoint(
    skip: int = Query(0, ge=0, description="Number of listings to skip"),
    limit: int = Query(20, ge=1, le=100, description="Maximum number of listings to return"),
    # Inject the search use case, but provide fixed criteria here
    search_listings_uc: search_use_cases.SearchListingsUseCase = Depends(get_search_listings_use_case),
):
    # Use the search use case but force status to published and use basic pagination
    search_criteria = schemas.ListingSearchQuery(status=schemas.ListingStatus.PUBLISHED)
    try:
        listings, total_count = await search_listings_uc.execute(
            search_params=search_criteria,
            limit=limit,
            offset=skip
        )
        # We only return the list here, not the count, matching List[ListingRead]
        return listings
    except Exception as e:
        logger.exception("Unexpected error listing public listings.")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="An internal error occurred.")

```

**23. `src/kmerimmo/api/routers/search.py`**

```python
# src/kmerimmo/api/routers/search.py
import logging
from fastapi import APIRouter, Depends, Query, HTTPException

from kmerimmo.api import schemas
from kmerimmo.core.use_cases import search_use_cases
from kmerimmo.api.dependencies import get_search_listings_use_case

logger = logging.getLogger(__name__)

router = APIRouter(
    prefix="/search",
    tags=["Search"],
    responses={500: {"description": "Internal server error during search"}},
)

@router.get(
    "/listings",
    response_model=schemas.PaginatedListingResponse,
    summary="Search Listings by Criteria",
    description="Performs an advanced search for listings based on various filter criteria and returns paginated results."
)
async def search_listings_endpoint(
    # Use Depends() with the schema to automatically parse query parameters
    search_params: schemas.ListingSearchQuery = Depends(),
    # Standard pagination parameters
    limit: int = Query(20, ge=1, le=100, description="Number of results per page"),
    offset: int = Query(0, ge=0, description="Offset for pagination (number of results to skip)"),
    # Inject the use case
    search_use_case: search_use_cases.SearchListingsUseCase = Depends(get_search_listings_use_case)
):
    """
    Searches for listings using query parameters mapped by `ListingSearchQuery`.

    Example: `/api/v1/search/listings?city=Douala&minPrice=50000&maxPrice=150000&furnished=true&limit=10`
    """
    logger.info(f"Received listing search request with params: {search_params.model_dump()}, limit={limit}, offset={offset}")
    try:
        listings, total_count = await search_use_case.execute(
            search_params=search_params,
            limit=limit,
            offset=offset
        )
        return {
            "total": total_count,
            "limit": limit,
            "offset": offset,
            "results": listings
        }
    except Exception as e:
        logger.exception("An error occurred during listing search.") # Log the full exception
        # Generic error for the client
        raise HTTPException(status_code=500, detail="An error occurred during the search.")

```

**24. `src/kmerimmo/main.py`**

```python
# src/kmerimmo/main.py
import logging
import logging.config # Import config
from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from kmerimmo.api.routers import users, listings, search
from kmerimmo.adapters.database.session import engine, Base # Import Base and engine
from kmerimmo.core.exceptions import CoreException, EntityNotFoundException, AuthorizationException, ValidationException, DuplicateEntityException, AuthenticationException
from kmerimmo.config import settings # Import settings if needed for CORS origins etc.

# --- Logging Configuration ---
# Basic config, consider using a file (e.g., logging.ini) for more complex setups
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
# Optionally configure specific loggers, e.g., SQLAlchemy
# logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)
logger = logging.getLogger(__name__)

# --- Create DB Tables (Optional, for dev/testing ONLY if not using Alembic) ---
# Comment this out if you are managing migrations with Alembic (recommended)
# try:
#     logger.info("Attempting to create database tables...")
#     Base.metadata.create_all(bind=engine)
#     logger.info("Database tables checked/created successfully.")
# except Exception as e:
#     logger.error(f"Error creating database tables: {e}", exc_info=True)
#     # Decide if the app should exit or continue if tables can't be created
#     # exit(1)


# --- FastAPI App Initialization ---
app = FastAPI(
    title="KmerImmo API",
    description="Backend API for the KmerImmo Real Estate Platform.",
    version="0.1.0",
    # Add other OpenAPI metadata if desired
    # docs_url="/api/docs",
    # redoc_url="/api/redoc",
    # openapi_url="/api/v1/openapi.json"
)

# --- Middleware ---
# CORS (Cross-Origin Resource Sharing)
# Be more restrictive in production!
origins = [
    "http://localhost",         # Allow local frontend dev server
    "http://localhost:3000",    # Example React default port
    "http://localhost:8080",    # Example Vue default port
    # Add your deployed frontend origin here
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, # Or use ["*"] for testing, but change for production
    allow_credentials=True,
    allow_methods=["*"], # Allows all methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"], # Allows all headers
)

# --- API Routers ---
api_prefix = "/api/v1"
app.include_router(users.router, prefix=api_prefix)
app.include_router(listings.router, prefix=api_prefix)
app.include_router(search.router, prefix=api_prefix)
# Add future routers here (favorites, messages, admin, payments)

# --- Root Endpoint ---
@app.get("/", tags=["Root"])
async def read_root():
    """Basic health check or welcome message."""
    return {"message": "Welcome to the KmerImmo API!"}


# --- Custom Exception Handlers ---
# Define handlers to convert Core exceptions into appropriate HTTP responses

@app.exception_handler(EntityNotFoundException)
async def entity_not_found_exception_handler(request: Request, exc: EntityNotFoundException):
    logger.info(f"Entity not found: {exc}")
    return JSONResponse(
        status_code=status.HTTP_404_NOT_FOUND,
        content={"detail": str(exc)},
    )

@app.exception_handler(DuplicateEntityException)
async def duplicate_entity_exception_handler(request: Request, exc: DuplicateEntityException):
    logger.warning(f"Duplicate entity conflict: {exc}")
    return JSONResponse(
        status_code=status.HTTP_400_BAD_REQUEST, # Or 409 Conflict
        content={"detail": str(exc)},
    )

@app.exception_handler(ValidationException)
async def validation_exception_handler(request: Request, exc: ValidationException):
    logger.warning(f"Validation error: {exc}")
    return JSONResponse(
        status_code=status.HTTP_400_BAD_REQUEST,
        content={"detail": str(exc)},
    )

@app.exception_handler(AuthenticationException) # Handles InvalidCredentialsException
async def authentication_exception_handler(request: Request, exc: AuthenticationException):
    logger.warning(f"Authentication failed: {exc}")
    return JSONResponse(
        status_code=status.HTTP_401_UNAUTHORIZED,
        content={"detail": str(exc)},
        headers={"WWW-Authenticate": "Bearer"}, # Important for 401
    )

@app.exception_handler(AuthorizationException)
async def authorization_exception_handler(request: Request, exc: AuthorizationException):
    logger.warning(f"Authorization failed: {exc}")
    return JSONResponse(
        status_code=status.HTTP_403_FORBIDDEN,
        content={"detail": str(exc)},
    )

@app.exception_handler(CoreException) # Catch-all for other Core errors
async def core_exception_handler(request: Request, exc: CoreException):
    logger.error(f"Unhandled CoreException occurred: {exc}", exc_info=True)
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={"detail": "An internal application error occurred."},
    )

# Generic exception handler for unexpected errors (catch last)
@app.exception_handler(Exception)
async def generic_exception_handler(request: Request, exc: Exception):
    logger.error(f"An unexpected server error occurred: {exc}", exc_info=True)
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={"detail": "An unexpected internal server error occurred."},
    )


# --- Uvicorn Runner (for `python src/kmerimmo/main.py` execution) ---
# Typically you run via `uvicorn kmerimmo.main:app --reload` from the project root
if __name__ == "__main__":
    import uvicorn
    logger.info("Starting KmerImmo API with Uvicorn...")
    # Use host="0.0.0.0" to make it accessible on your network
    uvicorn.run("kmerimmo.main:app", host="127.0.0.1", port=8000, reload=True)
```

**25. Alembic Setup**

1.  **À la racine du projet :** `alembic init alembic`
2.  **Modifier `alembic.ini` :**
    *   Remplacez `sqlalchemy.url = driver://user:pass@host/dbname` par :
        ```ini
        sqlalchemy.url = ${DATABASE_URL}
        ```
        (Alembic peut lire les variables d'environnement avec cette syntaxe si `python-dotenv` est utilisé correctement, ou vous pouvez passer `DATABASE_URL` à la commande alembic)
3.  **Modifier `alembic/env.py` :**
    *   Ajoutez au début :
        ```python
        import os
        import sys
        from logging.config import fileConfig
        from dotenv import load_dotenv # Import load_dotenv

        # Add src directory to Python path
        sys.path.insert(0, os.path.realpath(os.path.join(os.path.dirname(__file__), '..', 'src')))

        # Load .env file from the project root (adjust path if needed)
        project_root = os.path.join(os.path.dirname(__file__), '..')
        load_dotenv(os.path.join(project_root, '.env'))

        from sqlalchemy import engine_from_config
        from sqlalchemy import pool

        # Import your Base and models so Alembic detects changes
        from kmerimmo.adapters.database.models.base import Base
        from kmerimmo.adapters.database import models # Ensure all models are imported in models.__init__ or base

        # Alembic Config object
        config = context.config

        # Interpret the config file for Python logging.
        if config.config_file_name is not None:
            fileConfig(config.config_file_name)

        # Set the metadata for 'autogenerate' support
        target_metadata = Base.metadata

        # other values from the config, defined by the needs of env.py,
        # can be acquired:
        # my_important_option = config.get_main_option("my_important_option")
        # ... etc.

        # Function to get database URL from environment variable
        def get_url():
             return os.getenv("DATABASE_URL")

        ```
    *   Dans la fonction `run_migrations_online()` :
        *   Remplacez la création de `connectable` pour utiliser `get_url()`:
            ```python
            # Replace this block:
            # connectable = engine_from_config(
            #     config.get_section(config.config_ini_section),
            #     prefix="sqlalchemy.",
            #     poolclass=pool.NullPool,
            # )
            # With this:
            url = get_url()
            if not url:
                raise ValueError("DATABASE_URL environment variable not set")

            connectable = engine_from_config(
                 config.get_section(config.config_ini_section), # Keep existing config section read
                 prefix="sqlalchemy.",
                 poolclass=pool.NullPool,
                 url=url # Explicitly pass the URL from env var
             )
            ```

4.  **Générer la migration initiale :**
    `alembic revision --autogenerate -m "Initial migration: Create users and listings tables"`
5.  **Vérifier le fichier** dans `alembic/versions/`.
6.  **Appliquer la migration :**
    `alembic upgrade head`

---

**Pour Lancer :**

1.  `poetry install`
2.  Assurez-vous que PostgreSQL (ou votre DB) est en cours d'exécution et que la base de données et l'utilisateur spécifiés dans `.env` existent.
3.  `alembic upgrade head`
4.  `uvicorn kmerimmo.main:app --reload --host 127.0.0.1 --port 8000`
5.  Ouvrez `http://127.0.0.1:8000/docs`

---

Ce code est substantiel et représente un effort significatif pour fournir un point de départ fonctionnel. Il intègre l'async/await, la gestion des dépendances, les schémas Pydantic, les modèles SQLAlchemy, la logique métier de base, l'authentification JWT, et la structure Clean Architecture. Testez-le, adaptez-le et construisez dessus !
</details>
