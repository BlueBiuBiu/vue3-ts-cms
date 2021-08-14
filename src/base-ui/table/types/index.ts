export interface ITableProps {
  prop?: string
  label: string
  minWidth: number
  fixed?: boolean
  align?: string
  slotName?: string
}

export interface ITableItem {
  ITableProps: ITableProps[]
  showIndex?: boolean
  showSelection?: boolean
}
