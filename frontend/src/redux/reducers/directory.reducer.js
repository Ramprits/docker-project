import { directoryTypes } from "../constants/directory.constants";
const sections = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    size: 4,
    linkUrl: "hats",
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    size: 4,
    linkUrl: "",
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    size: 4,
    linkUrl: "",
  },
  {
    title: "women's",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: 6,
    id: 4,
    linkUrl: "",
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: 6,
    id: 5,
    linkUrl: "",
  },
];
const initialState = {
  directories: sections,
  loading: false,
  errorMessage: "",
};

export const directoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case directoryTypes.DIRECTORY_START:
      return Object.assign({}, state, {
        loading: true,
        errorMessage: "",
      });
    case directoryTypes.DIRECTORY_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: "",
        directories: payload,
      });

    case directoryTypes.DIRECTORY_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: payload,
      });

    default:
      return state;
  }
};
