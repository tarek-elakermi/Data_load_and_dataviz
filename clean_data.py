from models import EspaceVert
import requests
import json
from database import SessionLocal, engine, Base
import sqlalchemy

db = SessionLocal()

data = db.query(EspaceVert).all()
surface_moyenne_query = db.execute("SELECT AVG(surface_totale_reelle) FROM espace_verts")
surface_moyenne = surface_moyenne_query.first()[0]

update_surface_total_query = db.execute("UPDATE espace_verts SET surface_totale_reelle = :surface_moyenne WHERE surface_totale_reelle IS NULL", {"surface_moyenne": surface_moyenne})
db.commit() # Soumettre à la base de données
db.close()