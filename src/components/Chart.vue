<template>
  <section>
    <canvas :id="chart_id"></canvas>
  </section>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "Chart",
  props: {
    chart_id: {
      type: String,
      default: "chart",
    },
    chart_data: {
      type: Object,
      default: () => {
        return {
          type: "line",
          data: {
            labels: [
              "Mercury",
              "Venus",
              "Earth",
              "Mars",
              "Jupiter",
              "Saturn",
              "Uranus",
              "Neptune",
            ],
            datasets: [
              {
                // one line graph
                label: "Number of Moons",
                data: [0, 0, 1, 2, 67, 62, 27, 14],
                backgroundColor: "rgba(54,73,93,.5)",
                borderColor: "#36495d",
                borderWidth: 3,
              },
            ],
          },
          options: {
            responsive: true,
            lineTension: 1,
          },
        };
      },
    },
  },
  methods: {
    createChart(chart_id, chart_data) {
      const ctx = document.getElementById(chart_id);
      // eslint-disable-next-line no-unused-vars
      const myChart = new Chart(ctx, {
        type: chart_data.type,
        data: chart_data.data,
        options: chart_data.options,
      });
    },
  },
  mounted() {
    this.createChart(this.chart_id, this.chart_data);
  },
};
</script>

<style scoped>
canvas {
  margin-top: 20px;

  background-color: white;
}
</style>
