import '../index.css';
import React, { ButtonHTMLAttributes } from 'react';

const ButtonDayVariants =  {
  active: 
    "size-5 bg-primary:500 place-items-center " +
    "flex items-center justify-center " +
    "text-base text-black:500 " +
    "rounded-full"
  ,
  disable: 
    "size-5 bg-primary:400 place-items-center "  +
    "flex items-center justify-center "+
    "text-base text-white " +
    "rounded-full"
  ,
}

type ButtonDayVariant = keyof typeof ButtonDayVariants;


export interface WeekDayProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title : "Mo" | "Tu" | "We" | "Th" | "Fr"| "Sa" | "Su" ,
  variant: ButtonDayVariant; 
}

const WeekDay = ({variant, title, ...props} : WeekDayProps) => {
  const variantClasses = ButtonDayVariants[variant];
  console.log(variantClasses);
  return (
    <button className={variantClasses} {...props}>
        {title}
    </button>
  );
};

WeekDay.displayName = 'WeekDay';

export default WeekDay;
