# Twitter hashtag photo video summary generator - Restful Api Version
## requirement
python > 3.6

ffmpeg
## Api Definition
### Start a task
```bash
curl -i -H "Content-Type: application/json" -X POST -d '{"keyword":"book"}' http://hw5.onic.xyz/
```
#### return
```json
{
 "uuid": "3f3d3fb0-b175-4a58-b8ec-9923813d0505", 
 "get_status": "http://hw5.onic.xyz/status/3f3d3fb0-b175-4a58-b8ec-9923813d0505", 
 "get_video": "http://hw5.onic.xyz/video/3f3d3fb0-b175-4a58-b8ec-9923813d0505"
}
```
### Check status
```bash
curl -i -X GET http://hw5.onic.xyz/status/3f3d3fb0-b175-4a58-b8ec-9923813d0505
```
#### return
```json
{
 "uuid": "3f3d3fb0-b175-4a58-b8ec-9923813d0505", 
 "percentage": -1, 
 "status": "finished/doesnt exist"
}
```
### Get Video
```bash
curl -i -X GET http://hw5.onic.xyz/video/3f3d3fb0-b175-4a58-b8ec-9923813d0505
```
#### return

file it self

## Deployment Guide
### Environment Configuration
```bash
git clone http://github.com/BUEC500C1/video-PupilTong.git
cd video-PupilTong
pip3 install -r requirements.txt
python3 rest.py
```
### import your own Twitter API key info
Keys should be stores in 'key file:
```python
[auth]
consumer_key = ""
consumer_secret = ""
access_token = ""
access_token_secret = ""
```
# Too Old;DR 
## Module ffmpegQueue.py
This module is able to convert a tuple of texts and a tuple of images' url to a summary video.
### Architechture
 ![Architechture](/photos/queue_arch.png)
### Class queueItem
One task of the work load pool
#### Constructor Parameters
| Name  | Description | type |
| ------------- | ------------- | ------------- |
| directory  | Output video storage directory  | str |
| text  | List of texts  | tuple  |
| img  | Images list for each text. Program will use the first as the background  | tuple  |
| keyword  | keyword of this task, will use this to create a temp directory. Program will try to delete the directory first  | str  |
### Class VideoApi
video processing core
#### Method AddTask
| Name  | Description | type |
| ------------- | ------------- | ------------- |
| item  | the task to be added to the workload pool  | ququeItem |
##### return
return a unique uuid of this task.
#### Method CheckStatus
Check current task status.
##### return
type: int
```python
# 0 - unstart
# 1~99 - processing
# 100 - finished
# -1 - deleted
```
## Module TwitterVideoSum.py
This module is able to pull tweets from twitter with provided parmeters and prepare data for Module ffmpegQueue
### Architechture
 ![Architechture](/photos/tws_arch.png)
### Class TwitterVideoSum:
#### Constructor
| Name  | Description | type |
| ------------- | ------------- | ------------- |
| consumer_key  | twitter api key  | str |
| consumer_secret  | twitter api key  | str |
| access_token  | twitter api key  | str |
| access_token_secret  | twitter api key  | str |
| keywords  | List of hashtags  | tuple  |
| directory  | video storage directory  | str  |
| item  | number of photos for each hashtag to be converted  | str  |
#### Method Start
Start the process
