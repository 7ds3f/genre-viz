document.addEventListener("DOMContentLoaded", () => {
  //read from database and populate datasets
  function populateData(datasets, buff, minRating) {
    //clear any existing data
    for (var platform in datasets) {
      datasets[platform].total = 0;
      for (var genre in datasets[platform].data) {
        datasets[platform].data[genre] = 0;
      }
    }
    //fill with new data
    for (var i = 0; i < IDV_DATA.length; i++) {
      for (var k = 0; k < Object.keys(IDV_DATA[i]["platforms"]).length; k++) {
        for (var j = 0; j < IDV_DATA[i]["genres"].length; j++) {
          if (IDV_DATA[i]["rating"] >= minRating) {
            datasets[Object.keys(IDV_DATA[i]["platforms"])[k]].data[
              IDV_DATA[i]["genres"][j]
            ] += buff;
            datasets[Object.keys(IDV_DATA[i]["platforms"])[k]].total += buff;
          }
        }
      }
    }
  }

  //initialize chart datasets
  const datasets = {
    Netflix: {
      data: {
        Action: 0,
        "Sci-Fi": 0,
        Crime: 0,
        Mystery: 0,
        Romance: 0,
        Drama: 0,
        Horror: 0,
        Thriller: 0,
        Western: 0,
        Comedy: 0,
        Fantasy: 0,
        Adventure: 0,
        History: 0,
        Documentary: 0,
        Musical: 0,
        War: 0,
        Animation: 0,
        Reality: 0
      },
      total: 0,
      BGcolor: "rgba(229, 9, 20, 0.1)",
      BRcolor: PLATFORM_COLORS["Netflix"],
      PTBGcolor: PLATFORM_COLORS["Netflix"],
      PTBRcolor: PLATFORM_COLORS["Netflix"]
    },
    "Amazon Prime": {
      data: {
        Action: 0,
        "Sci-Fi": 0,
        Crime: 0,
        Mystery: 0,
        Romance: 0,
        Drama: 0,
        Horror: 0,
        Thriller: 0,
        Western: 0,
        Comedy: 0,
        Fantasy: 0,
        Adventure: 0,
        History: 0,
        Documentary: 0,
        Musical: 0,
        War: 0,
        Animation: 0,
        Reality: 0
      },
      total: 0,
      BGcolor: "rgba(0, 168, 225, 0.1)",
      BRcolor: PLATFORM_COLORS["Amazon Prime"],
      PTBGcolor: PLATFORM_COLORS["Amazon Prime"],
      PTBRcolor: PLATFORM_COLORS["Amazon Prime"]
    },
    "Apple TV": {
      data: {
        Action: 0,
        "Sci-Fi": 0,
        Crime: 0,
        Mystery: 0,
        Romance: 0,
        Drama: 0,
        Horror: 0,
        Thriller: 0,
        Western: 0,
        Comedy: 0,
        Fantasy: 0,
        Adventure: 0,
        History: 0,
        Documentary: 0,
        Musical: 0,
        War: 0,
        Animation: 0,
        Reality: 0
      },
      total: 0,
      BGcolor: "rgba(46, 46, 46, 0.1)",
      BRcolor: PLATFORM_COLORS["Apple TV"],
      PTBGcolor: PLATFORM_COLORS["Apple TV"],
      PTBRcolor: PLATFORM_COLORS["Apple TV"]
    },
    Hulu: {
      data: {
        Action: 0,
        "Sci-Fi": 0,
        Crime: 0,
        Mystery: 0,
        Romance: 0,
        Drama: 0,
        Horror: 0,
        Thriller: 0,
        Western: 0,
        Comedy: 0,
        Fantasy: 0,
        Adventure: 0,
        History: 0,
        Documentary: 0,
        Musical: 0,
        War: 0,
        Animation: 0,
        Reality: 0
      },
      total: 0,
      BGcolor: "rgba(28, 231, 131, 0.1)",
      BRcolor: PLATFORM_COLORS["Hulu"],
      PTBGcolor: PLATFORM_COLORS["Hulu"],
      PTBRcolor: PLATFORM_COLORS["Hulu"]
    },
    "HBO Max": {
      data: {
        Action: 0,
        "Sci-Fi": 0,
        Crime: 0,
        Mystery: 0,
        Romance: 0,
        Drama: 0,
        Horror: 0,
        Thriller: 0,
        Western: 0,
        Comedy: 0,
        Fantasy: 0,
        Adventure: 0,
        History: 0,
        Documentary: 0,
        Musical: 0,
        War: 0,
        Animation: 0,
        Reality: 0
      },
      total: 0,
      BGcolor: "rgba(88, 34, 180, 0.1)",
      BRcolor: PLATFORM_COLORS["HBO Max"],
      PTBGcolor: PLATFORM_COLORS["HBO Max"],
      PTBRcolor: PLATFORM_COLORS["HBO Max"]
    },
    Crunchyroll: {
      data: {
        Action: 0,
        "Sci-Fi": 0,
        Crime: 0,
        Mystery: 0,
        Romance: 0,
        Drama: 0,
        Horror: 0,
        Thriller: 0,
        Western: 0,
        Comedy: 0,
        Fantasy: 0,
        Adventure: 0,
        History: 0,
        Documentary: 0,
        Musical: 0,
        War: 0,
        Animation: 0,
        Reality: 0
      },
      total: 0,
      BGcolor: "rgba(244, 117, 33, 0.1)",
      BRcolor: PLATFORM_COLORS["Crunchyroll"],
      PTBGcolor: PLATFORM_COLORS["Crunchyroll"],
      PTBRcolor: PLATFORM_COLORS["Crunchyroll"]
    },
    "Disney+": {
      data: {
        Action: 0,
        "Sci-Fi": 0,
        Crime: 0,
        Mystery: 0,
        Romance: 0,
        Drama: 0,
        Horror: 0,
        Thriller: 0,
        Western: 0,
        Comedy: 0,
        Fantasy: 0,
        Adventure: 0,
        History: 0,
        Documentary: 0,
        Musical: 0,
        War: 0,
        Animation: 0,
        Reality: 0
      },
      total: 0,
      BGcolor: "rgba(0, 12, 124, 0.1)",
      BRcolor: PLATFORM_COLORS["Disney+"],
      PTBGcolor: PLATFORM_COLORS["Disney+"],
      PTBRcolor: PLATFORM_COLORS["Disney+"]
    },
    "Paramount+": {
      data: {
        Action: 0,
        "Sci-Fi": 0,
        Crime: 0,
        Mystery: 0,
        Romance: 0,
        Drama: 0,
        Horror: 0,
        Thriller: 0,
        Western: 0,
        Comedy: 0,
        Fantasy: 0,
        Adventure: 0,
        History: 0,
        Documentary: 0,
        Musical: 0,
        War: 0,
        Animation: 0,
        Reality: 0
      },
      total: 0,
      BGcolor: "rgba(32, 99, 254, 0.1)",
      BRcolor: PLATFORM_COLORS["Paramount+"],
      PTBGcolor: PLATFORM_COLORS["Paramount+"],
      PTBRcolor: PLATFORM_COLORS["Paramount+"]
    },
    Peacock: {
      data: {
        Action: 0,
        "Sci-Fi": 0,
        Crime: 0,
        Mystery: 0,
        Romance: 0,
        Drama: 0,
        Horror: 0,
        Thriller: 0,
        Western: 0,
        Comedy: 0,
        Fantasy: 0,
        Adventure: 0,
        History: 0,
        Documentary: 0,
        Musical: 0,
        War: 0,
        Animation: 0,
        Reality: 0
      },
      total: 0,
      BGcolor: "rgba(251, 204, 17, 0.1)",
      BRcolor: PLATFORM_COLORS["Peacock"],
      PTBGcolor: PLATFORM_COLORS["Peacock"],
      PTBRcolor: PLATFORM_COLORS["Peacock"]
    }
  };

  //insert data from remote json into datasets
  populateData(datasets, 1, 3.5);

  //determine platform with maximum content based on graph parameters
  function updateStatus(datasets) {
    var maxPlatform = "Netflix";
    var max = datasets["Netflix"].total;
    for (var platform in datasets) {
      if (datasets[platform].total > max) {
        maxPlatform = platform;
        max = datasets[platform].total;
      }
    }
    const element = document.getElementById("status");
    const element2 = document.getElementById("status-platform");
    const element3 = document.getElementById("star-selection");
    element2.innerHTML = maxPlatform;
    element2.style.color = datasets[maxPlatform].BRcolor;
    element.innerHTML =
      "has the most total content (" +
      max +
      " titles) at or above " +
      getStarCount(document.getElementById("rating-slider").value) +
      " stars";
    element3.innerHTML =
      "Minimum Rating (Stars): " +
      getStarCount(document.getElementById("rating-slider").value);
  }

  //initialize the chart
  const chartContainer = document.getElementById("chart-container");
  const ctx = document.getElementById("chart").getContext("2d");
  Chart.defaults.font.family = "Lexend";
  Chart.defaults.plugins.tooltip.borderColor = "rgba(0,0,0,0.1)";
  Chart.defaults.plugins.tooltip.titleColor = "black";
  Chart.defaults.plugins.tooltip.backgroundColor = "white";
  Chart.defaults.plugins.tooltip.borderWidth = "1";
  Chart.defaults.plugins.tooltip.bodyColor = "black";
  let chart;

  //update + redraw chart with new data
  function updateChart() {
    //determine checkbox status
    const checkedLabels = Array.from(
      document.getElementsByClassName("label-checkbox")
    )
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    const checkedDatasets = Array.from(
      document.getElementsByClassName("dataset-checkbox")
    )
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    //gather data based on check marks
    const cdl = checkedDatasets.length;
    const cll = checkedLabels.length;
    let dataFinal = {
      Netflix: {
        data: []
      },
      "Amazon Prime": {
        data: []
      },
      "Apple TV": {
        data: []
      },
      Hulu: {
        data: []
      },
      "HBO Max": {
        data: []
      },
      Crunchyroll: {
        data: []
      },
      "Disney+": {
        data: []
      },
      "Paramount+": {
        data: []
      },
      Peacock: {
        data: []
      }
    };
    for (var i = 0; i < cdl; i++) {
      var tmp = [];
      for (var j = 0; j < cll; j++) {
        tmp.push(datasets[checkedDatasets[i]]["data"][checkedLabels[j]]);
      }
      dataFinal[checkedDatasets[i]].data = tmp;
    }
    //build chart data
    const data = {
      labels: checkedLabels,
      datasets: checkedDatasets.map((dataset) => ({
        label: dataset,
        data: dataFinal[dataset].data,
        backgroundColor: datasets[dataset].BGcolor,
        borderColor: datasets[dataset].BRcolor,
        pointBackgroundColor: datasets[dataset].PTBGcolor,
        pointBorderColor: datasets[dataset].PTBRcolor,
        pointRadius: 6
      }))
    };
    //build chart
    if (chart) {
      chart.data = data;
      chart.update();
    } else {
      chart = new Chart(ctx, {
        type: "radar",
        data: data,
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              displayColors: false,
              //tooltip callbacks
              callbacks: {
                labelTextColor: function (context) {
                  return context.dataset.borderColor;
                },
                label: function (context) {
                  const checkedDatasets = Array.from(
                    document.getElementsByClassName("dataset-checkbox")
                  )
                    .filter((checkbox) => checkbox.checked)
                    .map((checkbox) => checkbox.value);
                  const checkedLabels = Array.from(
                    document.getElementsByClassName("label-checkbox")
                  )
                    .filter((checkbox) => checkbox.checked)
                    .map((checkbox) => checkbox.value);
                  return (
                    "[" +
                    context.dataset.label +
                    "] " +
                    context.dataset.data[context.dataIndex] +
                    " " +
                    checkedLabels[context.dataIndex] +
                    " Titles : " +
                    datasets[checkedDatasets[context.datasetIndex]].total +
                    " Total Titles"
                  );
                },
                afterTitle: function (context) {
                  return (
                    "@ Min. Rating of " +
                    getStarCount(document.getElementById("rating-slider").value) +
                    " stars"
                  );
                }
              }
            }
          }
        }
      });
    }
  }

  //update chart if any checkbox state changes
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateChart);
  });

  //update chart after initial data arrives
  updateChart();

  //checkbox toggles
  var genresChecked = false;
  var platformsChecked = false;

  //toggle all genre checkboxes on/off
  function toggleGenreCheckboxes() {
    var checkboxes = document.querySelectorAll('input[class="label-checkbox"]');
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = genresChecked;
    });
    genresChecked = !genresChecked;
    updateChart();
  }

  //toggle all platform checkboxes on/off
  function togglePlatformCheckboxes() {
    var checkboxes = document.querySelectorAll('input[class="dataset-checkbox"]');
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = platformsChecked;
    });
    platformsChecked = !platformsChecked;
    updateChart();
  }
  
  //slider handling
  function getStarCount(value) {
    if (value == 1) {
      return 1;
    } else if (value == 2) {
      return 1.5;
    } else if (value == 3) {
      return 2;
    } else if (value == 4) {
      return 2.5;
    } else if (value == 5) {
      return 3;
    } else if (value == 6) {
      return 3.5;
    } else if (value == 7) {
      return 4;
    } else if (value == 8) {
      return 4.5;
    }
  }

  function handleSliderChange() {
    var slider = document.getElementById("rating-slider");
    var value = slider.value;
    populateData(datasets, 1, getStarCount(value));
    updateChart();
    updateStatus(datasets);
  }

  function initializeSlider() {
    var slider = document.getElementById("rating-slider");
    slider.addEventListener("input", handleSliderChange);
  }
  initializeSlider();
  updateStatus(datasets);
});
