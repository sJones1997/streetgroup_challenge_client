<template>
    <div class="homeowners-container">

        <!-- Main View -->
        <div class="homeowners-main">

            <div class="homeowners-title">
                <h1>Homeowners Data Validation Tool</h1>
                <p>The purpose of this tool is to validate that a given set of homeownership data is in a desired format.</p>
            </div>

            <div>
                <UploadControls/>
            </div>
            
            <div>
                <HomeownersData/>
            </div>
        

        </div>

    </div>
</template>

<script setup lang="ts">
import UploadControls from '@/components/UploadControls.vue';
import HomeownersData from '@/components/HomeownersData.vue'

</script>

<style scoped>

.homeowners-container{
    padding: 3em;
}

.homeowners-title > * {
    margin: 0.5em 0;
}

</style>