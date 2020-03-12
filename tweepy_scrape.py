import tweepy
from tweepy import OAuthHandler

class TwitterClient(object):
	def __init__(self):
        # Access Credentials
        consumer_key = 'i5vd9aMHZxqaDJgPfGoqjAYgM'
        consumer_secret = 'l9JfEGtb8onpGEiTidkah1rPM2oiQ5fDKZm6XEuLgIcYd90tCN'
        access_token = '747915790951682048-xzUkBhr5QV37U2wuQUTcXpPxnV8SjFK'
        access_token_secret = 'NpHHahkYbbSQrsJ67fyOgxIdUsn7RRDC2j1Aa3gPN661A'
	try:
            # OAuthHandler object
            auth = OAuthHandler(consumer_key, consumer_secret)
            # set access token and secret
            auth.set_access_token(access_token, access_token_secret)
            # create tweepy API object to fetch tweets
            self.api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

        except tweepy.TweepError as e:
		print(f"Error: Twitter Authentication Failed - \n{str(e)}")

    # Function to fetch tweets
    	def get_tweets(self, query, maxTweets = 1000):
        # empty list to store parsed tweets
        tweets = []
        sinceId = None
        max_id = -1
        tweetCount = 0
        tweetsPerQry = 100

        while tweetCount < maxTweets:
		try:
			if (max_id <= 0):
				if (not sinceId):
					new_tweets = self.api.search(q=query, count=tweetsPerQry)
				else:
					new_tweets = self.api.search(q=query, count=tweetsPerQry,since_id=sinceId)
				else:
			if (not sinceId):
				new_tweets = self.api.search(q=query, count=tweetsPerQry,max_id=str(max_id - 1))
			else:
                        new_tweets = self.api.search(q=query, count=tweetsPerQry, max_id=str(max_id - 1), since_id=sinceId)
                if not new_tweets:
                    print("No more tweets found")
                    break

                for tweet in new_tweets:
                    parsed_tweet = {}
                    parsed_tweet['tweets'] = tweet.text

                    # appending parsed tweet to tweets list
                    if tweet.retweet_count > 0:
                        # if tweet has retweets, ensure that it is appended only once
                        if parsed_tweet not in tweets:
                            tweets.append(parsed_tweet)
                    else:
                        tweets.append(parsed_tweet)

                tweetCount += len(new_tweets)
                print("Downloaded {0} tweets".format(tweetCount))
                max_id = new_tweets[-1].id

            except tweepy.TweepError as e:
                print("Tweepy error : " + str(e))
                break

        return pd.DataFrame(data=tweets)
