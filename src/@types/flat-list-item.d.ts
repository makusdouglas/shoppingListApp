declare interface IFlatListItem {
  key: string | number;
  render: () => JSX.Element;
  isTitle?: boolean;
}
