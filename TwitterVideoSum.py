from ffmpegQueue import *
import tweepy
import threading 
import time
import json
class TwitterVideoSum:
    __auth = None        
    __keywords = tuple()
    __directory = str()
    __item = 0
    __progress = 0
    def __init__(self, consumer_key:str, consumer_secret:str, access_token:str, access_token_secret:str, item:int = 10):
        self.__auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
        self.__auth.set_access_token(access_token, access_token_secret)
        self.__directory = '.'
        self.__item = item
        self.__videoApi = VideoApi()
        self.__queueCounter = 0
    def stub_Start(self):
        threading.Thread(target=self.GUI, args=()).start()
        uuid = ''
        with open("tweets_stub.json","r") as f:
            savedInfos = json.loads(f.read())
            savedInfo = savedInfos[0]
            qitem = queueItem(self.__directory,tuple(savedInfo["keywordsTweetsText"]),tuple(savedInfo["keywordsTweetsImgs"]),self.CallbackHandler,savedInfo["keyword"])
            while(self.__queueCounter>4):
                pass
            uuid =self.__videoApi.AddTask(qitem)
            self.__queueCounter = self.__queueCounter + 1

        return uuid
        pass
    def AddTask(self,keyword):
        api = tweepy.API(self.__auth)
        tweets = tweepy.Cursor(api.search, q="%23" + str(keyword),count = 50).items()
        i=0
        keywordsTweetsText=list()
        keywordsTweetsImgs = list()
        for tweet in tweets:
            imglist = list()
            if(hasattr(tweet,'extended_entities')):
                for media in tweet.extended_entities['media']:
                    if(media['type'] == 'photo'):
                        imglist.append(media['media_url_https'])
                        keywordsTweetsImgs.append(tuple(imglist))
                        keywordsTweetsText.append(tweet.text)
                        i = i+1
            if(i>self.__item):
                break
        qitem = queueItem(self.__directory,tuple(keywordsTweetsText),tuple(keywordsTweetsImgs),self.CallbackHandler,keyword)
        while(self.__queueCounter>4):
            pass
        uuid = self.__videoApi.AddTask(qitem)
        self.__queueCounter = self.__queueCounter + 1
        return uuid
    def CheckStatus(self,uuid):
        return self.__videoApi.CheckStatus(uuid)
    def CallbackHandler(self):
        self.____queueCounter = self.__queueCounter - 1


                