# QUESTIONS and KNOWLEDGE GAPS

[ Q ] how to override pipes providers? w/o mocking full pipe?

[ Q ] is it possible to use @Input callback instead of @Output eventEmitter?

- [ A ] yes

[ Q ] should we do this?

- [ A ] no, use convention with @Output eventEmitter

[ G ] ngModule providers vs Components providers

[ G ] read more about forRoot / providedIn: 'root'

[ Q ] how to test onPush strategy?

- [ A ] onPush doesn't work with mutation via @Output eventEmitter

[ Q ] how to protect router by auth?

- [ A ] with guards

[ Q ] {} vs () in rxJS

[ Q ] components inheritance

[ Q ] async html w/o && - for {{}} maybe async pipe. But what for [(ngModel)] ?

[ G ] reed more about cold/hot observables

[ G ] reed more about different maps

[ Q ] what for exactly we need @Effect({ dispatch: false })?

[ Q ] what if success doesn't dispatch action, but catchError does?

[ G ] reed more about ngrx selectors?

[ Q ] select is viable only if we need more complex selection logic, isn't it?

[ Q ] how to organize events through app without ngrx, emit/broadcast?

[ Q ] project structure for ngrx store/effects?

[ Q ] how to get error from the sub-component (cloud-tags-input)?

[ Q ] how to use generic type in cloud-tags-input insted of Object[]?
