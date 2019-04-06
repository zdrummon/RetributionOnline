#Design Document


```
game()
    updateGame()
        read and update GameState
        gameLogic
        read and update PlayerState
        entityLogic
        read and update MapState
        boardLogic        
        read and update InputState

    fpsLimiter()
        updateScreen()

connectionHandler()

keyHandler()
    keyDown eventListener()
    keyUp eventListener()
    keyDown eventHandler()
    keyUp eventHandler()

audioHandler()
	soundEffects() (non-looping, trigger-based)
	musicEffects() (looping, synchronizable)
	ambientEffects() (looping, ambient area profiles)

graphicsHandler()
	canvasDrawer()
		hudDrawer()
		boardDrawer()
			(hex, item, mob, equipment, *shading, *FX, *ceiling)
			animationHandler()
			movementInterpolator()




webpage for browser to open
	in the webpage:
	javascript canvas
	images
	audio
	javascript files
	css files
	rendered by node with routes



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
		game entities	(game entity array)
			x
			y
			z
			id	(= the length of the game entity array)
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