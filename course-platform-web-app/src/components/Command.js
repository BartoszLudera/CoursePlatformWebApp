import React from "react";

import { task } from './Task'

const Command = () => {
    return (
        <>
            <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
                Command with your exercise
            </h1>
            <div className="w-full h-auto bg-whtie rounded-md text-[#1e293b] font-normal text-sm overflow-y-auto mb-6">
                {task[0].command}
            </div>
        </>
    );
};

export default Command;
