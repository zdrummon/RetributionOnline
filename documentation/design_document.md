#Design Document


```
game()
    updateInputs()
    	keyHandler
            keyDown eventListener
            keyUp eventListener
            keyDown eventHandler 
            keyUp eventHandler
    updateConnections()
    updateGame()
        read and update GameState
        read and update PlayerState
        read and update MapState
        read and update InputState
        gameLogic
        boardLogic        
        entityLogic
    updateAudio()
    fpsLimiter()
        updateScreen()









webpage for browser to open
	in the webpage:
	javascript canvas
	images
	audio
	javascript files
	css files
	rendered by node with routes



    graphics output
		fpslimiter
		hexdrawer
		spritedrawer
		canvasresizer
		spriteanimator
		hexanimator
		gameveiw
		audiohandler
			bgm picker
			soundboard
	game logic
		maps
			logic points
				spawn locations
				event locations
			2d array
				hex data
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
			texture
			type
				items
					item type
					quantity
					effect
						status flags
							add to stat
							subtract from stat
							lock stat
							unlock stat
				hexes
					material
						stand on effect
						illumination
						ambient sound
						stepping sound
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
                    logic
```	