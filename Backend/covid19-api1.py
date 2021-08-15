import requests
import json
import datetime

country = "india"  # Default country
base_url = "https://api.covid19api.com/"
countries_url = 'https://api.covid19api.com/countries'

# %%
"""
For getting all country parameters
"""
country_url_params = []
countries = requests.get(countries_url).json()
for c in countries:
    name = c["Slug"]
    country_url_params.append(name)

# %%


url = f"https://api.covid19api.com/country/{country}"


def country_cases(country, url):
    """
    Creating json file for a specific country with timestamps
    """
    summary_url_json = requests.get(url).json()
    with open(f"./data/countries/{country}.json", "w") as file:
        json.dump(summary_url_json, file)


# %%
# Creating 5 json files with all data provided by that route, No need that.
for country_param in country_url_params[0:5]:
    country_cases(country_param)

# %%
# Filtering the Data to get that after t time duration, with below syntax
# https://api.covid19api.com/live/country/south-africa/status/confirmed/date/2020-03-21T13:13:30Z
day1 = datetime.date.today()
time_lag_for_data_obtained = 1

if day1.month < 10:
    today = f"{day1.year}-0{day1.month-time_lag_for_data_obtained}-{day1.day}"
else:
    today = f"{day1.year}-{day1.month}-{day1.day}"
print(today)

specific_date_url = f"https://api.covid19api.com/live/country/{country}/status/confirmed/date/{today}T00:00:00Z"
country_cases(country, specific_date_url)
