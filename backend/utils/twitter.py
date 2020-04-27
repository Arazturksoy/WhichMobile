from twython import Twython

CONSUMER_KEY = 'jBG7XVSUUKhWr0PXbZhHMErgv'
CONSUMER_SECRET = 'uPOnv7YunNlDCOnrVOVe9MzKljLiBQ0XZ4GSaHtkgiVr0LvFIX'
ACCESS_TOKEN = "621524271-7BMn1uM2b6lQYzFhMrrDIuoEA8OVqYgKzVvFSn4N"
ACCESS_TOKEN_SECRET = "7Uw4pSwuQbQJBdYMJGEwJhak4y7kh8pqxKzZJbPSNR8Ss"
twitter = Twython(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET)


def getTweets(subject): #todo count parameter, language
    collect = twitter.search(q=subject, result_type='popular', count=5)
    alltweet = collect['statuses']
    tweets = []

    for tweet in alltweet:
        tweets.append(tweet['text'])
        print (tweet['text'])

    return tweets


# auth = tw.OAuthHandler(CONSUMER_KEY,
#                   CONSUMER_SECRET)
# auth.set_access_token(ACCESS_TOKEN,
#                   ACCESS_TOKEN_SECRET)
# api = tw.API(auth, wait_on_rate_limit=True)
#
# def getTweets(subject):
#     tweets = []
#     tweets = tw.Cursor(api.search,
#                   q=subject,
#                   result_type='popular',
#                   lang="en",
#                   date_since="2017-11-16"
#                   ).items(5)
#
#     return tweets