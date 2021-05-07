export interface VehicleUseState {
  id: string;
  name: string;
  description: string;
  updateType: string
}

export const emptyState: VehicleUseState = {
  id: '',
  name: '不选择',
  description: '',
  updateType: ''
};
