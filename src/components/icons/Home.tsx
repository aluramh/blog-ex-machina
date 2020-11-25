import React, { CSSProperties, FC } from "react";

interface Props {
  color?: string;
  size: string;
  style?: CSSProperties;
  className?: string;
}

const Home: FC<Props> = (props) => {
  const { color, size, style, className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 4"
      viewBox="0 0 32 40"
      x="0px"
      y="0px"
      height={size}
      width={size}
      style={style}
      className={className}
    >
      <path
        fill={color}
        d="M25,30.7292H7a3.0033,3.0033,0,0,1-3-3v-12a1,1,0,1,1,2,0v12a1.0013,1.0013,0,0,0,1,1H25a1.0013,1.0013,0,0,0,1-1v-12a1,1,0,1,1,2,0v12A3.0033,3.0033,0,0,1,25,30.7292Z"
      />
      <path
        fill={color}
        d="M30,13.7292a.9946.9946,0,0,1-.6172-.2139L16.6182,3.486a.9992.9992,0,0,0-1.2364,0L2.6177,13.5153a1,1,0,0,1-1.2354-1.5722L14.1465,1.9138a2.9938,2.9938,0,0,1,3.707,0l12.7642,10.03A1,1,0,0,1,30,13.7292Z"
      />
      <path
        fill={color}
        d="M20,30.7292a1,1,0,0,1-1-1v-8a1.0013,1.0013,0,0,0-1-1H14a1.0013,1.0013,0,0,0-1,1v8a1,1,0,0,1-2,0v-8a3.0033,3.0033,0,0,1,3-3h4a3.0033,3.0033,0,0,1,3,3v8A1,1,0,0,1,20,30.7292Z"
      />
    </svg>
  );
};

export default Home;
