export interface MasterCreateCommand<T> {
  onAdd: (entity: T) => void;
  onCancel: () => void;
}
