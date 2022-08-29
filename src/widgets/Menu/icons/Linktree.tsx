import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path id="path993" d="M10.292,16.145h3.488v7.84h-3.488V16.145"/>
      <path id="path991" d="M2.225,8.117h5.929L3.933,4.123l2.326-2.37l4.016,4.107V0.015h3.489v5.843l4.014-4.107
        l2.325,2.37l-4.22,3.995h5.93v3.304h-5.967l4.241,4.108l-2.326,2.313L12,12.074l-5.76,5.768l-2.326-2.313l4.24-4.108H2.188V8.117
        H2.225"/>
    </Svg>
  );
};

export default Icon;
