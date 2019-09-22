import { Value } from '../types/value';

export interface Options {
  valueStore: ValueStore;
}

interface CreateValueFn {
  (v: Value): Promise<[Error, string]>;
}

interface GetValueFn {
  (s: string): Promise<[Error, string]>;
}

export interface ValueStore {
  createValue: CreateValueFn;
  getValue: GetValueFn;
}