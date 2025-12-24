import React from "react";
import { BlogLoading } from "./BlogLoading";
import { IBlogs } from "./types";
import messages from "./messages";
import "./index.css";

const Blogs = ({ blogs, isBlogLoading}: IBlogs) => {
  const openPost = (link: string) => {
    window.open(link, "_blank");
  
  };
  return (
    <div className="blogsWrapper">
      <h4>{messages.blogsHeader}</h4>
      <div className="blogData">
        {isBlogLoading ? (
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

export default Blogs;
