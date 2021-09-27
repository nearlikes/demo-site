<template>
  <div class="container">
    <Sidebar />
    <main>
      <header>
        <h1 class="title">Welcome User,</h1>
        <router-link to="/campaign/add">New Campaign</router-link>
      </header>
      <div class="grid">
        <Card class="box" title="Customers" :data="customer" icon="people" colors="color: #62DB93" />
        <Card class="box" title="Reach" :data="reach" icon="flash" colors="color: #FFDB5A" />
        <Card
          class="box"
          title="Taps"
          :data="likes"
          icon="heart-circle-sharp"
          colors="color: #3479FF"
        />
        <Card
          class="box"
          title="Shares"
          :data="shares"
          icon="share-social-outline"
          colors="color: #FF7F57"
        />
        <Card
          class="box"
          title="Clicks"
          :data="clicks"
          icon="finger-print-sharp"
          colors="color: #FF7F57"
        />
        <div class="box graph">
          <div class="imp" v-if="!graph">
            <h4>Impressions</h4>
            <h1>{{ impressions }}</h1>
            <button @click="graph = true">show graph</button>
          </div>
          <apexchart
            v-if="graph"
            width="95%"
            height="100%"
            type="line"
            :options="line.options"
            :series="lineStats"
          ></apexchart>
        </div>
        <div class="box pie">
          <h5>Gender</h5>
          <apexchart
            type="donut"
            width="90%"
            height="90%"
            :options="pie.options"
            :series="pieStats"
          ></apexchart>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Card from "@/components/card.vue";
export default {
  name: "Dashboard",
  components: {
    Sidebar,
    Card,
  },
  data() {
    return {
      line: {
        options: {
          chart: {
            type: "line",
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          title: {
            text: "Impressions",
            align: "center",
          },
        },
      },
      pie: {
        options: {
          plotOptions: {
            pie: {
              expandOnClick: false,
            },
          },
          colors: ["#3479FF", "#24ce73"],
          labels: ["Male", "Female"],
          legend: {
            show: false,
          },
        },
      },
      graph: false,
    };
  },
  computed: {
    stats() {
      return this.$store.getters.stats;
    },
    name() {
      return this.$store.getters.name;
    },
    impressions() {
      return this.stats.impressions;
    },
    likes() {
      return this.stats.likes;
    },
    reach() {
      return this.stats.reach;
    },
    clicks() {
      return this.stats.clicks;
    },
    shares() {
      return this.stats.shares;
    },
    customer() {
      return this.$store.getters.customers.length;
    },
    lineStats() {
      return [
        {
          name: "impressions",
          data: this.lineGraph(this.impressions, 8),
        },
      ];
    },
    pieStats() {
      return [50, 50];
    },
  },
  methods: {
    logout() {
      this.$router.replace({
        name: "Login",
        query: { error: "⏰ Session timed out" },
      });
    },
    lineGraph(num, nos) {
      const arr = [num];
      function random(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      for (let i = 0; i < nos - 1; i++) {
        let upperLim = arr[0];
        let lowerLim = Math.floor(upperLim / 2);
        const element = random(arr[0], random(upperLim, lowerLim));
        arr.unshift(element);
      }
      console.log(arr);
      return arr;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  font-size: 2rem;
}
main {
  height: 100vh;
  width: calc(100vw - 200px);
  padding: 30px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      background: #3479ff;
      border-radius: 10px;
      font-size: 1;
      padding: 1rem 2.5rem;
      text-decoration: none;
      color: #fff;
    }
    h1.title {
      padding: 0 10px;
      text-align: left;
      font-size: 2.8rem;
    }
  }
  .grid {
    height: 90%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    padding: 20px;
  }
  .box {
    background: white;
    border: 1px solid #c8c8c8;
    box-shadow: 4px 6px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
  .graph {
    grid-column: 1 / 4;
    width: 95%;
  }
  .pie {
    grid-column: 4 / 6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .imp {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    button {
      background: #3479ff;
      border-radius: 10px;
      font-size: 1;
      padding: 1rem 2.5rem;
      text-decoration: none;
      color: #fff;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
}
</style>