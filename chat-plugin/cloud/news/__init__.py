import skygear

@skygear.op("news:sports_headlines")
def sports_headlines():
    return {"content": "here are sports headlines"}

@skygear.op("news:world_headlines")
def world_headlines():
    return {"content": "here are world headlines"}


def register_news(settings):
    sports_headlines
    world_headlines