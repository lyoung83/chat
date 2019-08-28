import skygear

@skygear.op("weather:five_day_forecast")
def five_day_forecast():
    return {"content": "here is the weather for the next five days"}

@skygear.op("weather:hourly_forecast")
def hourly_forecast():
    return {"content": "here is the forecast by the hour"}

def register_weather(settings):
    five_day_forecast
    hourly_forecast