import { Component } from 'cerebral-snabbdom';
import Example from './example';
import { Button, DatePicker } from '../../lib';

export default Component({
  locale: ['locale'],
  datePicker: ['demos', 'datePicker']
}, ({
  state: {
    locale,
    datePicker
  },
  signals
}) => (
  <div>
    <Example code={`
import { DatePicker } from 'snabbdom-material';
    `}/>
    <Example code={`
<DatePicker
  locale={locale}
  isOpen={showDatePicker}
  year={year}
  month={month}
  pickingValue={pickingDate}
  onChange={onChange}
  onNavigate={onNavigate}
  onOk={onOk}
  onCancel={onCancel}/>
    `}/>
    <p>
      The locale will default to <code>en</code>, to use any other locale you must ensure that you have
      first <a href="http://momentjs.com/docs/#/i18n/loading-into-browser/">loaded the locale</a> into
      moment.js.
    </p>
    <Button primary onClick={() => signals.datePickerOpened({ value: datePicker.pickedDate })}>Pick Date</Button>
    Picked Date: {datePicker.pickedDate ? datePicker.pickedDate.toDateString() : 'none'}
    <DatePicker
      locale={locale}
      isOpen={datePicker.showDatePicker}
      year={datePicker.pickedCalendar.year}
      month={datePicker.pickedCalendar.month}
      pickingValue={datePicker.pickingDate}
      onChange={e => signals.datePickerChanged({ value: e.target.value })}
      onNavigate={e => signals.datePickerNavigate({ value: e.target.value })}
      onOk={e => signals.datePickerSelected({ value: e.target.value })}
      onCancel={() => signals.datePickerCanceled()}/>
  </div>
));
