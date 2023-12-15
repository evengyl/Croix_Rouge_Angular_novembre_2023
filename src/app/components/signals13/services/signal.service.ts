import { Injectable, WritableSignal, computed, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SignalService {

    //Signals
    count: WritableSignal<number> = signal(0)
    qty: WritableSignal<number> = signal(0)
    total = computed(() => this.count() * this.qty())

    constructor() { }

}
