import { css } from "@emotion/css";
import clsx from "clsx";
import React from "react";

export const Loader = ({ type, className }) => {
    return (
        <div
            className={clsx(
                "skeleton",
                className ?? "",
                css(`
            margin: 10px 0;

            width: 100%;
            position: relative;
         
       .thumbnail {
            width: 100%;
            min-height: 500px;
            background: rgba(223, 223, 223, 0.118);
           
         }
        .text-lg {
            width: 100%;
            margin-top: 10px;
            background: #D2DBE2;
            border-radius: 7px;
            min-height: 10px;
         }
      .text-md {
            width: 70%;
            margin-top: 10px;
            background: #D2DBE2;
            border-radius: 7px;
            min-height: 10px;
         }
       .text-sm {
            width: 40%;
            margin-top: 10px;
            background: rgba(223, 223, 223, 0.118);
            border-radius: 7px;
            min-height: 10px;
         }
         .shimmer-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            .shimmer {
                width: 0%;
                height: 100%;
                opacity: 0.1;
                background: rgba(238, 238, 238, 0.154);
                animation: loader 2s linear infinite;
                
             }
         }
      
         @keyframes loader {
           0% {
            width: 0%;
           }
           50% {
            width: 100%;
           }
         
           100% {
            width: 0%;
           }
         }
        `),
            )}
        >
            <div className={type}>
                <div className="shimmer-wrapper">
                    <div className="shimmer" />
                </div>{" "}
            </div>
        </div>
    );
};
