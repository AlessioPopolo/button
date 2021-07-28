export interface MyTableConfig{
  headers : MyHeaders[]
  order: MyOrder
}

export interface MyHeaders{
  key: string;
  label: string;
}

export interface MyOrder{
  defaultColumn: string;
  orderType: string;
}

export const theHeaders: MyHeaders[]= [
  {key: "id", label: "id"},
  {key: "nome", label: "nome"},
  {key: "cognome", label: "cognome"}
]

export const theOrder: MyOrder = {
  defaultColumn: 'id',
  orderType: 'ascending'
};

export const myTableConfig : MyTableConfig={
  headers: theHeaders,
  order: theOrder
}
