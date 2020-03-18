
from twitterscraper import query_tweets


# All tweets matching either Trump or Clinton will be returned. You will get at
# least 10 results within the minimal possible time/number of requests

file = open("trump_output.txt","w")
for tweet in query_tweets("#Bernie2020", 400)[:400]:
    file.write(tweet.text.encode('utf-8'))

