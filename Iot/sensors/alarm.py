from gpiozero import Buzzer
import RPi.GPIO as GPIO
import paho.mqtt.client as mqtt
import os
import pytz
import datetime
import time
import json

IST = pytz.timezone('Asia/Kolkata')

BROKER_URL = os.environ.get('BROKER_URL')
USER_ID = os.environ.get('USER_ID')

buzzer = Buzzer(22)

LED_1 = 23
LED_2 = 24

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(LED_1,GPIO.OUT)
GPIO.setup(LED_2,GPIO.OUT)

GPIO.output(LED_1,GPIO.LOW)
GPIO.output(LED_2,GPIO.LOW)

# while True:
# 	buzzer.on()
# 	sleep(1)
# 	buzzer.off()
# 	sleep(1)

toggle = False

def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")
    client.subscribe(f"/{USER_ID}/action/alarm")

def on_message(client, userdata, msg):
	global toggle
	print("Toggle Alarm")
	if toggle:
		buzzer.off()
		GPIO.output(LED_1,GPIO.LOW)
		GPIO.output(LED_2,GPIO.LOW)
		toggle = False
	else:
		buzzer.on()
		GPIO.output(LED_1,GPIO.HIGH)
		GPIO.output(LED_2,GPIO.HIGH)
		toggle = True
	

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect(BROKER_URL, 1883)

client.loop_forever()