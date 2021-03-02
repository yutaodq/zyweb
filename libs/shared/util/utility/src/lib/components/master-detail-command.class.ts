export interface MasterDetailCommand<T> {
  /** Close/hide the detail component */
  // close: () => void;
  /** Add a new entity */
  create: () => void;
  /** Delete an entity */
  delete: () => void;
  toList: () => void;
  // /** "Select" an entity */
  // select: (entity: T) => void;
  // /** Update an entity */
  // update: (entity: T) => void;
}
