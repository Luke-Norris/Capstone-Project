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
        cur.execute("SELECT week_of_year, SUM(usage::FLOAT) AS sum_of_usage, SUM(real_cost::FLOAT) AS sum_of_real_cost FROM new_electric GROUP BY week_of_year ORDER BY week_of_year ASC")
        rows = cur.fetchall()
        print(rows)

        return jsonify(rows)

    @app.route('/waterFetch')
    def fetch_water_data():
        cur.execute("SELECT week_of_year, SUM(usage::FLOAT) AS sum_of_usage, SUM(real_cost::FLOAT) AS sum_of_real_cost FROM new_water GROUP BY week_of_year ORDER BY week_of_year ASC")
        rows = cur.fetchall()
        print(rows)

        return jsonify(rows)


    @app.route('/hvacFetch')
    def fetch_hvac_data():
        cur.execute("SELECT week_of_year, AVG(interiortemp::FLOAT) AS mean_of_inttemp, AVG(exteriortemp::FLOAT) AS mean_of_exttemp, AVG(targettemp::FLOAT) AS mean_of_targtemp FROM new_hvac GROUP BY week_of_year ORDER BY week_of_year ASC")
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
