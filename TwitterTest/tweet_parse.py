import os                                                                                               
import json                                                                               
import unicodedata              
from textblob import TextBlob

tweets = []
text = []

for line in open('trump_stream.txt'):
    try:
        tweets.append(json.loads(line))
    except:
        pass

for element in tweets:
    if 'extended_tweet' in element:
        temp_string = str(element['extended_tweet'])
        
        # REMOVES EVERYTHING EXCEPT FULL_TEXT
        index = temp_string.find('display_text_range')
        temp_string = temp_string[0:index]
        

        # REMOVES HTTPS
        index = temp_string.find('https')
        temp_string = temp_string[0:index]
    
        # REMOVES FULL_TEXT LABEL
        index = temp_string.find('full_text')
        temp_string = temp_string[index+13:]
        
   
        # STRIP OF NON-NECESSARY CHARACTERS
        temp_string = temp_string.replace("\\n", "")  
        temp_string = temp_string.replace("\'", "")

        # DETERMINING THE LANGUAGE
        b = TextBlob(temp_string)
        lang = b.detect_language()
        if lang == "en":
            text.append(temp_string)      
   
    else:
        temp_string = str(element['text'])
        b = TextBlob(temp_string)
        lang = b.detect_language()
        if lang == "en": 
            text.append(temp_string)
        

print(text[:15])
