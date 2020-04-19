<template>
  <section class="section about">
    <div class="container">
      <h2 class="title is-uppercase">Skills</h2>
      <div class="columns is-multiline">
        <div
          id="_mychart"
          class="column is-half"
          v-for="skillSet in skillSets"
          :key="skillSet.id"
        >
          <p class="is-size-5">{{ skillSet.category }}</p>
          <div>
            <div class="tags are-medium">
              <span
                class="tag is-dark"
                v-for="skill in skillSet.skills"
                :key="skill.title"
                >{{ skill.title }}</span
              >
            </div>
          </div>
          <Chart
            :chart_id="chart_id + '-' + skillSet.category"
            :chart_data="chart_data[skillSet.id]"
          ></Chart>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Chart from "@/components/Chart";
import { skillSets } from "@/assets/js/database";
export default {
  name: "Skills",
  components: { Chart },
  data() {
    return {
      skillSets: skillSets,
      chart_id: "chart",
      chart_data: [],
    };
  },
  methods: {
    getChartData: (chart_type = "bar", skillSet_id = 1, skillSets) => {
      // default structure of a chart data
      var _chart_data = {
        type: "bar",
        data: {
          labels: [],
          datasets: [
            {
              // one line graph
              label: "Expertise in Percentage",
              data: [],
              backgroundColor: [],
              borderColor: [],
              borderWidth: 3,
            },
          ],
        },
        options: {},
      };

      // modify the chart data
      _chart_data.type = chart_type;

      // begin ticks from 0 in bar or horizontalBar
      if (_chart_data.type === "bar" || _chart_data.type === "horizontalBar") {
        _chart_data.options.scales = {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        };
      }

      _chart_data.data.labels = skillSets
        .filter((cat) => cat.id === skillSet_id)[0]
        .skills.map((skill) => skill.title);

      _chart_data.data.datasets[0].data = skillSets
        .filter((cat) => cat.id === skillSet_id)[0]
        .skills.map((skill) => skill.percentage);

      // random color for each data
      for (var index = 0; index < _chart_data.data.labels.length; index++) {
        _chart_data.data.datasets[0].backgroundColor.push(
          "#" + Math.floor(Math.random() * 16777215).toString(16)
        );
      }

      // set also the border color equal to the backgroud color
      _chart_data.data.datasets[0].borderColor =
        _chart_data.data.datasets[0].backgroundColor;

      return _chart_data;
    },
  },
  created() {
    // isolate the chart data for each category
    let chartType = ["bar", "doughnut", "pie", "horizontalBar"];
    this.skillSets.forEach((skillSet) => {
      this.chart_data[skillSet.id] = this.getChartData(
        chartType[Math.floor(Math.random() * chartType.length)],
        skillSet.id,
        this.skillSets
      );
    });
  },
};
</script>

<style scoped>
.tags {
  justify-content: center;
}

#_mychart {
  margin: 20px auto;
}

#_mychart p:first-of-type {
  margin-bottom: 10px;
}

#_mychart > canvas {
  background-color: #f00;
}
</style>
