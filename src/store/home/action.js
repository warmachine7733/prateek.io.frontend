import axios from "axios";
import publicIp from "public-ip";

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
    //   dispatch(handleLoading(true));
    try {
      // dispatch(handleBlogLoading(true));
      // const result = await axios.get(
      //   "https://shielded-earth-72166.herokuapp.com/getBlogs"
      // );
      // const blogs = result.data;
      // // console.log("blogs", blogs);
      // dispatch(storeBlogs(blogs));
      // dispatch(handleBlogLoading(false));
    } catch (error) {
      console.log(console.error);
    }

    //   let { data } = result;
    //   dispatch({ type: "SAVE_LOADED_IMAGE", data });
  };
};

export const ipLookUp = () => {
  return async (dispatch, getState) => {
    var ip = await publicIp.v4();
    //lookup hit
    // await axios.post(
    //   "https://shielded-earth-72166.herokuapp.com/storeIpAndLocation",
    //   { ip }
    // );
  };
};
