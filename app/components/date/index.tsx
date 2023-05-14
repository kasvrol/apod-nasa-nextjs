"use client";

import { Fragment, useEffect, useState } from "react";
import { DateEntryProps } from "../../utils/interface";
import Image from "next/image";
import Earth from "../../../public/earth.png";
import styles from "../../styles/date.module.css";
import { LoadingForHome } from "../loading";
import {
    ApiNasaGovImage01,
    ApiNasaGovImage02,
    ApiNasaGovImage03,
} from "../../middleware";

const dateEntry: React.FC<DateEntryProps> = ({ inputDay }) => {
    const today: any = new Date();
    const dateString = today.toLocaleDateString("pt-BR").split("/");
    const maxValue = `${dateString[2]}-${dateString[1]}-${dateString[0]}`;
    const [date, setDate] = useState<string>(maxValue);
    const [dateArray, setArrayDate] = useState<any>([]);
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const response01: any = await ApiNasaGovImage01(dateArray[0]);
            // const response02: any = await ApiNasaGovImage01(dateArray[1]);
            // const response03: any = await ApiNasaGovImage01(dateArray[2]);
            if (response01) {
                const responseJson01 = await response01.json();
                // const responseJson02 = await response02.json();
                // const responseJson03 = await response03.json();
                setLoading(false);
                setData(responseJson01);
            } else {
                setLoading(false);
            }
        })();
        inputDay(date);
    }, [date]);

    const optionsAndDates = (object: any) => {
        const { previousMonth, currentMonth, day, year, option } = object;
        let previousDates: object;
        let previousDate01: string;
        let previousDate02: string;
        let previousDate03: string;

        switch (option) {
            case 1:
                previousDates = [
                    (previousDate01 = `${year}-${previousMonth}-31`),
                    (previousDate02 = `${year}-${previousMonth}-30`),
                    (previousDate03 = `${year}-${previousMonth}-29`),
                ];
                break;
            case 2:
                previousDates = [
                    (previousDate01 = `${year}-${previousMonth}-30`),
                    (previousDate02 = `${year}-${previousMonth}-29`),
                    (previousDate03 = `${year}-${previousMonth}-28`),
                ];
                break;
            case 3:
                previousDates = [
                    (previousDate01 = `${year}-${currentMonth}-01`),
                    (previousDate02 = `${year}-${previousMonth}-31`),
                    (previousDate03 = `${year}-${previousMonth}-30`),
                ];
                break;
            case 4:
                previousDates = [
                    (previousDate01 = `${year}-${currentMonth}-01`),
                    (previousDate02 = `${year}-${previousMonth}-30`),
                    (previousDate03 = `${year}-${previousMonth}-29`),
                ];
                break;
            case 5:
                previousDates = [
                    (previousDate01 = `${year - 1}-12-31`),
                    (previousDate02 = `${year - 1}-12-30`),
                    (previousDate03 = `${year - 1}-12-29`),
                ];
                break;
            case 6:
                previousDates = [
                    (previousDate01 = `${year}-${currentMonth}-01`),
                    (previousDate02 = `${year - 1}-12-31`),
                    (previousDate03 = `${year - 1}-12-30`),
                ];
                break;
            case 7:
                previousDates = [
                    (previousDate01 = `${year}-${previousMonth}-28`),
                    (previousDate02 = `${year}-${previousMonth}-27`),
                    (previousDate03 = `${year}-${previousMonth}-26`),
                ];
                break;
            case 8:
                previousDates = [
                    (previousDate01 = `${year}-${currentMonth}-01`),
                    (previousDate02 = `${year}-${previousMonth}-28`),
                    (previousDate03 = `${year}-${previousMonth}-27`),
                ];
                break;
            default:
                if (day < 11) {
                    previousDates = [
                        (previousDate01 = `${year}-${currentMonth}-0${
                            day - 1
                        }`),
                        (previousDate02 = `${year}-${currentMonth}-0${
                            day - 2
                        }`),
                        (previousDate03 = `${year}-${currentMonth}-0${
                            day - 3
                        }`),
                    ];
                } else if (day < 12) {
                    previousDates = [
                        (previousDate01 = `${year}-${currentMonth}-${day - 1}`),
                        (previousDate02 = `${year}-${currentMonth}-0${
                            day - 2
                        }`),
                        (previousDate03 = `${year}-${currentMonth}-0${
                            day - 3
                        }`),
                    ];
                } else {
                    previousDates = [
                        (previousDate01 = `${year}-${currentMonth}-${day - 1}`),
                        (previousDate02 = `${year}-${currentMonth}-${day - 2}`),
                        (previousDate03 = `${year}-${currentMonth}-0${
                            day - 3
                        }`),
                    ];
                }

                break;
        }

        setArrayDate(previousDates);
    };

    const previousMonths = (option: number) => {
        const dates = date.split("-");
        const day = parseInt(dates[2]);
        const month = parseInt(dates[1]);
        const year = parseInt(dates[0]);
        let previousDates: object = {};

        if (month < 10) {
            previousDates = {
                previousMonth: `0${month - 1}`,
                currentMonth: `0${month}`,
                day: day,
                year: year,
                option: option,
            };
        } else if (month < 11) {
            previousDates = {
                previousMonth: `0${month - 1}`,
                currentMonth: `${month}`,
                day: day,
                year: year,
                option: option,
            };
        } else {
            previousDates = {
                previousMonth: `${month - 1}`,
                currentMonth: `${month}`,
                day: day,
                year: year,
                option: option,
            };
        }

        return optionsAndDates(previousDates);
    };

    const previousDays = (date: number, month: string) => {
        switch (month) {
            case date === 1 && "02":
            case date === 1 && "04":
            case date === 1 && "06":
            case date === 1 && "08":
            case date === 1 && "09":
            case date === 1 && "11":
                return previousMonths(1);
            case date === 1 && "05":
            case date === 1 && "07":
            case date === 1 && "10":
            case date === 1 && "12":
                return previousMonths(2);
            case date === 2 && "02":
            case date === 2 && "04":
            case date === 2 && "06":
            case date === 2 && "08":
            case date === 2 && "09":
            case date === 2 && "11":
                return previousMonths(3);
            case date === 2 && "05":
            case date === 2 && "07":
            case date === 2 && "10":
            case date === 2 && "12":
                return previousMonths(4);
            case date === 1 && "01":
                return previousMonths(5);
            case date === 2 && "01":
                return previousMonths(6);
            case date === 1 && "03":
                return previousMonths(7);
            case date === 2 && "03":
                return previousMonths(8);
            default:
                return previousMonths(9);
        }
    };

    const previousDates = (date: string) => {
        const dates = date.split("-");

        switch (dates[2]) {
            case "01":
                return previousDays(1, dates[1]);
            case "02":
                return previousDays(2, dates[1]);
            default:
                return previousDays(3, dates[1]);
        }
    };

    previousDates(date);

    return (
        <div className={styles.Date}>
            {loading ? (
                <LoadingForHome />
            ) : (
                <input
                    type="date"
                    min="1995-06-20"
                    max={maxValue}
                    onChange={(dateChange) => setDate(dateChange.target.value)}
                />
            )}
        </div>
    );
};

export default dateEntry;
