"use client";

import { useState, useEffect } from "react";
import { DateEntryProps } from "../../utils/interface";

const dateEntry: React.FC<DateEntryProps> = ({ inputDay }) => {
    const today: any = new Date();
    const dateString = today.toLocaleDateString("pt-BR").split("/");
    const maxValue = `${dateString[2]}-${dateString[1]}-${dateString[0]}`;
    const [date, setDate] = useState<string>(maxValue);

    useEffect(() => {
        inputDay(date);
    }, [date]);

    return (
        <>
            <input
                type="date"
                min="1995-06-20"
                max={maxValue}
                onChange={(dateChange) => setDate(dateChange.target.value)}
            />
        </>
    );
};

export default dateEntry;
