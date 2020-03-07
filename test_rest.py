import pytest 
from TwitterVideoSum import *
import configparser
import subprocess 
def test():
    subprocess.run('curl -i -H "Content-Type: application/json" -X POST -d \'{"keyword":"book"}\' http://hw5.onic.xyz/',stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,shell=True)
    pass