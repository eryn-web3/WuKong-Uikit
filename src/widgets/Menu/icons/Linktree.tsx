import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path id="path993" d="M10.594,15.409h2.87v6.45h-2.87V15.409"/>
      <path id="path991" d="M3.958,8.806h4.877L5.363,5.519l1.913-1.95l3.304,3.379V2.14h2.87v4.807l3.302-3.379
        l1.913,1.95l-3.472,3.287h4.879v2.718h-4.909l3.489,3.379l-1.914,1.903L12,12.061l-4.739,4.745l-1.914-1.903l3.488-3.379H3.928
        V8.806H3.958"/>
    </Svg>
  );
};

export default Icon;
