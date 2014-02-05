﻿jQuery(document).ready(function ($) {
    $('.datepicker').datepicker();

    var mapData = {
        "sites": [
            {
                "SiteCode": "RB_KF_BA",
                "SiteName": "Foothill Drive Advanced Aquatic",
                "Latitude": 40.755961,
                "Longitude": -111.835567,
                "Network": "GamutRBC"
            },
            {
                "SiteCode": "RB_KF_CLIMATE",
                "SiteName": "Foothill Drive Advanced Aquatic",
                "Latitude": 40.760744,
                "Longitude": -111.831172,
                "Network": "Logan"
            },
            {
                "SiteCode": "RB_GIRF_C",
                "SiteName": "Green Infrastructure Climate",
                "Latitude": 40.764,
                "Longitude": -111.828181,
                "Network": "Provo"
            },
            {
                "SiteCode": "RB_RBG_BB",
                "SiteName": "Cottams Grove Basic Aquatic",
                "Latitude": 40.774256,
                "Longitude": -111.816903,
                "Network": "GIRF"
            },
            {
                "SiteCode": "RB_RBG_BA",
                "SiteName": "Red Butte Gate Basic Aquatic",
                "Latitude": 40.780264,
                "Longitude": -111.807286,
                "Network": "GIRN"
            },
            {
                "SiteCode": "RB_ARBR_C",
                "SiteName": "Above Red Butte Reservoir",
                "Latitude": 40.780369,
                "Longitude": -111.802456,
                "Network": "GamutRBC"
            },
            {
                "SiteCode": "RB_ARBR_AA",
                "SiteName": "Above Red Butte Reservoir",
                "Latitude": 40.760656565,
                "Longitude": -111.76656898,
                "Network": "GIRN"
            },
            {
                "SiteCode": "RB_ARBR_AB",
                "SiteName": "Above Red Butte Reservoir",
                "Latitude": 40.779725,
                "Longitude": -111.8064,
                "Network": "Logan"
            }
        ]
    };

    var filters = {
        "divisions": [
          {
              "id": "Network",
              "title": "Network",
              "items": [
                {
                    "id": "GamutRBC",
                    "name": "Red Butte Creek GAMUT",
                    "count": 9
                },
               { 
                    "id": "Logan",
                    "name": "Logan River",
                    "count": 10
                },
                {
                    "id": "Provo",
                    "name": "Provo River",
                    "count": 8
                },
                {
                    "id": "GIRF",
                    "name": "GIRF",
                    "count": 20
                },
                {
                    "id": "GIRN",
                    "name": "GIRN",
                    "count": 10
                }
              ]
          },
          {
              "id": "Site",
              "title": "Site",
              "items": [
                {
                    "id": "RB_KF_BA",
                    "name": "Knowlton Fork Aquatic",
                    "count": 40,
                    "network": "GamutRBC"
                },
                {
                    "id": "RB_KF_CLIMATE",
                    "name": "Knowlton Fork Climate",
                    "count": 40,
                    "network": "Logan"
                },
                {
                    "id": "RB_GIRF_C",
                    "name": "Green Infrastructure Climate",
                    "count": 40,
                    "network": "Provo"
                },
                {
                    "id": "RB_RBG_BB",
                    "name": "Cottams Grove Basic Aquatic",
                    "count": 40,
                    "network": "GIRF"
                },
                {
                    "id": "RB_RBG_BA",
                    "name": "Red Butte Gate Basic Aquatic",
                    "count": 40,
                    "network": "GIRN"
                },
                {
                    "id": "RB_ARBR_C",
                    "name": "Above Red Butte Reservoir",
                    "count": 40,
                    "network": "GamutRBC"
                },
                {
                    "id": "RB_ARBR_AA",
                    "name": "Above Red Butte Reservoir",
                    "count": 40,
                    "network": "GIRN"
                },
                {
                    "id": "RB_ARBR_AB",
                    "name": "Above Red Butte Reservoir",
                    "count": 40,
                    "network": "Logan"
                }

              ]
          },
          {
              "id": "VariableCategory",
              "title": "Variable Category",
              "items": [
                {
                    "id": "category_climate",
                    "name": "Climate",
                    "count": 150
                },
                {
                    "id": "category_hydrologic",
                    "name": "Hydrologic",
                    "count": 200
                },
                {
                    "id": "category_waterquality",
                    "name": "Water Quality",
                    "count": 30
                },
                {
                    "id": "category_soil",
                    "name": "Soil",
                    "count": 135
                }
              ]
          },
          {
              "id": "VariableName",
              "title": "Variable Name",
              "items": [
                {
                    "id": "variable_temperature",
                    "name": "Temperature",
                    "count": 86
                },
                {
                    "id": "variable_oxygen",
                    "name": "Oxygen, dissolved",
                    "count": 75
                },
                {
                    "id": "variable_conductance",
                    "name": "Specific Conductance",
                    "count": 75
                },
                {
                    "id": "variable_ph",
                    "name": "pH",
                    "count": 75
                }
              ]
          },
          {
              "id": "ControlLevel",
              "title": "Quality Control Level",
              "items": [
                {
                    "id": "level_rawdata",
                    "name": "Raw Data",
                    "count": 300
                },
                {
                    "id": "level_controlleddata",
                    "name": "Quality Controlled Data",
                    "count": 50
                }
              ]
          }
        ]
    };

    function getURLParameter(name) {
        return decodeURI(
            (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1]
        );
    }
    
    var tab = getURLParameter("view");
    if (tab == "datasets") {
        $("#datasetsTab").addClass("active");
        $("#datasetsContent").addClass("active");
    }
    else if (tab == "visualization") {
        $("#visualizationTab").addClass("active");
        $("#visualizationContent").addClass("active");
    }
    else {
        $("#mapTab").addClass("active");
        $("#mapContent").addClass("active");
    }
  
    // Build left panel filters from JSON
    filters.divisions.forEach(function (entry) {
        $("#leftPanel").append(
            "<div class='panel panel-default'>\
                <div class='panel-heading'>\
                    <h4 class='panel-title'>\
                        <a data-toggle='collapse' class='accordion-toggle' data-parent='#accordion' href='#" + entry.id + "'> " + entry.title + "</a>\
                    </h4>\
                </div>\
                <div id='" + entry.id + "' class='panel-collapse collapse in'>\
                    <div class='panel-body'>\
                        <div class='list-group'>\
                            <ul class='list-group inputs-group'>\
                            </ul>\
                        </div>\
                    </div>\
                </div>\
            </div>");
        entry.items.forEach(function (item) {
            $('#' + entry.id + ' ul').append(
                '<li class="list-group-item"><span class="badge">' + item.count + '</span><label class="checkbox"><input type="checkbox" checked  data-network="' + item.network +  '" value="' + item.id + '"> ' + item.name + '</label></li>');
        });
    });

    var map;
    var markers = [];

    // Initialize map canvas
    function initialize() {
        var map_canvas = document.getElementById('map_canvas');
        var map_options = {
            center: new google.maps.LatLng(40.760744, -111.816903),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }
        map = new google.maps.Map(map_canvas, map_options);
        // Load all markers
        mapData.sites.forEach(function (entry) {            // Create marker for this site
            addMarker(entry);

        });
    }

    $('#Network input[type="checkbox"]').click(function () {
        var that = this;
        var sites = $('#Site input[data-network="' + that.value + '"]');
        //console.log(sites);
        if (that.checked) {
            mapData.sites.forEach(function (entry) {            // Load markers from JSON
                if (entry.Network == that.value) {
                    var site = $('#Site input[value="' + entry.SiteCode + '"]');
                    if (site[0] != null) {                      // Check that the marker is not already created
                        if (site[0].checked == false) {
                            addMarker(entry);
                        } 
                    }
                }
            });
            for (var i = 0; i < sites.length; i++) {            // Check site's checkbox
                sites[i].checked = true;
            }
        }
        else { 
            for (var i = 0; i < markers.length; i++) {          //delete markers from this network
                if (markers[i].site.Network == that.value) {
                    //markers[i].setMap(null);
                    removeMarker(markers[i]);
                    markers.splice(i, 1);
                    i--;                                        // because we removed one marker
                }
            }
            for (var i = 0; i < sites.length; i++) {            // Uncheck corresponding sites
                sites[i].checked = false;
            }
        }
    });

    $('#Site input[type="checkbox"]').click(function () {
        var that = this;
        if (that.checked) {
            var i = 1;
            mapData.sites.forEach(function (entry) {            // Create marker for this site
                if (entry.SiteCode == that.value) {
                    addMarker(entry);
                    // check the network's checkbox
                    var network = $('#Network input[value="' + that.getAttribute('data-network') + '"]')[0].checked = true;
                }
            });
        }
        else {
            for (var i = 0; i < markers.length; i++) {          //delete marker for this site
                if (markers[i].site.SiteCode == that.value) {
                    removeMarker(markers[i]);
                    //markers[i].setMap(null);
                    markers.splice(i, 1);
                    i--;                                        // because we removed one marker

                    var checkedSites = $('#Site input[data-network="' + that.getAttribute('data-network') + '"]:checked');  // Get corresponding marked checkboxes
                    if (checkedSites.length == 0) {
                        var network = $('#Network input[value="' + that.getAttribute('data-network') + '"]')[0].checked = false;                       
                    }
                }
            }
        }
    });

    function removeMarker(marker) {
        (function animationStep() {
            //Converting GPS to World Coordinates
            var newPosition = map.getProjection().fromLatLngToPoint(marker.getPosition());

            //Moving 10px to up
            newPosition.y -= 10 / (1 << map.getZoom());

            //Converting World Coordinates to GPS 
            newPosition = map.getProjection().fromPointToLatLng(newPosition);
            //updating maker's position
            marker.setPosition(newPosition);
            //Checking whether marker is out of bounds
            if (map.getBounds().getNorthEast().lat() < newPosition.lat()) {
                marker.setMap(null);
            } else {
                //Repeating animation step
                setTimeout(animationStep, 6);
            }
        })();
    }

    // Add a marker to the map
    function addMarker(entry) {
        var location = new google.maps.LatLng(entry.Latitude, entry.Longitude);
        marker = new google.maps.Marker({
            position: location,
            map: map,
            animation: google.maps.Animation.DROP,
            site: entry,
        });
        markers.push(marker);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    // Initialize plot area
    var margin = { top: 0, right: 20, bottom: 120, left: 50 },
            width = $("#visualizationContent").width() - margin.left - margin.right,
            height = $("#visualizationContent").height() - margin.top - margin.bottom;

    /* Data Visualization */
    function drawTimeSeries() {
        var parseDate = d3.time.format("%d-%b-%y").parse;
        
        var x = d3.time.scale()
            .range([0, width]);
    
        var y = d3.scale.linear()
            .range([height, 0]);
    
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");
    
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");
    
        var line = d3.svg.line()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.close); });
    
        var svg = d3.select(".graphContainer").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
        d3.tsv("/files/data.tsv", function (error, data) {
            data.forEach(function (d) {
                d.date = parseDate(d.date);
                d.close = +d.close;
            });
    
            x.domain(d3.extent(data, function (d) { return d.date; }));
            y.domain(d3.extent(data, function (d) { return d.close; }));
    
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);
    
            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
              .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("pH ");
    
            svg.append("path")
                .datum(data)
                .attr("class", "line")
                .attr("d", line);
        });
    }

    function drawHistogram() {
        /* Initialize Histogram*/
        // Generate an Irwin–Hall distribution of 10 random variables.
        var values = d3.range(1000).map(d3.random.irwinHall(10));

        // A formatter for counts.
        var formatCount = d3.format(",.0f");

        var x = d3.scale.linear()
            .domain([0, 1])
            .range([0, width]);

        // Generate a histogram using twenty uniformly-spaced bins.
        var data = d3.layout.histogram()
            .bins(x.ticks(20))
            (values);

        var y = d3.scale.linear()
            .domain([0, d3.max(data, function (d) { return d.y; })])
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var svg = d3.select(".graphContainer").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var bar = svg.selectAll(".bar")
            .data(data)
          .enter().append("g")
            .attr("class", "bar")
            .attr("transform", function (d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });

        bar.append("rect")
            .attr("x", 1)
            .attr("width", x(data[0].dx) - 1)
            .attr("height", function (d) { return height - y(d.y); });

        bar.append("text")
            .attr("dy", ".75em")
            .attr("y", 6)
            .attr("x", x(data[0].dx) / 2)
            .attr("text-anchor", "middle")
            .text(function (d) { return formatCount(d.y); });

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
    }

    function drawScatterPlot() {
        var x = d3.scale.linear()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var color = d3.scale.category10();

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var svg = d3.select(".graphContainer").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.tsv("/files/scatterplot.tsv", function (error, data) {
            data.forEach(function (d) {
                d.sepalLength = +d.sepalLength;
                d.sepalWidth = +d.sepalWidth;
            });

            x.domain(d3.extent(data, function (d) { return d.sepalWidth; })).nice();
            y.domain(d3.extent(data, function (d) { return d.sepalLength; })).nice();

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis)
              .append("text")
                .attr("class", "label")
                .attr("x", width)
                .attr("y", -6)
                .style("text-anchor", "end")
                .text("Sepal Width (cm)");

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
              .append("text")
                .attr("class", "label")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Sepal Length (cm)")

            svg.selectAll(".dot")
                .data(data)
              .enter().append("circle")
                .attr("class", "dot")
                .attr("r", 3.5)
                .attr("cx", function (d) { return x(d.sepalWidth); })
                .attr("cy", function (d) { return y(d.sepalLength); })
                .style("fill", function (d) { return color(d.species); });

            var legend = svg.selectAll(".legend")
                .data(color.domain())
              .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });

            legend.append("rect")
                .attr("x", width - 18)
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", color);

            legend.append("text")
                .attr("x", width - 24)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "end")
                .text(function (d) { return d; });

        });
    }

    function drawMultiSeries() {


        var parseDate = d3.time.format("%Y%m%d").parse;

        var x = d3.time.scale()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var color = d3.scale.category10();

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var line = d3.svg.line()
            .interpolate("basis")
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.temperature); });

        var svg = d3.select(".graphContainer").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.tsv("/files/multiseries.tsv", function (error, data) {
            color.domain(d3.keys(data[0]).filter(function (key) { return key !== "date"; }));

            data.forEach(function (d) {
                d.date = parseDate(d.date);
            });

            var cities = color.domain().map(function (name) {
                return {
                    name: name,
                    values: data.map(function (d) {
                        return { date: d.date, temperature: +d[name] };
                    })
                };
            });

            x.domain(d3.extent(data, function (d) { return d.date; }));

            y.domain([
              d3.min(cities, function (c) { return d3.min(c.values, function (v) { return v.temperature; }); }),
              d3.max(cities, function (c) { return d3.max(c.values, function (v) { return v.temperature; }); })
            ]);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
              .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Temperature (ºF)");

            var city = svg.selectAll(".city")
                .data(cities)
              .enter().append("g")
                .attr("class", "city");

            city.append("path")
                .attr("class", "line")
                .attr("d", function (d) { return line(d.values); })
                .style("stroke", function (d) { return color(d.name); });

            city.append("text")
                .datum(function (d) { return { name: d.name, value: d.values[d.values.length - 1] }; })
                .attr("transform", function (d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
                .attr("x", 3)
                .attr("dy", ".35em")
                .text(function (d) { return d.name; });
        });



    }

    function drawAreaChart() {


        var parseDate = d3.time.format("%Y%m%d").parse;

        var x = d3.time.scale()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var area = d3.svg.area()
            .x(function (d) { return x(d.date); })
            .y0(function (d) { return y(d.low); })
            .y1(function (d) { return y(d.high); });

        var svg = d3.select(".graphContainer").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.tsv("/files/areachart.tsv", function (error, data) {
            data.forEach(function (d) {
                d.date = parseDate(d.date);
                d.low = +d.low;
                d.high = +d.high;
            });

            x.domain(d3.extent(data, function (d) { return d.date; }));
            y.domain([d3.min(data, function (d) { return d.low; }), d3.max(data, function (d) { return d.high; })]);

            svg.append("path")
                .datum(data)
                .attr("class", "area")
                .attr("d", area);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
              .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Temperature (ºF)");
        });
    }

    function drawMultiHistogram() {
        var n = 5, // number of layers
        m = 20, // number of samples per layer

        stack = d3.layout.stack(),
        layers = stack(d3.range(n).map(function () { return bumpLayer(m, .1); })),
        yGroupMax = d3.max(layers, function (layer) { return d3.max(layer, function (d) { return d.y; }); }),
        yStackMax = d3.max(layers, function (layer) { return d3.max(layer, function (d) { return d.y0 + d.y; }); });


        var x = d3.scale.ordinal()
            .domain(d3.range(m))
            .rangeRoundBands([0, width], .08);

        var y = d3.scale.linear()
            .domain([0, yStackMax])
            .range([height, 0]);

        var color = d3.scale.linear()
            .domain([0, n - 1])
            .range(["#aad", "#556"]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .tickSize(0)
            .tickPadding(6)
            .orient("bottom");

        var svg = d3.select(".graphContainer").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var layer = svg.selectAll(".layer")
            .data(layers)
          .enter().append("g")
            .attr("class", "layer")
            .style("fill", function (d, i) { return color(i); });

        var rect = layer.selectAll("rect")
            .data(function (d) { return d; })
          .enter().append("rect")
            .attr("x", function (d) { return x(d.x); })
            .attr("y", height)
            .attr("width", x.rangeBand())
            .attr("height", 0);

        rect.transition()
            .delay(function (d, i) { return i * 10; })
            .attr("y", function (d) { return y(d.y0 + d.y); })
            .attr("height", function (d) { return y(d.y0) - y(d.y0 + d.y); });
        
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        d3.selectAll("input").on("change", change);

        var timeout = setTimeout(function () {
            d3.select("input[value=\"grouped\"]").property("checked", true).each(change);
        }, 2000);

        function change() {
            clearTimeout(timeout);
            if (this.value === "grouped") transitionGrouped();
            else transitionStacked();
        }

        function transitionGrouped() {
            y.domain([0, yGroupMax]);

            rect.transition()
                .duration(500)
                .delay(function (d, i) { return i * 10; })
                .attr("x", function (d, i, j) { return x(d.x) + x.rangeBand() / n * j; })
                .attr("width", x.rangeBand() / n)
              .transition()
                .attr("y", function (d) { return y(d.y); })
                .attr("height", function (d) { return height - y(d.y); });
        }

        function transitionStacked() {
            y.domain([0, yStackMax]);

            rect.transition()
                .duration(500)
                .delay(function (d, i) { return i * 10; })
                .attr("y", function (d) { return y(d.y0 + d.y); })
                .attr("height", function (d) { return y(d.y0) - y(d.y0 + d.y); })
              .transition()
                .attr("x", function (d) { return x(d.x); })
                .attr("width", x.rangeBand());
        }

        // Inspired by Lee Byron's test data generator.
        function bumpLayer(n, o) {

            function bump(a) {
                var x = 1 / (.1 + Math.random()),
                    y = 2 * Math.random() - .5,
                    z = 10 / (.1 + Math.random());
                for (var i = 0; i < n; i++) {
                    var w = (i / n - y) * z;
                    a[i] += x * Math.exp(-w * w);
                }
            }

            var a = [], i;
            for (i = 0; i < n; ++i) a[i] = o + o * Math.random();
            for (i = 0; i < 5; ++i) bump(a);
            return a.map(function (d, i) { return { x: i, y: Math.max(0, d) }; });
        }
    }

    function drawMultiBarChart() {

        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);

        var y = d3.scale.linear()
            .rangeRound([height, 0]);

        var color = d3.scale.ordinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .tickFormat(d3.format(".2s"));

        var svg = d3.select(".graphContainer").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.csv("/files/multibarchart.csv", function (error, data) {
            color.domain(d3.keys(data[0]).filter(function (key) { return key !== "State"; }));

            data.forEach(function (d) {
                var y0 = 0;
                d.ages = color.domain().map(function (name) { return { name: name, y0: y0, y1: y0 += +d[name] }; });
                d.total = d.ages[d.ages.length - 1].y1;
            });

            data.sort(function (a, b) { return b.total - a.total; });

            x.domain(data.map(function (d) { return d.State; }));
            y.domain([0, d3.max(data, function (d) { return d.total; })]);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
              .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Population");

            var state = svg.selectAll(".state")
                .data(data)
              .enter().append("g")
                .attr("class", "g")
                .attr("transform", function (d) { return "translate(" + x(d.State) + ",0)"; });

            state.selectAll("rect")
                .data(function (d) { return d.ages; })
              .enter().append("rect")
                .attr("width", x.rangeBand())
                .attr("y", function (d) { return y(d.y1); })
                .attr("height", function (d) { return y(d.y0) - y(d.y1); })
                .style("fill", function (d) { return color(d.name); });

            var legend = svg.selectAll(".legend")
                .data(color.domain().slice().reverse())
              .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });

            legend.append("rect")
                .attr("x", width - 18)
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", color);

            legend.append("text")
                .attr("x", width - 24)
                .attr("y", 9)
                .attr("dy", ".35em")
                .style("text-anchor", "end")
                .text(function (d) { return d; });

        });

    }

    drawTimeSeries();

});