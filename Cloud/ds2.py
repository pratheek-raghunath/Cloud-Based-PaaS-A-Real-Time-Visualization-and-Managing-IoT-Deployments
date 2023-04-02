import paho.mqtt.client as paho
import psutil
import datetime
import time
import json
import pytz

IST = pytz.timezone('Asia/Kolkata')

client = paho.Client()
client.connect('localhost', 1883)
client.loop_start()

while True:
    data = {
        "sensor": "ds2",
        "data": {
            "distance": psutil.sensors_temperatures()['thinkpad'][0].current,
        },
        "timestamp": str(datetime.datetime.now(IST))
    }
    print(data)
    (rc, mid) = client.publish('/ds2', json.dumps(data), qos=1)
    time.sleep(1)