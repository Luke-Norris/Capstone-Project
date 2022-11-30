from flask import Flask
from flask import jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import psycopg2
import os

load_dotenv()
# venv/bin/activate  
# PostgreSQL Database credentials loaded from the .env file
DATABASE = os.getenv('DATABASE')
DATABASE_USERNAME = os.getenv('DATABASE_USERNAME')
DATABASE_PASSWORD = os.getenv('DATABASE_PASSWORD')
HOST = os.getenv('HOST')

app = Flask(__name__)

# @app.route('/')
# def home():
#     return 'Home Page Route'
# CORS implemented so that we don't get errors when trying to access the server from a different server location
CORS(app)


try:
    con = psycopg2.connect(
        host=HOST, 
        database=DATABASE, 
        user=DATABASE_USERNAME, 
        password=DATABASE_PASSWORD)

    cur = con.cursor()

    # GET: Fetch all movies from the database
    @app.route('/electricFetch')
    def fetch_electric_data():
        cur.execute("SELECT * FROM electric;")
        rows = cur.fetchall()
        print(rows)

        return jsonify(rows)

    @app.route('/waterFetch')
    def fetch_water_data():
        cur.execute("SELECT * FROM water")
        rows = cur.fetchall()
        print(rows)

        return jsonify(rows)


    @app.route('/hvacFetch')
    def fetch_hvac_data():
        cur.execute("SELECT * FROM hvac")
        rows = cur.fetchall()
        print(rows)

        return jsonify(rows)
    
    @app.route('/eventsFetch')
    def fetch_events_data():
        cur.execute("SELECT * FROM events")
        rows = cur.fetchall()
        print(rows)

        return jsonify(rows)

except:
    print('Error')
