import skygear

@skygear.op("python:hello")
def hello():
    return {"content": "hello world"}

def includeme(settings):
    hello