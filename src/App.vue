<template>
  <div>
    <h1>Test Data</h1>
    <ul>
      <li v-for="item in testData" :key="item.ID">{{ item.Name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { API } from 'aws-amplify';
import { getTest0830 } from '@/graphql/queries';


const testData = ref([]);

onMounted(async () => {
  try {
    const response = await API.graphql({
      query: getTest0830,
      variables: { ID: 'hHRIqXfZlM1zaeT6Hjrpjn236d9gkxJN' } // Replace with the actual ID you want to query
    });

    testData.value = [response.data.getTest0830];
  } catch (error) {
    console.error('GraphQL Query Error:', error);
  }
});
</script>
