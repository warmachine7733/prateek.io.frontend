import axios from "axios";

export const handleBlogLoading = (data) => {
  return (dispatch) => {
    dispatch({ type: "HANDLE_BLOG_LOADING", data });
  };
};
export const storeBlogs = (data) => {
  return (dispatch) => {
    dispatch({ type: "STORE_BLOGS", data });
  };
};
export const getMediumPosts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(handleBlogLoading(true));
      const result = await axios.get(
        "https://prateek-io-server.vercel.app/getBlogsFromDb"
      );
      const blogs = result.data;
      dispatch(storeBlogs(blogs));
      dispatch(handleBlogLoading(false));
    } catch (error) {
      console.log(console.error);
    }
  };
};

export const ipLookUp = () => {
  return async (dispatch, getState) => {
    // var ip = await publicIpv4();
    // lookup hit
    // await axios.post(
    //   "https://prateek-io-server.vercel.app/storeIpAndLocation",
    //   { ip }
    // );
  };
};
export const xpUpdate = (data) => {
  return (dispatch) => {
    dispatch({ type: "XP_UPDATE", data });
  };
};

export const setGlobalLoader = (data) => {
  return (dispatch) => {
    dispatch({ type: "G_LOADER", data });
  };
};
