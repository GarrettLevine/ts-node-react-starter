import { Value } from '../types/value';

interface CreateValueFn {
  (v: Value): Promise<[Error, string]>;
}

interface GetValueFn {
  (s: string): Promise<[Error, string]>;
}

export interface ValueStore {
  CreateValue: CreateValueFn;
  GetValue: GetValueFn;
}