from sqlalchemy import Column, Integer, String
from sqlalchemy.types import Date
from database import Base
# Définition User Catégorie
class EspaceVert(Base):
    __tablename__="espace_verts" # Définir le nom de la table

    id = Column(Integer, primary_key=True, index=True)
    annee_ouverture = Column(String(4))
    type_ev = Column(String(100))
    adresse_codepostal = Column(String(5))
    surface_totale_reelle = Column(Integer)
    nom = Column(String(200))
    categorie = Column(String(50))