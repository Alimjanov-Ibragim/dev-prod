declare global {
  /**
   * Shared kernel
   */

  /**
   * ⚠️ FSD
   *
   * Its hack way to export redux infering types from @/app
   * and use it in @/shared/model/hooks.ts
   */

  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  declare type RootState = import('../src/app/hocs/appStore').RootState;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  declare type AppDispatch = import('../src/app/hocs/appStore').AppDispatch;
}

export {};
