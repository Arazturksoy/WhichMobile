# Imports the Google Cloud client library
"""
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = r"C:\Users\Yasko\PycharmProjects\thesis\utils\NL Project-12702bc0d682.json"

# Instantiates a client
client = language.LanguageServiceClient()

def analyze(text):
    # The text to analyze
    document = types.Document(
        content=text,
        type=enums.Document.Type.PLAIN_TEXT)

    # Detects the sentiment of the text
    sentiment = client.analyze_sentiment(document=document).document_sentiment

    print('Text: {}'.format(text))
    print('Sentiment: {}, {}'.format(sentiment.score, sentiment.magnitude))
"""