import UploadControlsState from "@/interfaces/UploadControlsInterfaces/UploadControlsState";
import UploadError from "@/interfaces/UploadControlsInterfaces/UploadError";
import apiBase from "@/plugins/axios";
import { AxiosError, HttpStatusCode } from "axios";
import { ActionContext } from "vuex";


const UploadControlsModule = {
    state: (): UploadControlsState => ({
        formData: {
            file: undefined
        },
        uploadErrors: []
    }),
    mutations: {
        setUploadErrors: (state: UploadControlsState, uploadErrors: UploadError[]): void => {
            state.uploadErrors = uploadErrors;
        },
        setFile: (state: UploadControlsState, file: File): void => {
            state.formData.file = file;
        }
    },
    actions: {
        async validateHomeownerData({state, commit}: ActionContext<UploadControlsState, any>){

            const formData: any = new FormData();
            formData.append("csvData", state.formData.file)

            const config =  {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };

            await apiBase.post("/homeowners/validate", formData, config)
            .then(res => {
                if(res.status === HttpStatusCode.Ok){
                    commit("setHomeowners", res.data)
                } 
            })
            .catch((err: AxiosError | unknown) => {
                console.log(err);
            })
        }
    },
    getters: {
        getUploadErrors: (state: UploadControlsState): UploadError[] => {
            return state.uploadErrors;
        },
        getFile: (state: UploadControlsState): File | undefined => {
            return state.formData.file;
        }
    }

}

export default UploadControlsModule;