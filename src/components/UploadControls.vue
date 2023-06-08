<template>
    <div class="controls-container">
        <form @submit.prevent="">
            <div>

                <button 
                class="control-btn enable" 
                @click="uploadHomeOwnerData">Select Homeowner Data</button>

                <input 
                ref="uploadFileButton" 
                type="file" 
                accept=".csv" 
                @change="validateFile"> 

            </div>
            <div>
                <input 
                type="submit" 
                class="control-btn" 
                :class="{disable: !enabledSubmit, enable: enabledSubmit}" 
                :disabled="enabledSubmit" value="Submit">
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { WritableComputedRef, computed, ref } from 'vue';
import UploadControlsConstants from '@/constants/UploadControlsConstants'
import UploadError from "@/interfaces/UploadControlsInterfaces/UploadError";
import { useStore } from 'vuex';

const store = useStore();

const uploadFileButton = ref<HTMLButtonElement | null>()
let enabledSubmit = ref<boolean>(false);

const uploadHomeOwnerData = () => {
    uploadFileButton.value?.click()
}

let uploadErrors: WritableComputedRef<UploadError[]> = computed({
    get(): UploadError[] { return store.getters.getUploadErrors },
    set(uploadErrors: UploadError[]): void { store.commit("setUploadErrors", uploadErrors)}
})

const validateFile = (e: Event): void => {

    const { undefinedValue, invalidFileType } = UploadControlsConstants.uploadErrorMesssages

    const el = e.target as HTMLInputElement;
    const file: File | undefined = el.files?.[0];
    let errors: UploadError[] = [];

    if(typeof(file) == undefined){
        let uploadError: UploadError = {
            msg: undefinedValue
        };
        errors.push(uploadError)
    }

    if(file?.type !== UploadControlsConstants.desiredFileType){
        let uploadError: UploadError = {
            msg: invalidFileType
        };
        errors.push(uploadError)
    }

    console.log(errors);

    if(!errors.length){
        enabledSubmit.value = true;
    } else {
        uploadErrors.value = errors;
    }
}


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