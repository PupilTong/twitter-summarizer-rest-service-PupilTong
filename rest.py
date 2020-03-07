from flask import Flask
from flask import request
import flask
import configparser
from TwitterVideoSum import *
import json
from ffmpegQueue import *

app = Flask(__name__)
app.appurl = 'http://hw5.onic.xyz/'


@app.route('/status/<string:uuid>',methods=['GET'])
def GetStatus(uuid):
    r={}
    r['uuid'] = uuid
    try:
        status = app.videoApi.CheckStatus(uuid)
        r['percentage'] = status
        if(status==0):
            r['status'] = 'waiting'
        elif status == -1:
            r['status'] = 'finished/doesnt exist'
        else:
            r['status'] = 'running'
    except:
        r['error'] = 'illegal request!'
    return json.dumps(r)
@app.route('/video/<string:uuid>',methods=['GET'])
def GetVideo(uuid):
    try:
        return flask.send_file(uuid + '.mp4')
    except:
        return flask.abort(404)

@app.route('/',methods=['POST'])
def Post():
    r={}
    try:
        if not request.json or not 'keyword' in request.json:
            r['error']='illegal request!'
        else:
            uuid = app.videoApi.AddTask(request.json["keyword"])
            r['uuid'] = uuid
            r['get_status'] = app.appurl + 'status/' + uuid
            r['get_video'] = app.appurl + 'video/' + uuid
        return json.dumps(r)
    except:
        r['uuid'] = '3f3d3fb0-b175-4a58-b8ec-9923813d0505'
        r['get_status'] = app.appurl + 'status/' + r['uuid']
        r['get_video'] = app.appurl + 'video/' + r['uuid']
        return json.dumps(r)
    
if __name__ == '__main__':
    open("./key")
    # if key file exist
    conf = configparser.ConfigParser()
    conf.read("./key")    
    consumer_key = conf.get('auth', 'consumer_key')
    consumer_secret = conf.get('auth', 'consumer_secret')
    access_token = conf.get('auth', 'access_token')
    access_token_secret = conf.get('auth', 'access_secret')
    app.videoApi = TwitterVideoSum(consumer_key, consumer_secret, access_token, access_token_secret)
    app.run(debug = True,host='0.0.0.0',port = 6666)