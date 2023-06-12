<template>
    <div>
        <table class="homeowner-table"> 
            <tr>
                <th>
                    <p>Title</p>
                </th>
                <th>
                    <p>First name</p>
                </th>
                <th>
                    <p>Initial</p>
                </th>
                <th>
                    <p>Last name</p>
                </th>
            </tr>
            <tr v-for="(homeowner, index) in homeownerData" :key="index" class="row">
                <td>
                    <p>{{ homeowner.title }}</p>
                </td>
                <td>
                    <p>{{ homeowner.firstName }}</p>
                </td>
                <td>
                    <p>{{ homeowner.initial }}</p>
                </td>
                <td>
                    <p>{{ homeowner.lastName }}</p>
                </td>  
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import Homeowner from '@/interfaces/HomeownerDataInterfaces/Homeowner';
import store from '@/store';
import { ComputedRef, computed } from 'vue';

const homeownerData: ComputedRef<Homeowner[]> = computed(() => {
    console.log(store.getters.getHomeowners)
    return store.getters.getHomeowners
})

</script>

<style scoped>

.row td {
    padding: 0.5em;
}

.homeowner-table th {
    background-color: #002147;
}
.homeowner-table th > * {
    color: #fff;
    padding: 0.5em;
}
.homeowner-table tr {
    background: #003065;
}

.homeowner-table tr td p {
    color: #fff;
}

.homeowner-table tr:nth-child(even){
    background: #003D81;
}


.homeowner-table {
    width: 50%;
    text-align: left;
    border: none;
    outline: none;
    margin-top: 2em;
}

</style>