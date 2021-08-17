export interface MyTableConfig{
  headers : MyHeaders[]
  order: MyOrder
  search : MySearch
  pagination : MyPagination
  action : MyTableActionEnum
}

export interface MyHeaders{
  key: string;
  label: string;
}

export interface MyOrder{
  defaultColumn: string;
  orderType: boolean;
}

export interface MySearch {
  columns : string [];
}

export interface MyPagination {
  itemPerPage : number ;
  itemPerPageOptions : number [];
}

export interface MyTableActionEnum {
  actions: string[];
}

export const theHeaders: MyHeaders[]= [
  {key: "id", label: "id"},
  {key: "nome", label: "nome"},
  {key: "cognome", label: "cognome"}
]

export const theOrder: MyOrder = {
  defaultColumn: 'id',
  orderType: true
};

export const theSearch: MySearch = {
  columns: []
}

export const thePagination: MyPagination = {
  itemPerPage: 5,
  itemPerPageOptions: [2, 5, 10, 20]
}

export const theActionEnum: MyTableActionEnum = {
  actions: []
}

export const myTableConfig : MyTableConfig={
  headers: theHeaders,
  order: theOrder,
  search: theSearch,
  pagination: thePagination,
  action: theActionEnum
}
