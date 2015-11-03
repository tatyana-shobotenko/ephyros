## TODO

1. data resolution
  - pass data to controller
4. redirects
5. history abstraction testing 
6. Better hash handling
7. Imitate browser scroll behaviour
8. Allow baseurl, add createHref to history

==============

## Router roadmap



1. route collection
	match() : url -> name, handlers, parameters || 404
	generate(): route, parameters -> url || error
    add()
	

2. route handler

	handle() : route, params, * state -> state
	- before unload
	- onLeave() [cancel transition, do side effects]
	- resolve data
	- onEnter() [cancel transition, do side effects, redirect]
	- replace state | update state

3. renderer:
	- wait for minimum renderable | or wait for server renderable
	- render
	- do scrolls
	
4. router context
	- generate url
	- is route active
	- subscribe for 'route active' changes
