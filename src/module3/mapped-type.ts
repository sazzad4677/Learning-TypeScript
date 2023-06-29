type Area = {
  width: number;
  hight: number;
};
type A = Area["hight"]; // look up types
type B = keyof Area;

const rectungularArea: Area = {
  width: 20,
  hight: 20,
};

type AreaReadOnly = {
  readonly width: number;
  readonly height: number;
};
const readOnlyRectungularArea: AreaReadOnly = {
  width: 20,
  height: 20,
};

// readOnlyRectungularArea["width"] = 20; // Cannot assign to 'width' because it is a read-only property.

type Mapping = {
  [key in keyof AreaReadOnly]: number;
};
