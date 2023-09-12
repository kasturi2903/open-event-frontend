import classic from 'ember-classic-decorator';
import { computed } from '@ember/object';
import ModalBase from 'open-event-frontend/components/modals/modal-base';

@classic
export default class AddToCalenderModal extends ModalBase {
    calendarIcons = {
      'Google Calender' : 'google',
      'iCal'            : 'calender',
      'Yahoo'           : 'yahoo',
      'Outlook'         : 'microsoft'
    }

    calenderColors = {
      'Google Calender' : 'blue',
      'iCal'            : 'red',
      'Yahoo'           : 'purple',
      'Outlook'         : 'teal'
    }

    @computed('calenderUrls')
    get calenders() {
      return this.calenderUrls.map(calender => {
        const newCalender = {};
        newCalender.name = calender.name;
        newCalender.url = calender.url;
        newCalender.icon = this.calenderIcons[calender.name];
        newCalender.color = this.calenderColors[calender.name];
        return newCalender;
      });
    }
}
