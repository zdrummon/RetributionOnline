#Design Document


```
webpage for browser to open
	in the webpage:
	javascript canvas
	images
	javascript files
	css files
	rendered by node with routes

game
    inputHandler
    	keyHandler
            keyDown eventListener
            keyUp eventListener
            keyDown eventHandler 
            keyUp eventHandler

    graphics output
		fpslimiter
		hexdrawer
		spritedrawer
		canvasresizer
		spriteanimator
		hexanimator
		(currently viewport)
	game logic
		maps	
		input effect
			move nw
			move n
			move ne
			move sw
			move s
			move se
			get item
		game entities
			x
			y
			z
			id
			type
				items
				hexes
				mobs
					max health
					current health
					max stamina
					current stamina
					inventory activator
					inventory list
					status activator
					status list
					collision detection
							receive moveX
							receive moveY
							receive moveZ
							test collision
							return result
					player
						move around with key controls
						status display
					other mobs
						friendly ai
						neutral ai
						hostile ai
```	