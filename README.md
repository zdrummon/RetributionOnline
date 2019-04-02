# Retribution Online (working title) 
| Trevor Haggerty | Zachary Drummond |
| ------------- | ------------- |
| cesismalon@gmail.com | zdrummon@gmail.com |

Design Document: https://docs.google.com/document/d/1mac-0VZsTrez9QvabBz1CASV5c2CC6-o7pHtvNSD0ZE/edit?usp=sharing

We're building a platform agnpostic game as both a test for ourselves and a product for personal enjoyment and the enrichment of those that will be able to play it. We're currently calling it Retribution Online but it's based on a fictional world we crafted for a previous game project that went by the name Retribution, and primarily involves tactical turn based combat on a hexagonal game grid between various humanoid species, such as humans, goblins, and dwarves.

- [x] make a README.md
- [ ] make a feature todo list
- [ ] apple juice
- [ ] take pictures for the md file
- [x] add directional facting and keyboard controls
- [ ] add database using for the player movement to access in gameHandler.moveGameBoard to fill edge data
- [ ] build assets for more objects

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
			
		


 ### notes
filler text until we add notes - just put pretty thoughts here
or just experiment with formatting `like so`