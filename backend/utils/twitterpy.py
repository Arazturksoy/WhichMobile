import json
import tweepy

class MyStreamListener(tweepy.StreamListener):
    def __init__(self, api):
        self.api = api
        self.me = api.me()

    def on_status(self, tweet):
            print(f"{tweet.user.name}:{tweet.text}")

    def on_error(self, status):
            print("Error detected")

CONSUMER_KEY = 'jBG7XVSUUKhWr0PXbZhHMErgv'
CONSUMER_SECRET = 'uPOnv7YunNlDCOnrVOVe9MzKljLiBQ0XZ4GSaHtkgiVr0LvFIX'
ACCESS_TOKEN = "621524271-7BMn1uM2b6lQYzFhMrrDIuoEA8OVqYgKzVvFSn4N"
ACCESS_TOKEN_SECRET = "7Uw4pSwuQbQJBdYMJGEwJhak4y7kh8pqxKzZJbPSNR8Ss"

# Authenticate to Twitter
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

# Create API object
api = tweepy.API(auth, wait_on_rate_limit=True,
    wait_on_rate_limit_notify=True)


# tweets_listener = MyStreamListener(api)
# stream = tweepy.Stream(api.auth, tweets_listener)
# tweets = stream.filter(track="search", languages=["en"])
def getTweets(subject):
    tweets = []
    for tweet in api.search(q="twitter", lang="en", rpp=5):
        print(f"{tweet.user.name}:{tweet.text}")
        tw = {'id': tweet.id_str, 'username': tweet.user.name, 'tweet': tweet.text}
        tweets.append(tw)
    return tweets