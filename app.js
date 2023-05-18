import { MDCRipple } from '@material/ripple';
import { MDCIconButtonToggle } from '@material/icon-button';

const buttons = document.querySelectorAll('.mdc-button');
buttons.forEach((button) => {
    new MDCRipple(button);
});

const icon_buttons = document.querySelectorAll('.mdc-icon-button');
icon_buttons.forEach((button) => {
    new MDCIconButtonToggle(button);
});

icon_buttons.forEach((button) => {
    new MDCRipple(button);
});

