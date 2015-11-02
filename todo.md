## TODO

1. handle navigate actions
  (?) router or history
  
2. Change handler format, split components into:
  - meta 
  - controller (rx)
  - view
  
  (params)->{meta$, controller$}

3. Server side rendering

4. File structure reorganisation
5. React 0.14
6. Better hash handling
7. Imitate browser scroll behaviour


==============

## Router roadmap

0. history
    pushState()
    replaceState()
	createHref()
	listen()
	


url -> route, params -> state update


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
	
	
components
	- Link
	
	
