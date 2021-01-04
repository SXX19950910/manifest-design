const getters = {
  componentList: (state: any) => state.components.componentList,
  storeList: (state: any) => state.components.storeList,
  activeComponent: (state: any) => state.components.activeComponent,
  templateList: (state: any) => state.components.templateList,
  selected: (state: any) => state.components.selected
};

export default getters;
