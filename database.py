from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
# Configuration de la connexion à la base de données
SQLALCHEMY_DATABASE_URL = "mysql://root:@localhost/quanticfy"
# Créer un moteur de base de données 
engine = create_engine(SQLALCHEMY_DATABASE_URL)
# Créer une session de base de données
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# Déclarer la classe de base 
Base = declarative_base()