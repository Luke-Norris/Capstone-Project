import pandas as pd
import sqlalchemy
from sqlalchemy.engine import URL

cnxn_str = str('postgresql://Team5:team5@138.26.48.83/Team5DB')

engine = sqlalchemy.create_engine(cnxn_str)

hvacdf = pd.DataFrame(pd.read_sql(sql='SELECT * FROM hvac', con=engine)).sort_values(by=['time'])
hvacdf.to_json('hvacdf.json', orient='index',indent=2)
electricdf = pd.DataFrame(pd.read_sql(sql='SELECT * FROM electric', con=engine)).sort_values(by=['time'])
electricdf.to_json('electricdf.json', orient='index',indent=2)
waterdf = pd.DataFrame(pd.read_sql(sql='SELECT * FROM water', con=engine)).sort_values(by=['time'])
waterdf.to_json('waterdf.json', orient='index',indent=2)
eventsdf = pd.DataFrame(pd.read_sql(sql='SELECT * FROM events', con=engine)).sort_values(by=['time'])
eventsdf.to_json('eventsdf.json', orient='index',indent=2)