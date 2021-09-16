import React from "react";
import { BlogLoading } from "./BlogLoading";
import "./index.css";



export const Blogs = ({ blogs, blogLoading ,history}) => {
  // console.log(blogLoading, blogs);
  const openPost = (link) => {
    window.open(link, "_blank");
    // console.log("history",history)
    // history.push('/blogs')
  
  };
  return (
    <div className="blogsWrapper">
      <h4>Blogs</h4>
      <div className="blogData">
        {blogLoading ? (
          <BlogLoading />
        ) : (
          blogs.map((each, i) => (
            <div
              className="individualBlogs"
              key={i}
              onClick={() => openPost(each.guid)}
            >
              <div className="blogDescription">
                <div className="blogTitle">{each.title}</div>
                <div className="blogInfoWrapper">
                  {/* <div className="blogStacks">tags - React,Node,Mongo.</div> */}
                  <div className="blogTimeStamp">{each.pubDate}</div>
                </div>
              </div>
              <div className="blogImage">
                <img src={each.image} alt="Avatar" className="image" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
