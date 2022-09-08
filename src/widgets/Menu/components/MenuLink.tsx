import React, { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";



const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");
  const isMailLink = href?.startsWith("mailto");
  const isSoon = href?.startsWith("soon");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  
  if(isHttpLink || isMailLink){
    const Tag: any = "a";
    const props = { href };
    return <Tag {...props} {...otherProps} />;
  } 
  if(isSoon) {
    const Tag: any = "a";
    return <Tag {...otherProps} />;
  }

  const Tag: any = NavLink;
  const props = { to: href };
  return <Tag {...props} {...otherProps} />;
};

export default MenuLink;
