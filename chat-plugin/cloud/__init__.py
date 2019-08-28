from .news import register_news
from .weather import register_weather
import skygear

@skygear.op("python:hello")
def hello():
    return {"content": "hello world"}

def includeme(settings):
    hello
    register_news(settings)
    register_weather(settings)