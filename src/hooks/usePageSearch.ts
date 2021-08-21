import { ref } from "vue"
import pageContent from "@/components/page-content"

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>()
  const handleQuery = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }

  const handleReset = () => {
    pageContentRef.value?.getPageData()
  }
  return [pageContentRef, handleReset, handleQuery]
}
