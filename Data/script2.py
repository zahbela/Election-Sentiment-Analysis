import json

array = []
json_parsed = json.loads("bidem.json")

for each in json_parsed:
    array.append(json_parsed['pct'])

print(array)
