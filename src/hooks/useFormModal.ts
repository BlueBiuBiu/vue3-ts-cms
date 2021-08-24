import { ref } from "vue"
import formModal from "@/components/form-modal"

export function useFormModal() {
  const formModalRef = ref<InstanceType<typeof formModal>>()
  const defaultFormValue = ref({})
  const createBtnClick = () => {
    defaultFormValue.value = {}
    if (formModalRef.value) {
      formModalRef.value.dialogVisible = true
    }
  }

  const editBtnClick = (row: any) => {
    defaultFormValue.value = { ...row }
    if (formModalRef.value) {
      formModalRef.value.dialogVisible = true
    }
    console.log(defaultFormValue.value)
  }

  return [formModalRef, defaultFormValue, createBtnClick, editBtnClick]
}
