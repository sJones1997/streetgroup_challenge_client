import UploadControlsState from "@/interfaces/UploadControlsInterfaces/UploadControlsState";
import UploadError from "@/interfaces/UploadControlsInterfaces/UploadError";


const UploadControlsModule = {
    state: (): UploadControlsState => ({
        uploadErrors: []
    }),
    mutations: {
        setUploadErrors: (state: UploadControlsState, uploadErrors: UploadError[]): void => {
            state.uploadErrors = uploadErrors;
        }
    },
    getters: {
        getUploadErrors: (state: UploadControlsState): UploadError[] => {
            return state.uploadErrors;
        }
    }

}

export default UploadControlsModule;