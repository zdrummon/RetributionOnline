# Retribution Online (working title) 
| Trevor Haggerty | Zachary Drummond |
| ------------- | ------------- |
| cesismalon@gmail.com | zdrummon@gmail.com |

We're building a browser-based javascript game as both a test for ourselves and a product for the enrichment of those that will be able to play it for free on the internet with their mothers permission to use her internet. We're currently calling it Retribution Online. It's based on a fictional subterranean world filled with various humanoid species such as humans, goblins, and dwarves. The gameplay primarily involves tactical turn-based exploration, combat, and death. The interface is an isometric perspective of a hex-based game grid with low resolution sprites.

- [x] make a README.md
- [ ] make a feature todo list
- [ ] apple juice
- [ ] take pictures for the md file
- [x] add directional facting and keyboard controls
- [ ] add database using for the player movement to access in gameHandler.moveGameBoard to fill edge data
- [ ] build assets for more objects

Design Document: https://docs.google.com/document/d/1mac-0VZsTrez9QvabBz1CASV5c2CC6-o7pHtvNSD0ZE/edit?usp=sharing


webpage for browser to open
	in the webpage:
	javascript canvas
	images
	javascript files
	css files
	rendered by node with routes
```
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
		


 ### notes
filler text until we add notes - just put pretty thoughts here
or just experiment with formatting `like so`