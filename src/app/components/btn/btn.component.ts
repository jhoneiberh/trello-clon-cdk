import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-btn',
    templateUrl: './btn.component.html',
})
export class BtnComponent {
    @Input() typeBtn: 'button' | 'submit' | 'menu' | 'reset' = 'button';
    @Input() colorBtn: string = 'success';

    get colors() {
        return {
            'bg-success-600': this.colorBtn === 'success',
            'hover:bg-success-700': this.colorBtn === 'success',
            'focus:bg-success-800': this.colorBtn === 'success',
            'bg-red-500': this.colorBtn === 'red',
            'hover:bg-red-600': this.colorBtn === 'red',
            'focus:bg-red-700': this.colorBtn === 'red',
        };
    }
}
