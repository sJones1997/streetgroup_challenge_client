import UploadControls from "@/components/UploadControls.vue"
import { VueWrapper, shallowMount  } from "@vue/test-utils"
import store from '@/store'
import UploadControlsConstants from "@/constants/UploadControlsConstants"

const INVALID_FILE_TYPE = "image/png"

const uploadControlsWrapper: VueWrapper<any> = shallowMount(UploadControls, {
    global: {
        plugins: [store]
    }
})


describe("UploadControls", () => {

    test("form validation fails - invalid file type", async () => {
        //given
        const file = { type: INVALID_FILE_TYPE };
        const event = {
            target: {
                files: [file]
            }
        };
        //when  
        await uploadControlsWrapper.vm.validateFile(event)

        // //then
        expect(uploadControlsWrapper.vm.uploadErrors).toHaveLength(1)
        expect(uploadControlsWrapper.vm.uploadErrors[0].msg).toEqual(UploadControlsConstants.uploadErrorMesssages.invalidFileType)
        expect(uploadControlsWrapper.find('#error_0').text()).toEqual(UploadControlsConstants.uploadErrorMesssages.invalidFileType)
    })

    test("form validation fails - undefined file", async () => {
        //given
        const event = {
            target: {
                files: undefined
            }
        };
        //when  
        await uploadControlsWrapper.vm.validateFile(event)

        // //then
        expect(uploadControlsWrapper.vm.uploadErrors).toHaveLength(1)
        expect(uploadControlsWrapper.vm.uploadErrors[0].msg).toEqual(UploadControlsConstants.uploadErrorMesssages.undefinedValue)
        expect(uploadControlsWrapper.find('#error_0').text()).toEqual(UploadControlsConstants.uploadErrorMesssages.undefinedValue)
    })

})