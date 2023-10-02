import clsx from 'clsx';
import React from 'react';
import {
  DayPicker,
  DayPickerDefaultProps,
  DayPickerSingleProps
} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { font_RedHatDisplay } from '../fonts';

export const SingleDatePicker = (props: DayPickerDefaultProps | DayPickerSingleProps) => {
  const [selected, setSelected] = React.useState<Date>();

  return (
    <DayPicker
      {...props}
      className={clsx('w-full', font_RedHatDisplay.className)}
      mode='single'
      selected={selected}
      onSelect={setSelected}
      ISOWeek
    />
  )
}
