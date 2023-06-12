import UploadError from "./UploadError";

export default interface UploadControlsState {
    formData: {
        file: File | undefined
    }
    uploadErrors: UploadError[]
}
