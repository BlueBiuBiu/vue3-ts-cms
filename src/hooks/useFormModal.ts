import { ref } from "vue"
import formModal from "@/components/form-modal"

type CallBackFn = (item?: any) => void

export function useFormModal(createCb?: CallBackFn, editCb?: CallBackFn) {
  const formModalRef = ref<InstanceType<typeof formModal>>()
  const defaultFormValue = ref({})
  const createBtnClick = () => {
    console.log(formModalRef.value)

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
    editCb && editCb(row)
  }

  return [formModalRef, defaultFormValue, createBtnClick, editBtnClick]
}
