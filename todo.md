# TODO for APP

search component? - yes
test filter, order in list or only pipes? - yes
directive as test host (need help)
some troubles with test-host and app-routing.module
test router
pipes mocks module?

ngIf Load More
Author on the Card
http error handling => no data

test coursesService
test storeService(filterService)

!!! http<any | void | ???>
catchError return type

json-server somehow reset token after create/update/delete

remove filter
remove sort pipe, implement server sort

# QUESTIONS and KNOWLEDGE GAPS

how to override pipes providers? w/o mocking full pipe?

is it possible to use @Input callback instead of @Output eventEmitter? - yes
should we do this? - no, use convention with @Output eventEmitter

ngModule providers vs Components providers
read more about forRoot
providedIn: 'root'

how to test onPush strategy? - onPush doesn't work with mutation via @Output eventEmitter

how to protect router by auth? - with guards

() vs {} in rxJS

components inheritance

async html w/o && - for {{}} maybe async pipe
but what for [(ngModel)] ?

reed more about cold/hot observables
reed more about different maps

what for exactly we need @Effect({ dispatch: false })?
what if success doesn't dispatch action, but catchError does?

reed more about ngrx selectors?

select is viable only if we need more complex selection logic, isn't it?

how to organize events through app without ngrx, emit/broadcast?

project structure for ngrx store/effects?
