import requests
import json

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


def country_cases(country):
    """
    Creating json file for a specific country with timestamps
    """
    url = f"https://api.covid19api.com/country/{country}"
    summary_url_json = requests.get(url).json()
    with open(f"./countries/{country}.json", "w") as file:
        json.dump(summary_url_json, file)


# %%
# Creating 5 json files with all data provided by that route
for country_param in country_url_params[0:5]:
    country_cases(country_param)

# %%
# Filtering the Data
