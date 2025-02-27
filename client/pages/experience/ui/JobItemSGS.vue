<script setup lang="ts">
import JobItemPeriod from "./JobItemPeriod.vue";
</script>

<template>
  <section
    class="w-[100%] py-10 px-5 lg:px-20 flex flex-wrap flex-row border-b-1 border-gray-700"
  >
    <job-item-period
      from="Dec 2015"
      to="May 2022"
      img="assets/images/SGS_Logo.svg.png"
    />
    <div class="w-[100%]">
      <h2 class="text-2xl py-2">
        Experience in a Coal Test Lab as a Full Stack Developer
      </h2>
      <p class="text-justify">
        As a Full Stack Developer in a coal testing lab, I developed and
        maintained web applications to optimize data processing and improve
        workflow efficiency. Using <strong>Vue.js</strong> and
        <strong>Vuex</strong>, I built intuitive dashboards for tracking test
        results and sample data. On the backend, I leveraged
        <strong>T-SQL</strong> to design databases and optimize queries for
        fast, reliable data retrieval.
      </p>

      <h2 class="text-2xl py-2">Key Achievements:</h2>
      <ul class="list-disc px-4 text-justify">
        <li>
          Automated reporting with an Excel system. Just one excel report is
          <strong>saving around 3 hours per senior shift</strong> and
          <strong>$10,000 per year</strong>. There are so many reports
        </li>
        <li>
          Enhanced real-time data exchange between departments, improving
          communication.
        </li>
        <li>
          Optimized database performance, accelerating coal test result
          processing.
        </li>
      </ul>

      <p class="text-1xl py-5 text-justify">
        These improvements streamlined lab operations, reduced manual work, and
        enhanced overall efficiency.
      </p>
    </div>
    <div class="w-[100%] lg:w-[35%] flex justify-center items-center"></div>
  </section>
</template>

<style scoped></style>
