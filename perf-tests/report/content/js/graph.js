/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 69770.0, "series": [{"data": [[0.0, 2.0], [0.1, 2.0], [0.2, 2.0], [0.3, 3.0], [0.4, 3.0], [0.5, 3.0], [0.6, 3.0], [0.7, 3.0], [0.8, 3.0], [0.9, 3.0], [1.0, 3.0], [1.1, 3.0], [1.2, 3.0], [1.3, 3.0], [1.4, 3.0], [1.5, 3.0], [1.6, 3.0], [1.7, 3.0], [1.8, 3.0], [1.9, 3.0], [2.0, 3.0], [2.1, 3.0], [2.2, 3.0], [2.3, 3.0], [2.4, 4.0], [2.5, 4.0], [2.6, 4.0], [2.7, 4.0], [2.8, 4.0], [2.9, 4.0], [3.0, 4.0], [3.1, 4.0], [3.2, 4.0], [3.3, 4.0], [3.4, 4.0], [3.5, 4.0], [3.6, 4.0], [3.7, 4.0], [3.8, 4.0], [3.9, 4.0], [4.0, 5.0], [4.1, 5.0], [4.2, 5.0], [4.3, 5.0], [4.4, 5.0], [4.5, 5.0], [4.6, 5.0], [4.7, 5.0], [4.8, 5.0], [4.9, 6.0], [5.0, 6.0], [5.1, 6.0], [5.2, 6.0], [5.3, 6.0], [5.4, 6.0], [5.5, 6.0], [5.6, 6.0], [5.7, 7.0], [5.8, 7.0], [5.9, 7.0], [6.0, 7.0], [6.1, 7.0], [6.2, 8.0], [6.3, 8.0], [6.4, 8.0], [6.5, 8.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 9.0], [7.2, 9.0], [7.3, 9.0], [7.4, 9.0], [7.5, 9.0], [7.6, 9.0], [7.7, 9.0], [7.8, 9.0], [7.9, 9.0], [8.0, 9.0], [8.1, 9.0], [8.2, 9.0], [8.3, 10.0], [8.4, 10.0], [8.5, 10.0], [8.6, 10.0], [8.7, 10.0], [8.8, 10.0], [8.9, 10.0], [9.0, 10.0], [9.1, 10.0], [9.2, 10.0], [9.3, 10.0], [9.4, 10.0], [9.5, 10.0], [9.6, 10.0], [9.7, 10.0], [9.8, 10.0], [9.9, 10.0], [10.0, 10.0], [10.1, 11.0], [10.2, 11.0], [10.3, 11.0], [10.4, 11.0], [10.5, 11.0], [10.6, 11.0], [10.7, 11.0], [10.8, 11.0], [10.9, 11.0], [11.0, 11.0], [11.1, 11.0], [11.2, 11.0], [11.3, 11.0], [11.4, 11.0], [11.5, 11.0], [11.6, 11.0], [11.7, 11.0], [11.8, 11.0], [11.9, 11.0], [12.0, 11.0], [12.1, 12.0], [12.2, 12.0], [12.3, 12.0], [12.4, 12.0], [12.5, 12.0], [12.6, 12.0], [12.7, 12.0], [12.8, 12.0], [12.9, 12.0], [13.0, 12.0], [13.1, 12.0], [13.2, 12.0], [13.3, 12.0], [13.4, 12.0], [13.5, 12.0], [13.6, 12.0], [13.7, 12.0], [13.8, 12.0], [13.9, 12.0], [14.0, 12.0], [14.1, 12.0], [14.2, 12.0], [14.3, 13.0], [14.4, 13.0], [14.5, 13.0], [14.6, 13.0], [14.7, 13.0], [14.8, 13.0], [14.9, 13.0], [15.0, 13.0], [15.1, 13.0], [15.2, 13.0], [15.3, 13.0], [15.4, 13.0], [15.5, 13.0], [15.6, 13.0], [15.7, 13.0], [15.8, 13.0], [15.9, 13.0], [16.0, 13.0], [16.1, 13.0], [16.2, 13.0], [16.3, 13.0], [16.4, 13.0], [16.5, 13.0], [16.6, 13.0], [16.7, 14.0], [16.8, 14.0], [16.9, 14.0], [17.0, 14.0], [17.1, 14.0], [17.2, 14.0], [17.3, 14.0], [17.4, 14.0], [17.5, 14.0], [17.6, 14.0], [17.7, 14.0], [17.8, 14.0], [17.9, 14.0], [18.0, 14.0], [18.1, 14.0], [18.2, 14.0], [18.3, 14.0], [18.4, 14.0], [18.5, 14.0], [18.6, 14.0], [18.7, 14.0], [18.8, 14.0], [18.9, 14.0], [19.0, 14.0], [19.1, 14.0], [19.2, 15.0], [19.3, 15.0], [19.4, 15.0], [19.5, 15.0], [19.6, 15.0], [19.7, 15.0], [19.8, 15.0], [19.9, 15.0], [20.0, 15.0], [20.1, 15.0], [20.2, 15.0], [20.3, 15.0], [20.4, 15.0], [20.5, 15.0], [20.6, 15.0], [20.7, 15.0], [20.8, 15.0], [20.9, 15.0], [21.0, 15.0], [21.1, 15.0], [21.2, 15.0], [21.3, 15.0], [21.4, 15.0], [21.5, 15.0], [21.6, 15.0], [21.7, 15.0], [21.8, 15.0], [21.9, 15.0], [22.0, 15.0], [22.1, 15.0], [22.2, 16.0], [22.3, 16.0], [22.4, 16.0], [22.5, 16.0], [22.6, 16.0], [22.7, 16.0], [22.8, 16.0], [22.9, 16.0], [23.0, 16.0], [23.1, 16.0], [23.2, 16.0], [23.3, 16.0], [23.4, 16.0], [23.5, 16.0], [23.6, 16.0], [23.7, 16.0], [23.8, 16.0], [23.9, 16.0], [24.0, 16.0], [24.1, 16.0], [24.2, 16.0], [24.3, 16.0], [24.4, 16.0], [24.5, 16.0], [24.6, 16.0], [24.7, 16.0], [24.8, 17.0], [24.9, 17.0], [25.0, 17.0], [25.1, 17.0], [25.2, 17.0], [25.3, 17.0], [25.4, 17.0], [25.5, 17.0], [25.6, 17.0], [25.7, 17.0], [25.8, 17.0], [25.9, 17.0], [26.0, 17.0], [26.1, 17.0], [26.2, 17.0], [26.3, 17.0], [26.4, 17.0], [26.5, 17.0], [26.6, 17.0], [26.7, 17.0], [26.8, 17.0], [26.9, 17.0], [27.0, 17.0], [27.1, 17.0], [27.2, 17.0], [27.3, 17.0], [27.4, 17.0], [27.5, 17.0], [27.6, 17.0], [27.7, 18.0], [27.8, 18.0], [27.9, 18.0], [28.0, 18.0], [28.1, 18.0], [28.2, 18.0], [28.3, 18.0], [28.4, 18.0], [28.5, 18.0], [28.6, 18.0], [28.7, 18.0], [28.8, 18.0], [28.9, 18.0], [29.0, 18.0], [29.1, 18.0], [29.2, 18.0], [29.3, 18.0], [29.4, 18.0], [29.5, 18.0], [29.6, 18.0], [29.7, 18.0], [29.8, 18.0], [29.9, 18.0], [30.0, 18.0], [30.1, 18.0], [30.2, 18.0], [30.3, 18.0], [30.4, 18.0], [30.5, 18.0], [30.6, 18.0], [30.7, 19.0], [30.8, 19.0], [30.9, 19.0], [31.0, 19.0], [31.1, 19.0], [31.2, 19.0], [31.3, 19.0], [31.4, 19.0], [31.5, 19.0], [31.6, 19.0], [31.7, 19.0], [31.8, 19.0], [31.9, 19.0], [32.0, 19.0], [32.1, 19.0], [32.2, 19.0], [32.3, 19.0], [32.4, 19.0], [32.5, 19.0], [32.6, 19.0], [32.7, 19.0], [32.8, 19.0], [32.9, 19.0], [33.0, 19.0], [33.1, 19.0], [33.2, 19.0], [33.3, 19.0], [33.4, 19.0], [33.5, 19.0], [33.6, 20.0], [33.7, 20.0], [33.8, 20.0], [33.9, 20.0], [34.0, 20.0], [34.1, 20.0], [34.2, 20.0], [34.3, 20.0], [34.4, 20.0], [34.5, 20.0], [34.6, 20.0], [34.7, 20.0], [34.8, 20.0], [34.9, 20.0], [35.0, 20.0], [35.1, 20.0], [35.2, 20.0], [35.3, 20.0], [35.4, 20.0], [35.5, 20.0], [35.6, 20.0], [35.7, 20.0], [35.8, 20.0], [35.9, 20.0], [36.0, 20.0], [36.1, 20.0], [36.2, 20.0], [36.3, 21.0], [36.4, 21.0], [36.5, 21.0], [36.6, 21.0], [36.7, 21.0], [36.8, 21.0], [36.9, 21.0], [37.0, 21.0], [37.1, 21.0], [37.2, 21.0], [37.3, 21.0], [37.4, 21.0], [37.5, 21.0], [37.6, 21.0], [37.7, 21.0], [37.8, 21.0], [37.9, 21.0], [38.0, 21.0], [38.1, 21.0], [38.2, 21.0], [38.3, 21.0], [38.4, 21.0], [38.5, 21.0], [38.6, 21.0], [38.7, 21.0], [38.8, 21.0], [38.9, 21.0], [39.0, 22.0], [39.1, 22.0], [39.2, 22.0], [39.3, 22.0], [39.4, 22.0], [39.5, 22.0], [39.6, 22.0], [39.7, 22.0], [39.8, 22.0], [39.9, 22.0], [40.0, 22.0], [40.1, 22.0], [40.2, 22.0], [40.3, 22.0], [40.4, 22.0], [40.5, 22.0], [40.6, 22.0], [40.7, 22.0], [40.8, 22.0], [40.9, 22.0], [41.0, 22.0], [41.1, 22.0], [41.2, 22.0], [41.3, 22.0], [41.4, 22.0], [41.5, 22.0], [41.6, 23.0], [41.7, 23.0], [41.8, 23.0], [41.9, 23.0], [42.0, 23.0], [42.1, 23.0], [42.2, 23.0], [42.3, 23.0], [42.4, 23.0], [42.5, 23.0], [42.6, 23.0], [42.7, 23.0], [42.8, 23.0], [42.9, 23.0], [43.0, 23.0], [43.1, 23.0], [43.2, 23.0], [43.3, 23.0], [43.4, 23.0], [43.5, 23.0], [43.6, 23.0], [43.7, 23.0], [43.8, 23.0], [43.9, 23.0], [44.0, 23.0], [44.1, 23.0], [44.2, 23.0], [44.3, 24.0], [44.4, 24.0], [44.5, 24.0], [44.6, 24.0], [44.7, 24.0], [44.8, 24.0], [44.9, 24.0], [45.0, 24.0], [45.1, 24.0], [45.2, 24.0], [45.3, 24.0], [45.4, 24.0], [45.5, 24.0], [45.6, 24.0], [45.7, 24.0], [45.8, 24.0], [45.9, 24.0], [46.0, 24.0], [46.1, 24.0], [46.2, 24.0], [46.3, 24.0], [46.4, 24.0], [46.5, 24.0], [46.6, 24.0], [46.7, 24.0], [46.8, 24.0], [46.9, 24.0], [47.0, 24.0], [47.1, 25.0], [47.2, 25.0], [47.3, 25.0], [47.4, 25.0], [47.5, 25.0], [47.6, 25.0], [47.7, 25.0], [47.8, 25.0], [47.9, 25.0], [48.0, 25.0], [48.1, 25.0], [48.2, 25.0], [48.3, 25.0], [48.4, 25.0], [48.5, 25.0], [48.6, 25.0], [48.7, 25.0], [48.8, 25.0], [48.9, 25.0], [49.0, 25.0], [49.1, 25.0], [49.2, 25.0], [49.3, 25.0], [49.4, 25.0], [49.5, 26.0], [49.6, 26.0], [49.7, 26.0], [49.8, 26.0], [49.9, 26.0], [50.0, 26.0], [50.1, 26.0], [50.2, 26.0], [50.3, 26.0], [50.4, 26.0], [50.5, 26.0], [50.6, 26.0], [50.7, 26.0], [50.8, 26.0], [50.9, 26.0], [51.0, 26.0], [51.1, 26.0], [51.2, 26.0], [51.3, 26.0], [51.4, 26.0], [51.5, 26.0], [51.6, 26.0], [51.7, 26.0], [51.8, 26.0], [51.9, 27.0], [52.0, 27.0], [52.1, 27.0], [52.2, 27.0], [52.3, 27.0], [52.4, 27.0], [52.5, 27.0], [52.6, 27.0], [52.7, 27.0], [52.8, 27.0], [52.9, 27.0], [53.0, 27.0], [53.1, 27.0], [53.2, 27.0], [53.3, 27.0], [53.4, 27.0], [53.5, 27.0], [53.6, 27.0], [53.7, 27.0], [53.8, 27.0], [53.9, 27.0], [54.0, 27.0], [54.1, 27.0], [54.2, 27.0], [54.3, 28.0], [54.4, 28.0], [54.5, 28.0], [54.6, 28.0], [54.7, 28.0], [54.8, 28.0], [54.9, 28.0], [55.0, 28.0], [55.1, 28.0], [55.2, 28.0], [55.3, 28.0], [55.4, 28.0], [55.5, 28.0], [55.6, 28.0], [55.7, 28.0], [55.8, 28.0], [55.9, 28.0], [56.0, 28.0], [56.1, 28.0], [56.2, 28.0], [56.3, 28.0], [56.4, 28.0], [56.5, 28.0], [56.6, 28.0], [56.7, 28.0], [56.8, 29.0], [56.9, 29.0], [57.0, 29.0], [57.1, 29.0], [57.2, 29.0], [57.3, 29.0], [57.4, 29.0], [57.5, 29.0], [57.6, 29.0], [57.7, 29.0], [57.8, 29.0], [57.9, 29.0], [58.0, 29.0], [58.1, 29.0], [58.2, 29.0], [58.3, 29.0], [58.4, 29.0], [58.5, 29.0], [58.6, 29.0], [58.7, 29.0], [58.8, 29.0], [58.9, 29.0], [59.0, 29.0], [59.1, 30.0], [59.2, 30.0], [59.3, 30.0], [59.4, 30.0], [59.5, 30.0], [59.6, 30.0], [59.7, 30.0], [59.8, 30.0], [59.9, 30.0], [60.0, 30.0], [60.1, 30.0], [60.2, 30.0], [60.3, 30.0], [60.4, 30.0], [60.5, 30.0], [60.6, 30.0], [60.7, 30.0], [60.8, 30.0], [60.9, 30.0], [61.0, 30.0], [61.1, 30.0], [61.2, 30.0], [61.3, 30.0], [61.4, 30.0], [61.5, 31.0], [61.6, 31.0], [61.7, 31.0], [61.8, 31.0], [61.9, 31.0], [62.0, 31.0], [62.1, 31.0], [62.2, 31.0], [62.3, 31.0], [62.4, 31.0], [62.5, 31.0], [62.6, 31.0], [62.7, 31.0], [62.8, 31.0], [62.9, 31.0], [63.0, 31.0], [63.1, 31.0], [63.2, 31.0], [63.3, 31.0], [63.4, 31.0], [63.5, 31.0], [63.6, 31.0], [63.7, 31.0], [63.8, 32.0], [63.9, 32.0], [64.0, 32.0], [64.1, 32.0], [64.2, 32.0], [64.3, 32.0], [64.4, 32.0], [64.5, 32.0], [64.6, 32.0], [64.7, 32.0], [64.8, 32.0], [64.9, 32.0], [65.0, 32.0], [65.1, 32.0], [65.2, 32.0], [65.3, 32.0], [65.4, 32.0], [65.5, 32.0], [65.6, 32.0], [65.7, 32.0], [65.8, 32.0], [65.9, 33.0], [66.0, 33.0], [66.1, 33.0], [66.2, 33.0], [66.3, 33.0], [66.4, 33.0], [66.5, 33.0], [66.6, 33.0], [66.7, 33.0], [66.8, 33.0], [66.9, 33.0], [67.0, 33.0], [67.1, 33.0], [67.2, 33.0], [67.3, 33.0], [67.4, 33.0], [67.5, 33.0], [67.6, 33.0], [67.7, 33.0], [67.8, 33.0], [67.9, 33.0], [68.0, 34.0], [68.1, 34.0], [68.2, 34.0], [68.3, 34.0], [68.4, 34.0], [68.5, 34.0], [68.6, 34.0], [68.7, 34.0], [68.8, 34.0], [68.9, 34.0], [69.0, 34.0], [69.1, 34.0], [69.2, 34.0], [69.3, 34.0], [69.4, 34.0], [69.5, 34.0], [69.6, 34.0], [69.7, 34.0], [69.8, 34.0], [69.9, 34.0], [70.0, 35.0], [70.1, 35.0], [70.2, 35.0], [70.3, 35.0], [70.4, 35.0], [70.5, 35.0], [70.6, 35.0], [70.7, 35.0], [70.8, 35.0], [70.9, 35.0], [71.0, 35.0], [71.1, 35.0], [71.2, 35.0], [71.3, 35.0], [71.4, 35.0], [71.5, 35.0], [71.6, 35.0], [71.7, 35.0], [71.8, 36.0], [71.9, 36.0], [72.0, 36.0], [72.1, 36.0], [72.2, 36.0], [72.3, 36.0], [72.4, 36.0], [72.5, 36.0], [72.6, 36.0], [72.7, 36.0], [72.8, 36.0], [72.9, 36.0], [73.0, 36.0], [73.1, 36.0], [73.2, 36.0], [73.3, 36.0], [73.4, 36.0], [73.5, 37.0], [73.6, 37.0], [73.7, 37.0], [73.8, 37.0], [73.9, 37.0], [74.0, 37.0], [74.1, 37.0], [74.2, 37.0], [74.3, 37.0], [74.4, 37.0], [74.5, 37.0], [74.6, 37.0], [74.7, 37.0], [74.8, 37.0], [74.9, 37.0], [75.0, 37.0], [75.1, 37.0], [75.2, 37.0], [75.3, 37.0], [75.4, 37.0], [75.5, 38.0], [75.6, 38.0], [75.7, 38.0], [75.8, 38.0], [75.9, 38.0], [76.0, 38.0], [76.1, 38.0], [76.2, 38.0], [76.3, 38.0], [76.4, 38.0], [76.5, 38.0], [76.6, 38.0], [76.7, 38.0], [76.8, 38.0], [76.9, 39.0], [77.0, 39.0], [77.1, 39.0], [77.2, 39.0], [77.3, 39.0], [77.4, 39.0], [77.5, 39.0], [77.6, 39.0], [77.7, 39.0], [77.8, 39.0], [77.9, 39.0], [78.0, 39.0], [78.1, 39.0], [78.2, 39.0], [78.3, 39.0], [78.4, 39.0], [78.5, 40.0], [78.6, 40.0], [78.7, 40.0], [78.8, 40.0], [78.9, 40.0], [79.0, 40.0], [79.1, 40.0], [79.2, 40.0], [79.3, 40.0], [79.4, 40.0], [79.5, 40.0], [79.6, 40.0], [79.7, 40.0], [79.8, 40.0], [79.9, 41.0], [80.0, 41.0], [80.1, 41.0], [80.2, 41.0], [80.3, 41.0], [80.4, 41.0], [80.5, 41.0], [80.6, 41.0], [80.7, 41.0], [80.8, 41.0], [80.9, 41.0], [81.0, 41.0], [81.1, 41.0], [81.2, 42.0], [81.3, 42.0], [81.4, 42.0], [81.5, 42.0], [81.6, 42.0], [81.7, 42.0], [81.8, 42.0], [81.9, 42.0], [82.0, 42.0], [82.1, 42.0], [82.2, 42.0], [82.3, 43.0], [82.4, 43.0], [82.5, 43.0], [82.6, 43.0], [82.7, 43.0], [82.8, 43.0], [82.9, 43.0], [83.0, 43.0], [83.1, 43.0], [83.2, 43.0], [83.3, 43.0], [83.4, 43.0], [83.5, 44.0], [83.6, 44.0], [83.7, 44.0], [83.8, 44.0], [83.9, 44.0], [84.0, 44.0], [84.1, 44.0], [84.2, 44.0], [84.3, 44.0], [84.4, 44.0], [84.5, 44.0], [84.6, 44.0], [84.7, 44.0], [84.8, 44.0], [84.9, 45.0], [85.0, 45.0], [85.1, 45.0], [85.2, 45.0], [85.3, 45.0], [85.4, 45.0], [85.5, 45.0], [85.6, 45.0], [85.7, 45.0], [85.8, 45.0], [85.9, 45.0], [86.0, 46.0], [86.1, 46.0], [86.2, 46.0], [86.3, 46.0], [86.4, 46.0], [86.5, 46.0], [86.6, 46.0], [86.7, 46.0], [86.8, 46.0], [86.9, 46.0], [87.0, 46.0], [87.1, 46.0], [87.2, 47.0], [87.3, 47.0], [87.4, 47.0], [87.5, 47.0], [87.6, 47.0], [87.7, 47.0], [87.8, 47.0], [87.9, 47.0], [88.0, 47.0], [88.1, 47.0], [88.2, 48.0], [88.3, 48.0], [88.4, 48.0], [88.5, 48.0], [88.6, 48.0], [88.7, 48.0], [88.8, 48.0], [88.9, 48.0], [89.0, 48.0], [89.1, 48.0], [89.2, 49.0], [89.3, 49.0], [89.4, 49.0], [89.5, 49.0], [89.6, 49.0], [89.7, 49.0], [89.8, 49.0], [89.9, 49.0], [90.0, 49.0], [90.1, 49.0], [90.2, 50.0], [90.3, 50.0], [90.4, 50.0], [90.5, 50.0], [90.6, 50.0], [90.7, 50.0], [90.8, 50.0], [90.9, 50.0], [91.0, 51.0], [91.1, 51.0], [91.2, 51.0], [91.3, 51.0], [91.4, 51.0], [91.5, 51.0], [91.6, 52.0], [91.7, 52.0], [91.8, 52.0], [91.9, 52.0], [92.0, 52.0], [92.1, 52.0], [92.2, 52.0], [92.3, 52.0], [92.4, 53.0], [92.5, 53.0], [92.6, 53.0], [92.7, 53.0], [92.8, 53.0], [92.9, 53.0], [93.0, 54.0], [93.1, 54.0], [93.2, 54.0], [93.3, 54.0], [93.4, 54.0], [93.5, 54.0], [93.6, 55.0], [93.7, 55.0], [93.8, 55.0], [93.9, 55.0], [94.0, 56.0], [94.1, 56.0], [94.2, 56.0], [94.3, 56.0], [94.4, 56.0], [94.5, 57.0], [94.6, 57.0], [94.7, 57.0], [94.8, 57.0], [94.9, 57.0], [95.0, 58.0], [95.1, 58.0], [95.2, 58.0], [95.3, 58.0], [95.4, 59.0], [95.5, 59.0], [95.6, 59.0], [95.7, 59.0], [95.8, 60.0], [95.9, 60.0], [96.0, 61.0], [96.1, 62.0], [96.2, 63.0], [96.3, 63.0], [96.4, 63.0], [96.5, 64.0], [96.6, 65.0], [96.7, 65.0], [96.8, 66.0], [96.9, 67.0], [97.0, 67.0], [97.1, 68.0], [97.2, 69.0], [97.3, 70.0], [97.4, 71.0], [97.5, 73.0], [97.6, 75.0], [97.7, 78.0], [97.8, 81.0], [97.9, 84.0], [98.0, 87.0], [98.1, 95.0], [98.2, 106.0], [98.3, 223.0], [98.4, 67754.0], [98.5, 67826.0], [98.6, 67897.0], [98.7, 67920.0], [98.8, 68147.0], [98.9, 68638.0], [99.0, 69107.0], [99.1, 69432.0], [99.2, 69567.0], [99.3, 69604.0], [99.4, 69620.0], [99.5, 69635.0], [99.6, 69652.0], [99.7, 69676.0], [99.8, 69689.0], [99.9, 69725.0], [100.0, 69770.0]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 9814.0, "series": [{"data": [[0.0, 9814.0], [1000.0, 3.0], [100.0, 15.0], [200.0, 5.0], [69600.0, 60.0], [68100.0, 2.0], [67800.0, 15.0], [67700.0, 9.0], [68200.0, 3.0], [68400.0, 2.0], [68300.0, 1.0], [69400.0, 4.0], [68000.0, 1.0], [68600.0, 3.0], [68500.0, 2.0], [67900.0, 16.0], [69500.0, 13.0], [69100.0, 6.0], [69000.0, 2.0], [69200.0, 2.0], [69300.0, 2.0], [68900.0, 2.0], [68800.0, 3.0], [68700.0, 1.0], [69700.0, 14.0]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 69700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9834.0, "series": [{"data": [[0.0, 9834.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 163.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.75757478E12, "maxY": 81.11317152986076, "series": [{"data": [[1.7575749E12, 45.06094890510954], [1.75757478E12, 40.54963338973487], [1.75757496E12, 1.0], [1.75757484E12, 81.11317152986076]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75757496E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 3.0, "minX": 1.0, "maxY": 27977.802752293595, "series": [{"data": [[2.0, 3.0], [3.0, 3.4166666666666674], [4.0, 3.5263157894736836], [5.0, 4.250000000000001], [8.0, 6.333333333333335], [9.0, 66.41379310344828], [10.0, 13.441176470588237], [11.0, 11.530612244897958], [12.0, 11.49090909090909], [13.0, 14.163636363636364], [14.0, 13.44615384615385], [15.0, 26.26086956521739], [16.0, 18.239130434782616], [17.0, 18.26153846153846], [18.0, 13.852459016393444], [19.0, 16.59374999999999], [20.0, 16.492537313432834], [21.0, 16.66233766233766], [22.0, 15.198019801980198], [23.0, 16.25000000000001], [24.0, 21.48275862068965], [25.0, 24.590361445783138], [26.0, 21.000000000000004], [27.0, 18.942857142857143], [28.0, 16.60897435897435], [29.0, 18.81632653061225], [30.0, 19.263513513513523], [31.0, 20.694352159468433], [32.0, 24.30625], [33.0, 7522.4], [34.0, 20604.488636363632], [35.0, 27.047619047619044], [36.0, 27.71604938271604], [37.0, 15.561797752808996], [38.0, 27.283783783783782], [39.0, 31.614035087719312], [40.0, 31.090909090909093], [41.0, 26.823529411764703], [42.0, 27.103896103896105], [43.0, 22.880000000000006], [44.0, 24.83783783783785], [45.0, 28.06756756756756], [46.0, 32.13157894736843], [47.0, 24.107438016528913], [48.0, 30.19277108433735], [49.0, 22.438461538461546], [50.0, 34.93877551020409], [51.0, 38.14814814814816], [52.0, 25.97196261682243], [53.0, 24.375968992248062], [54.0, 24.593220338983045], [55.0, 30.522222222222222], [56.0, 29.00000000000001], [57.0, 4.0], [58.0, 5.222222222222222], [59.0, 12.463414634146343], [60.0, 14.000000000000005], [61.0, 13.829787234042554], [62.0, 18.11702127659574], [63.0, 22.360465116279066], [64.0, 23.12977099236642], [65.0, 24.94623655913978], [66.0, 25.407725321888414], [67.0, 22.30769230769231], [68.0, 20.647727272727273], [69.0, 12.458333333333332], [70.0, 15.779661016949152], [71.0, 21.116071428571423], [72.0, 23078.69421487603], [73.0, 32.028571428571446], [74.0, 39.29411764705882], [75.0, 34.183333333333344], [77.0, 35.0566037735849], [78.0, 37.53213367609254], [79.0, 40.329931972789105], [76.0, 39.15723270440252], [81.0, 41.266106442577026], [83.0, 30.431034482758616], [82.0, 35.3010752688172], [80.0, 43.31578947368421], [84.0, 35.59310344827583], [85.0, 40.227106227106184], [86.0, 39.56140350877192], [87.0, 35.88235294117648], [89.0, 43.126582278481024], [90.0, 27977.802752293595], [88.0, 41.59537572254335], [1.0, 1481.1489361702131]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks", "isController": false}, {"data": [[56.47429999999981, 1152.7939999999967]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 90.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 110.45, "minX": 1.75757478E12, "maxY": 16257.033333333333, "series": [{"data": [[1.7575749E12, 12147.333333333334], [1.75757478E12, 15720.6], [1.75757496E12, 208.36666666666667], [1.75757484E12, 16257.033333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7575749E12, 6439.0], [1.75757478E12, 8333.1], [1.75757496E12, 110.45], [1.75757484E12, 8617.45]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75757496E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 25.496333897349132, "minX": 1.75757478E12, "maxY": 1823.9799270073022, "series": [{"data": [[1.7575749E12, 1823.9799270073022], [1.75757478E12, 25.496333897349132], [1.75757496E12, 1481.1489361702131], [1.75757484E12, 1737.172347968364]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75757496E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 25.26170332769321, "minX": 1.75757478E12, "maxY": 1823.8656934306557, "series": [{"data": [[1.7575749E12, 1823.8656934306557], [1.75757478E12, 25.26170332769321], [1.75757496E12, 1481.063829787234], [1.75757484E12, 1737.0201799836284]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75757496E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 7.967851099830793, "minX": 1.75757478E12, "maxY": 1813.2361313868505, "series": [{"data": [[1.7575749E12, 1813.2361313868505], [1.75757478E12, 7.967851099830793], [1.75757496E12, 1479.6170212765958], [1.75757484E12, 1712.606763021547]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75757496E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.75757478E12, "maxY": 69770.0, "series": [{"data": [[1.7575749E12, 69770.0], [1.75757478E12, 286.0], [1.75757496E12, 69472.0], [1.75757484E12, 69770.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7575749E12, 32.0], [1.75757478E12, 42.0], [1.75757496E12, 3.0], [1.75757484E12, 56.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7575749E12, 69614.36], [1.75757478E12, 85.0], [1.75757496E12, 69472.0], [1.75757484E12, 69610.32]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7575749E12, 38.0], [1.75757478E12, 51.0], [1.75757496E12, 13.199999999999903], [1.75757484E12, 65.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7575749E12, 2.0], [1.75757478E12, 2.0], [1.75757496E12, 2.0], [1.75757484E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7575749E12, 16.0], [1.75757478E12, 23.0], [1.75757496E12, 3.0], [1.75757484E12, 37.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75757496E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 3.0, "minX": 18.0, "maxY": 44.0, "series": [{"data": [[569.0, 13.0], [140.0, 4.0], [674.0, 44.0], [952.0, 23.0], [1079.0, 15.0], [1131.0, 23.0], [1158.0, 31.0], [18.0, 3.0], [349.0, 8.0], [1505.0, 28.0], [101.0, 3.0], [460.0, 15.0], [1835.0, 38.0], [29.0, 3.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1835.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 3.0, "minX": 18.0, "maxY": 44.0, "series": [{"data": [[569.0, 13.0], [140.0, 4.0], [674.0, 44.0], [952.0, 22.0], [1079.0, 15.0], [1131.0, 23.0], [1158.0, 31.0], [18.0, 3.0], [349.0, 8.0], [1505.0, 28.0], [101.0, 3.0], [460.0, 15.0], [1835.0, 38.0], [29.0, 3.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1835.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.75757478E12, "maxY": 60.81666666666667, "series": [{"data": [[1.7575749E12, 44.483333333333334], [1.75757478E12, 60.6], [1.75757496E12, 0.7666666666666667], [1.75757484E12, 60.81666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75757496E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.75757478E12, "maxY": 61.11666666666667, "series": [{"data": [[1.7575749E12, 45.666666666666664], [1.75757478E12, 59.1], [1.75757496E12, 0.7833333333333333], [1.75757484E12, 61.11666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75757496E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.75757478E12, "maxY": 61.11666666666667, "series": [{"data": [[1.7575749E12, 45.666666666666664], [1.75757478E12, 59.1], [1.75757496E12, 0.7833333333333333], [1.75757484E12, 61.11666666666667]], "isOverall": false, "label": "Load test 100 users 100 requests each - getAllTasks-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75757496E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.75757478E12, "maxY": 61.11666666666667, "series": [{"data": [[1.7575749E12, 45.666666666666664], [1.75757478E12, 59.1], [1.75757496E12, 0.7833333333333333], [1.75757484E12, 61.11666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75757496E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

