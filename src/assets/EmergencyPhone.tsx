import React from "react";

export const EmergencyPhone = (props: { svgColor?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="40"
      fill="none"
      viewBox="0 0 41 40"
    >
      <g
        fill={props.svgColor ? props.svgColor : "#4F5355"}
        clipPath="url(#clip0_909_294)"
      >
        <path d="M22.688 3.75c-5.5 0-10.188 3.375-12.125 8.125l1.687 3.063c.875-4.938 5.25-8.75 10.438-8.75 5.875 0 10.625 4.75 10.625 10.625 0 5.187-3.75 9.562-8.75 10.437l3.062 1.688c4.75-2 8.125-6.688 8.125-12.125.063-7.188-5.813-13.063-13.063-13.063zM17.625 28.5c-.625.625-1.188.875-2 .375-2-1.313-3.688-3.063-4.938-4.938-.5-.75-.25-1.312.376-2l2.312-2.312-3.625-6.688c-.687.063-1.75.313-2.562.626-4.875 2.25-3.563 10.187 2.562 16.312 6.125 6.125 14.063 7.438 16.188 2.563.375-.813.562-1.876.625-2.563l-6.688-3.625-2.25 2.25z"></path>
        <path d="M18.563 20v-6.563h-1.438l-1.875.813.313 1.375 1.25-.563V20h1.75zM23.563 20v-6.563h-1.438l-1.875.813.25 1.375 1.313-.563V20h1.75zM26.125 18.063l-.875.812V20h4.813v-1.5h-2.25l.625-.5c.75-.625 1.5-1.5 1.5-2.5 0-1.313-.875-2.125-2.438-2.125-.938 0-1.75.313-2.25.688l.5 1.312c.375-.25.875-.563 1.375-.563.688 0 1 .313 1 .813 0 .625-.625 1.313-2 2.438z"></path>
      </g>
      <defs>
        <clipPath id="clip0_909_294">
          <path fill="#fff" d="M0 0H40V40H0z" transform="translate(.5)"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
