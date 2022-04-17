from flask import Flask, jsonify
from sqlalchemy.orm import scoped_session
from flask_cors import CORS
from database import SessionLocal, engine, Base
from models import EspaceVert

app = Flask(__name__)
CORS(app)
app.session = scoped_session(SessionLocal)

@app.route('/')
def main():
    return jsonify({"status": "OK"})

@app.route('/repartition_par_categorie')
def repartition_par_categorie():
    pointer = app.session.execute("SELECT categorie, COUNT(id) AS nb_esp_vert FROM espace_verts GROUP BY categorie")
    return (jsonify([{"categorie":elt[0], "nombre": elt[1]} for elt in pointer.all()]))

@app.route('/repartition_par_type')
def repartition_par_type():
    pointer = app.session.execute("SELECT type_ev, COUNT(id) AS nb_esp_vert FROM espace_verts GROUP BY type_ev")
    return (jsonify([{"type":elt[0], "nombre": elt[1]} for elt in pointer.all()]))

@app.route('/surface_par_type')
def surface_par_type():
    pointer = app.session.execute("SELECT type_ev, AVG(surface_totale_reelle) FROM espace_verts GROUP BY type_ev HAVING type_ev != 'Cimetières'")
    return (jsonify([{"type":elt[0], "surface": elt[1]} for elt in pointer.all()]))

if __name__ == '__main__':
    Base.metadata.create_all(bind=engine)
    app.run(debug=True)