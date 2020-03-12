#Import the necessary methods from tweepy library
from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream

# Enter Twitter API Keys
access_token = "747915790951682048-xzUkBhr5QV37U2wuQUTcXpPxnV8SjFK"
access_token_secret = "NpHHahkYbbSQrsJ67fyOgxIdUsn7RRDC2j1Aa3gPN661A"
consumer_key = "i5vd9aMHZxqaDJgPfGoqjAYgM"
consumer_secret = "l9JfEGtb8onpGEiTidkah1rPM2oiQ5fDKZm6XEuLgIcYd90tCN"

# Create the class that will handle the tweet stream
class StdOutListener(StreamListener):
      
    def on_data(self, data):   
        print(data)
        return True
        

    def on_error(self, status):
        print(status)


if __name__ == '__main__':  
# Handle Twitter authetification and the connection to Twitter Streaming API
    l = StdOutListener()
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    stream = Stream(auth, l)
    stream.filter(track=['#Trump'])
