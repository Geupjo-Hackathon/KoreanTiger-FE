import React from "react";

export default function ClassFilter() {
    return <div>
        <select style={{width: '95%', border:'1px solid black', margin: '10px', padding: '5px', borderRadius: '5px'}}>
            <option value={"value_here"}>A반</option>
            <option value={"value_here"}>B반</option>
        </select>
    </div>;
}
