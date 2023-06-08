<template>
    <div class="controls-container">
        <form @submit.prevent="">
            <div>
                <button class="control-btn enable" @click="uploadHomeOwnerData">Select Homeowner Data</button>
                <input ref="uploadFileButton" type="file" accept=".csv" @change="validateFile"> 
            </div>
            <div>
                <input type="submit" class="control-btn disable" :disabled="enabledSubmit" value="Submit">
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const uploadFileButton = ref<HTMLButtonElement | null>(null)

const uploadHomeOwnerData = () => {
    uploadFileButton.value?.click()
}

const validateFile = (e: Event) => {
    const el = e.target as HTMLInputElement;
    const file: File | undefined = el.files?.[0];
    console.log(file?.type)
}


let enabledSubmit = ref<boolean>(false);

</script>

<style scoped>

input[type=file] {
    display: none;
}


.control-btn {
    margin: 1em 0;
    background: none;
    outline: none;
    border: none;
    padding: 1em;
    font-family: 'Inter', sans-serif;
    color: #fff;
    font-size: 0.85em;
    cursor: pointer;
}

.disable {
    background:#5f5f5f;
    color: #e4e4e4;
    cursor: default;
}

.enable {
    background:#002147;
}

.controls-container form {
    display: flex;
}

.controls-container form > *{
    margin-right: 1em;
}

</style>