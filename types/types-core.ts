/**
 * @description: Sort mode
 */
export enum SORT_MODE {
  ASC = 'asc',
  DESC = 'desc',
}

export interface KeyValue {
  [key: string]: any;
}

type MODE = SORT_MODE;

export interface FilterKey {
  key: string;
  mode: MODE | string;
}
