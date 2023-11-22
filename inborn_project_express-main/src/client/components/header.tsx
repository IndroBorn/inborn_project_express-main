import React from "react";
import { useState } from 'react';
import DateSelector from "./DateSelector"


export default function Header(){

    return (
        <>
        <div id="header">
            <label>
                From: <input name="inFrom" />
            </label>
            <label>
                To: <input name="inTo" />
            </label>
            <DateSelector/>
       </div>
       </>
    )
}