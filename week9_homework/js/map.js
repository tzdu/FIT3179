"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Median House Prices As a Proportion of Weekly Wages for States in Australia (Dec '23)",
    "width": 800,
    "height": 400,
    "projection": {"type": "equirectangular"},
    "data": {
      "url": "https://raw.githubusercontent.com/tzdu/FIT3179/refs/heads/main/week9_homework/js/australia_states.json",
      "format": {"type": "topojson", "feature": "STE_2016_AUST"}
    },
    "transform": [
      {
        "lookup": "properties.STE_NAME16",
        "from": {
          "data": {
            "url": "https://raw.githubusercontent.com/tzdu/FIT3179/refs/heads/main/week9_homework/data/house_prices.csv"
          },
          "key": "State",
          "fields": ["Price", "Population", "WeeklyWages"]
        }
      },
      {"calculate": "datum.Price / datum.WeeklyWages", "as": "Proportion"}
    ],
    "mark": {"type": "geoshape"},
    "encoding": {
      "color": {
        "field": "Proportion",
        "type": "quantitative",
        "scale": {
          "type": "threshold",
          "domain": [0.3, 0.4, 0.5],
          "range": ["#fdbe85", "#fd8d3c", "#e6550d", "#a63603"]
  
        }
      },
      "tooltip": [
        {"field": "properties.STE_NAME16", "type": "nominal", "title": "State"},
        {"field": "Proportion", "type": "quantitative"}
      ]
    }
