from flask import Flask, jsonify, request, redirect
from flask_cors import CORS
from dotenv import load_dotenv
import psycopg2
import os
from datetime import datetime, timedelta
import pandas as pd
import sqlalchemy
import numpy as np
import json

#source bin/activate
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
    cnxn_str = str('postgresql://Team5:team5@138.26.48.83/Team5DB')
    engine = sqlalchemy.create_engine(cnxn_str)

    # GET: Fetch all movies from the database
    @app.route('/electricFetch/4')
    def fetch_electric_data():
        cur.execute("SELECT week_of_year, SUM(usage::FLOAT) AS sum_of_usage, SUM(real_cost::FLOAT) AS sum_of_real_cost FROM new_electric GROUP BY week_of_year ORDER BY week_of_year ASC")
        rows = cur.fetchall()
        print(rows)

        return jsonify(rows)

    @app.route('/fittingElectric')
    def fitting_electric():
        usage_electricdf = pd.DataFrame(pd.read_sql(sql='SELECT week_of_year, SUM(usage::FLOAT) AS sum_of_usage, SUM(real_cost::FLOAT) AS sum_of_real_cost FROM new_electric GROUP BY week_of_year ORDER BY week_of_year ASC', con=engine))
        usage_electricdf = usage_electricdf[['week_of_year', 'sum_of_usage']]
        coef = np.polyfit(usage_electricdf['week_of_year'], usage_electricdf['sum_of_usage'], 4)
        usage_electricdf['estimated'] = pd.Series(np.polyval(coef, usage_electricdf['week_of_year']))

        return usage_electricdf.to_json(orient="index", indent=2)

    ###massive
    @app.route('/massiveElectric')
    def massive_electric():
        electricdf = pd.DataFrame(pd.read_sql(sql='SELECT week_of_year, SUM(usage::FLOAT) AS sum_of_usage, SUM(real_cost::FLOAT) AS sum_of_real_cost FROM new_electric GROUP BY week_of_year ORDER BY week_of_year ASC', con=engine))
        coef = np.polyfit(electricdf['week_of_year'], electricdf['sum_of_usage'], 4)
        electricdf['estimated'] = pd.Series(np.polyval(coef, electricdf['week_of_year']))

        return electricdf.to_json(orient='index', indent=4)
    
    @app.route('/massiveWater')
    def massive_water():
        waterdf = pd.DataFrame(pd.read_sql(sql='SELECT week_of_year, SUM(usage::FLOAT) AS sum_of_usage, SUM(real_cost::FLOAT) AS sum_of_real_cost FROM new_water GROUP BY week_of_year ORDER BY week_of_year ASC', con=engine))
        coef = np.polyfit(waterdf['week_of_year'], waterdf['sum_of_usage'], 4)
        waterdf['estimated_usage'] = pd.Series(np.polyval(coef, waterdf['week_of_year']))
        waterdf.to_json(orient='index', indent=4)

        return waterdf.to_json(orient='index', indent=4)




    ##########

    @app.route('/newElectricTable')
    def fetch_electric_data2():
        electric = pd.DataFrame(pd.read_sql(sql='SELECT * FROM electric', con=engine)).sort_values(by=['time'])
        electric['usage'] = electric['cost'].replace('[\$,]', '', regex=True).astype(float)
        electric['real_cost'] = ((electric['usage']*(1/1000))*0.12)
        electric['day_of_month'] = pd.DatetimeIndex(electric['time']).day
        electric['month'] = pd.DatetimeIndex(electric['time']).month
        electric['year'] = pd.DatetimeIndex(electric['time']).year
        electric['day_of_year'] = pd.DatetimeIndex(electric['time']).day_of_year
        electric['day_of_week'] = pd.DatetimeIndex(electric['time']).weekday
        electric['week_of_year'] = pd.to_datetime(electric['time']).dt.isocalendar().week
        electric.to_sql(name='new_electric', con=engine, if_exists='replace')

        return {'new_electric_success':1}

    @app.route('/newHvacTable')
    def fetch_hvac_data2():
        hvac = pd.DataFrame(pd.read_sql(sql='SELECT * FROM hvac', con=engine)).sort_values(by=['time'])
        hvac['day_of_month'] = pd.DatetimeIndex(hvac['time']).day
        hvac['month'] = pd.DatetimeIndex(hvac['time']).month
        hvac['year'] = pd.DatetimeIndex(hvac['time']).year
        hvac['day_of_year'] = pd.DatetimeIndex(hvac['time']).day_of_year
        hvac['day_of_week'] = pd.DatetimeIndex(hvac['time']).weekday
        hvac['week_of_year'] = pd.to_datetime(hvac['time']).dt.isocalendar().week
        hvac.to_sql(name='new_hvac', con=engine, if_exists='replace')

        return {'new_hvac_success':1}

    @app.route('/newWaterTable')
    def fetch_water_data2():
        water = pd.DataFrame(pd.read_sql(sql='SELECT * FROM water', con=engine)).sort_values(by=['time'])
        water['usage'] = water['cost'].replace('[\$,]', '', regex=True).astype(float)
        water['real_cost'] = (water['usage']*0.00336)
        water['day_of_month'] = pd.DatetimeIndex(water['time']).day
        water['month'] = pd.DatetimeIndex(water['time']).month
        water['year'] = pd.DatetimeIndex(water['time']).year
        water['day_of_year'] = pd.DatetimeIndex(water['time']).day_of_year
        water['day_of_week'] = pd.DatetimeIndex(water['time']).weekday
        water['week_of_year'] = pd.to_datetime(water['time']).dt.isocalendar().week
        water.to_sql(name='new_water', con=engine, if_exists='replace')

        return {'new_water_success':1}

    @app.route('/waterFetch/2')
    def fetch_water_data():
        cur.execute("SELECT week_of_year, SUM(usage::FLOAT) AS sum_of_usage, SUM(real_cost::FLOAT) AS sum_of_real_cost FROM new_water GROUP BY week_of_year ORDER BY week_of_year ASC")
        rows = cur.fetchall()
        print(rows)

        return jsonify(rows)


    @app.route('/hvacFetch/1')
    def fetch_hvac_data9():
        cur.execute("SELECT week_of_year, AVG(interiortemp::FLOAT) AS mean_of_inttemp, AVG(exteriortemp::FLOAT) AS mean_of_exttemp, AVG(targettemp::FLOAT) AS mean_of_targtemp FROM new_hvac GROUP BY week_of_year ORDER BY week_of_year ASC")
        rows = cur.fetchall()
        print(rows)

        return jsonify(rows)

    @app.route('/microwave')
    def microwave_sim():
        now = datetime.now()
        later = now+timedelta(minutes=2)
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (now, "microwave", True))
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (later, "microwave", False))
        cur.execute("INSERT INTO electric (cost, time) VALUES (%s, %s)", ((1100/60)*2, later))
        con.commit()

        return {'microwave':1}

    @app.route('/bath')
    def bath_sim():
        now = datetime.now()
        later = now+timedelta(minutes=+30)
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (now, "bath", True))
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (later, "bath", False))
        cur.execute("INSERT INTO water (cost, time) VALUES (%s, %s)",(.65*30, later))
        cur.execute("INSERT INTO electric (cost, time) VALUES (%s, %s)", ((4500/2), later))
        con.commit()

        return {'bath':1}

    #@app.route('/microwave', methods=['GET', 'POST'])
    
    @app.route('/eventsFetch/3')
    def fetch_events_data():
        cur.execute("SELECT * FROM events")
        rows = cur.fetchall()
        print(rows)

        return jsonify(rows)

    @app.route('/bedroom-Light-On')
    def bedroom_light_on():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bedroom_overhead_light", True))
        con.commit()

        return {'bedroom-Light-On':1}

    @app.route('/bedroom-Light-Off')
    def bedroom_light_off():
        timestamp = datetime.now()
        cur.execute("SELECT time FROM events WHERE type = 'bedroom_overhead_light' ORDER BY time DESC LIMIT 1;")
        elect = cur.fetchone()[0]
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bedroom_overhead_light", False))
        change = timestamp - elect
        #print('findme2',change, elect, timestamp)
        cur.execute("INSERT INTO electric (cost, time) VALUES (%s, %s)", (abs(change.total_seconds()/60), timestamp))
        con.commit()

        return {'bedroom-Light-Off':1}

    @app.route('/bedroom-Light-On2')
    def bedroom_light_on2():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bedroom2_overhead_light", True))
        con.commit()

        return {'bedroom-Light-On2':1}

    @app.route('/bedroom-Light-Off2')
    def bedroom_light_off2():
        timestamp = datetime.now()
        cur.execute("SELECT time FROM events WHERE type = 'bedroom2_overhead_light' ORDER BY time DESC LIMIT 1;")
        elect = cur.fetchone()[0]
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bedroom2_overhead_light", False))
        change = timestamp - elect
        #print('findme2',change, elect, timestamp)
        cur.execute("INSERT INTO electric (cost, time) VALUES (%s, %s)", (abs(change.total_seconds()/60), timestamp))
        con.commit()

        return {'bedroom-Light-Off2':1}

    @app.route('/bedroom-Light-On3')
    def bedroom_light_on3():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bedroom3_overhead_light", True))
        con.commit()

        return {'bedroom-Light-On3':1}

    @app.route('/bedroom-Light-Off3')
    def bedroom_light_off3():
        timestamp = datetime.now()
        cur.execute("SELECT time FROM events WHERE type = 'bedroom3_overhead_light' ORDER BY time DESC LIMIT 1;")
        elect = cur.fetchone()[0]
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bedroom3_overhead_light", False))
        change = timestamp - elect
        #print('findme2',change, elect, timestamp)
        cur.execute("INSERT INTO electric (cost, time) VALUES (%s, %s)", (abs(change.total_seconds()/60), timestamp))
        con.commit()

        return {'bedroom-Light-Off3':1}

    @app.route('/bathroom1-Light-one-Off')
    def bath_light_one_off():
        timestamp = datetime.now()
        cur.execute("SELECT time FROM events WHERE type = 'bath_light_one' ORDER BY time DESC LIMIT 1;")
        elect = cur.fetchone()[0]
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bath_light_one", False))
        change = timestamp - elect
        #print('findme2',change, elect, timestamp)
        cur.execute("INSERT INTO electric (cost, time) VALUES (%s, %s)", (abs(change.total_seconds()/60), timestamp))
        con.commit()

        return {'bath-Light-one-Off':1}

    @app.route('/bathroom1-Light-one-On')
    def bath_light_one_on():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bath_light_one", True))
        con.commit()

        return {'bath-Light-one-On':1}

    @app.route('/bathroom1-Light-two-Off')
    def bath_light_two_off():
        timestamp = datetime.now()
        cur.execute("SELECT time FROM events WHERE type = 'bath_light_two' ORDER BY time DESC LIMIT 1;")
        elect = cur.fetchone()[0]
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bath_light_two", False))
        change = timestamp - elect
        #print('findme2',change, elect, timestamp)
        cur.execute("INSERT INTO electric (cost, time) VALUES (%s, %s)", (abs(change.total_seconds()/60), timestamp))
        con.commit()

        return {'bath-Light-two-Off':1}

    @app.route('/bathroom1-Light-two-On')
    def bath_light_two_on():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bath_light_two", True))
        con.commit()

        return {'bath-Light-two-On':1}


    @app.route('/bathroom2-Light-one-Off')
    def bath2_light_one_off():
        timestamp = datetime.now()
        cur.execute("SELECT time FROM events WHERE type = 'bath2_light_one' ORDER BY time DESC LIMIT 1;")
        elect = cur.fetchone()[0]
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bath2_light_one", False))
        change = timestamp - elect
        #print('findme2',change, elect, timestamp)
        cur.execute("INSERT INTO electric (cost, time) VALUES (%s, %s)", (abs(change.total_seconds()/60), timestamp))
        con.commit()

        return {'bath2-Light-one-Off':1}

    @app.route('/bathroom2-Light-one-On')
    def bath2_light_one_on():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bath2_light_one", True))
        con.commit()

        return {'bath2-Light-one-On':1}

    @app.route('/bathroom2-Light-two-Off')
    def bath2_light_two_off():
        timestamp = datetime.now()
        cur.execute("SELECT time FROM events WHERE type = 'bath2_light_two' ORDER BY time DESC LIMIT 1;")
        elect = cur.fetchone()[0]
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bath2_light_two", False))
        change = timestamp - elect
        #print('findme2',change, elect, timestamp)
        cur.execute("INSERT INTO electric (cost, time) VALUES (%s, %s)", (abs(change.total_seconds()/60), timestamp))
        con.commit()

        return {'bath2-Light-two-Off':1}

    @app.route('/bathroom2-Light-two-On')
    def bath2_light_two_on():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bath2_light_two", True))
        con.commit()

        return {'bath2-Light-two-On':1}

    #### kitchen

    @app.route('/kitchen-off')
    def kitchen_off():
        timestamp = datetime.now()
        cur.execute("SELECT time FROM events WHERE type = 'kitchen_overhead_light' ORDER BY time DESC LIMIT 1;")
        elect = cur.fetchone()[0]
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "kitchen_overhead_light", False))
        change = timestamp - elect
        #print('findme2',change, elect, timestamp)
        cur.execute("INSERT INTO electric (cost, time) VALUES (%s, %s)", (abs(change.total_seconds()/60), timestamp))
        con.commit()

        return {'kitchen_off':1}

    @app.route('/kitchen-on')
    def kitchen_on():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "kitchen_overhead_light", True))
        con.commit()

        return {'kitchen_oon':1}

    ### living room

    @app.route('/livingroom-off')
    def lr_off():
        timestamp = datetime.now()
        cur.execute("SELECT time FROM events WHERE type = 'lr_overhead_light' ORDER BY time DESC LIMIT 1;")
        elect = cur.fetchone()[0]
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "lr_overhead_light", False))
        change = timestamp - elect
        #print('findme2',change, elect, timestamp)
        cur.execute("INSERT INTO electric (cost, time) VALUES (%s, %s)", (abs(change.total_seconds()/60), timestamp))
        con.commit()

        return {'lr_off':1}

    @app.route('/livingroom-on')
    def lr_on():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "lr_overhead_light", True))
        con.commit()

        return {'lr_on':1}

    #bedroom tv
    @app.route('/br-tv-off')
    def br_tv_off():
        timestamp = datetime.now()
        cur.execute("SELECT time FROM events WHERE type = 'bedroom_TV' ORDER BY time DESC LIMIT 1;")
        elect = cur.fetchone()[0]
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bedroom_TV", False))
        change = timestamp - elect
        #print('findme2',change, elect, timestamp)
        cur.execute("INSERT INTO electric (cost, time) VALUES (%s, %s)", (abs(change.total_seconds()/36), timestamp))
        con.commit()

        return {'br_tv_off':1}

    @app.route('/br-tv-on')
    def br_tv_on():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "bedroom_TV", True))
        con.commit()

        return {'br_tv_on':1}

    # lr tv
    @app.route('/lr-tv-off')
    def lr_tv_off():
        timestamp = datetime.now()
        cur.execute("SELECT time FROM events WHERE type = 'lr_tv' ORDER BY time DESC LIMIT 1;")
        elect = cur.fetchone()[0]
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "lr_tv", False))
        change = timestamp - elect
        #print('findme2',change, elect, timestamp)
        cur.execute("INSERT INTO electric (cost, time) VALUES (%s, %s)", (abs(change.total_seconds()*.175), timestamp))
        con.commit()

        return {'lr_tv_off':1}

    @app.route('/lr-tv-on')
    def lr_tv_on():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "lr_tv", True))
        con.commit()

        return {'lr_tv_on':1}

    # front door

    @app.route('/front-open')
    def front_open():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "door_front", True))
        con.commit()

        return {'front_open':1}

    @app.route('/front-close')
    def front_close():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "door_front", False))
        con.commit()

        return {'front_close':1}
    # back door
    @app.route('/back-open')
    def back_open():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "door_back", True))
        con.commit()

        return {'back_open':1}

    @app.route('/back-close')
    def back_close():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "door_back", False))
        con.commit()

        return {'back_close':1}

    # garage door
    @app.route('/garage-open')
    def garage_open():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "door_garage_out", True))
        con.commit()

        return {'garage_open':1}

    @app.route('/garage-close')
    def garage_close():
        timestamp = datetime.now()
        cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (timestamp, "door_garage_out", False))
        con.commit()

        return {'garage_close':1}

    



except:
    print('Error')
