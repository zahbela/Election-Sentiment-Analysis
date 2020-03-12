import csv

with open("pres_primary_avgs_2020.csv", "r") as csv_file:
    reader = csv.DictReader(csv_file)
    index = 0
    bernie = []
    elizabeth = []
    joe = []
    mike = []
    tulsi = []
    for lines in reader:
        bernie.append(float(lines['Bernie Sanders']))
        elizabeth.append(float(lines['Elizabeth Warren']))
        tulsi.append(float(lines['Tulsi Gabbard']))
        mike.append(float(lines['Mike Bloomberg']))
        joe.append(float(lines['Joe Biden']))
    print("Bernie Sanders:")
    print(bernie)
    print("Elizabeth Warren:")
    print(elizabeth)
    print("Mike Bloomberg:")
    print(mike)
    print("Joe Biden:")
    print(joe)
    print("Tulsi Gabbard:")
    print(tulsi)
