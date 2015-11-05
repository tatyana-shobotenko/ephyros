## TODO

5. Imitate browser scroll behaviour
  - scroll top after following link
  - do not scroll when going forward or backward
  - scroll to hash after rendering when following a link
  
5. enter/leave, beforeunload
5. state updates (reuse state parts arouse routes, allow updates without whole state rebuild)
6. history abstraction testing 
6. Better hash handling
8. Allow baseurl, add createHref to history
9. Search
10. Post requests handling (?)
11. Render steps
  - minimum renderable
  - prerender
  - live
12. rewrite tool scripts 
  http://stackoverflow.com/questions/31903692/how-to-use-es6-in-webpack-config
13. replace jasmine in tests with tape
  https://www.npmjs.com/package/tap-spec
14. trailing slash handling
15. allow to return just React.Component instead of RxComponent 
16. let browser to make request if url is not matched

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
