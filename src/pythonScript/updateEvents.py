import psycopg2
from datetime import datetime

# event for the doors are: door_back, door_front, door_garage
def update(event):
    conn = psycopg2.connect(host="138.26.48.83", database="Team5DB", user="Team5", password="team5")
    cur = conn.cursor()
    cur.execute("INSERT INTO events (time, type, status) VALUES (%s, %s, %s)", (datetime.now(), event, False))
    conn.commit()
    cur.close()
    conn.close()