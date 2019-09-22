interface CreateValueFn {
  (s: string): string;
}

interface GetValueFn {
  (s: string): string;
}

export interface ValueStore {
  createValue: CreateValueFn;
  getValue: GetValueFn;
}