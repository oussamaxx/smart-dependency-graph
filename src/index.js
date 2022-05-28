import * as echarts from "echarts";
import paths from "./pathes";
import $ from "jquery";

require("../simple-grid.css");
let shimming = paths.default;
var chartDom = document.getElementById("app");
var myChart = echarts.init(chartDom);
var option;
let opened_nodes = {};

var $dropdown = $("#dropdown");
for (let dep in shimming) {
  $dropdown.append($("<option />").val(dep).text(dep));
}

$("#getButton").on("click", function () {
  myChart.showLoading();
  renderGraph(getGraph($("#depsinput").val()));
  myChart.hideLoading();
});
// init graph with somthing
$("#getButton").trigger("click");

myChart.on("click", "series.tree", (e) => {
  $("#code").val(getRequiresCode(e.name));
});

function getRequiresCode(dep) {
  let result = "";
  let deps = shimming[dep] && shimming[dep].deps ? shimming[dep].deps : [];
  deps.forEach((nestedDep) => {
    result += `require("${nestedDep}")\n`;
  });
  return result;
}

function createBranch(root, deps = []) {
  let result = { name: root };
  let children = [];
  // if its not an already opened node then get children
  if (!opened_nodes.hasOwnProperty(root)) {
    opened_nodes[root] = true;
    deps.forEach((dep) => {
      children.push(
        createBranch(
          dep,
          shimming[dep] && shimming[dep].deps ? shimming[dep].deps : undefined
        )
      );
    });
  }
  result.children = children;
  return result;
}
function getGraph(root) {
  opened_nodes = {};
  return createBranch(
    root,
    shimming[root] && shimming[root].deps ? shimming[root].deps : undefined
  );
}

function renderGraph(data) {
  myChart.setOption(
    (option = {
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove"
      },
      series: [
        {
          type: "tree",
          data: [data],
          top: "1%",
          left: "7%",
          bottom: "1%",
          right: "20%",
          symbolSize: 7,
          label: {
            position: "left",
            verticalAlign: "middle",
            align: "right",
            fontSize: 9
          },
          leaves: {
            label: {
              position: "right",
              verticalAlign: "middle",
              align: "left"
            }
          },
          emphasis: {
            focus: "descendant"
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
        }
      ]
    })
  );
}

option && myChart.setOption(option);
