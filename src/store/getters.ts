const getters = {
  componentList: (state: any) => state.components.componentList,
  storeList: (state: any) => state.components.storeList,
  activeComponent: (state: any) => state.components.activeComponent,
  templateList: (state: any) => state.components.templateList,
  selected: (state: any) => state.components.selected,
  lineLeft: (state: any) => state.components.line.left,
  lineTop: (state: any) => state.components.line.top
};

export default getters;
