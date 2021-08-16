google.load("visualization", "1", { packages: ["geochart"] });
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
    ["State Code", "State", "Intensity"],
    ["IN-UP", "Uttar Pradesh", 32],
    ["IN-MH", "Maharashtra", 34],
    ["IN-BR", "Bihar", 27.5],
    ["IN-WB", "West Bengal", 31.5],
    ["IN-MP", "Madhya Pradesh", 28.5],
    ["IN-TN", "Tamil Nadu", 33],
    ["IN-RJ", "Rajasthan", 29.5],
    ["IN-KA", "Karnataka", 33.5],
    ["IN-GJ", "Gujarat", 29],
    ["IN-AP", "Andhra Pradesh", 32.5],
    ["IN-OR", "Orissa", 30],
    ["IN-TG", "Telangana", 27],
    ["IN-KL", "Kerala", 33.5],
    ["IN-JH", "Jharkhand", 25.5],
    ["IN-AS", "Assam", 26],
    ["IN-PB", "Punjab", 26.5],
    ["IN-CT", "Chhattisgarh", 30.5],
    ["IN-HR", "Haryana", 28],
    ["IN-JK", "Jammu and Kashmir", 24.5],
    ["IN-UT", "Uttarakhand", 25],
    ["IN-HP", "Himachal Pradesh", 24],
    ["IN-TR", "Tripura", 22],
    ["IN-ML", "Meghalaya", 21.5],
    ["IN-MN", "Manipur", 22.5],
    ["IN-NL", "Nagaland", 19.5],
    ["IN-GA", "Goa", 23.5],
    ["IN-AR", "Arunachal Pradesh", 20.5],
    ["IN-MZ", "Mizoram", 20],
    ["IN-SK", "Sikkim", 19],
    ["IN-DL", "Delhi", 31],
    ["IN-PY", "Puducherry", 23],
    ["IN-CH", "Chandigarh", 21],
    ["IN-AN", "Andaman and Nicobar Islands", 18.5],
    ["IN-DN", "Dadra and Nagar Haveli", 30],
    ["IN-DD", "Daman and Diu", 29],
    ["IN-LD", "Lakshadweep", 19],
  ]);

  var opts = {
    region: "IN",
    domain: "IN",
    displayMode: "regions",
    colorAxis: { colors: ["#e5ef88", "#d4b114", "#e85a03"] },
    resolution: "provinces",
    /*backgroundColor: '#81d4fa',*/
    /*datalessRegionColor: '#81d4fa',*/
    defaultColor: "#f5f5f5",
    width: 1500,
    height: 1500,
  };
  var geochart = new google.visualization.GeoChart(
    document.getElementById("visualization")
  );
  geochart.draw(data, opts);
}
