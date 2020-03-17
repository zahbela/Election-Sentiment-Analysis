import pandas as pd
csv_file = pd.DataFrame(pd.read_csv("trump.csv", sep = ",", header = 0, index_col = False))
csv_file.to_json("trump.json", orient = "records", date_format = "epoch", double_precision = 10, force_ascii = True, date_unit = "ms", default_handler = None)

csv_file = pd.DataFrame(pd.read_csv("biden.csv", sep = ",", header = 0, index_col = False))
csv_file.to_json("bidem.json", orient = "records", date_format = "epoch", double_precision = 10, force_ascii = True, date_unit = "ms", default_handler = None)

csv_file = pd.DataFrame(pd.read_csv("sanders.csv", sep = ",", header = 0, index_col = False))
csv_file.to_json("sanders.json", orient = "records", date_format = "epoch", double_precision = 10, force_ascii = True, date_unit = "ms", default_handler = None)
