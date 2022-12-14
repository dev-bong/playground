import kaboom from "kaboom"

function start_game() {
	// simple rpg style walk and talk

	kaboom()

	loadSprite("bag", "/sprites/wizard.png")
	loadSprite("ghosty", "/sprites/wizard.png")
	loadSprite("grass", "/sprites/wall.png")
	loadSprite("steel", "/sprites/wall.png")
	loadSprite("door", "/sprites/castle.png")
	loadSprite("key", "/sprites/key.png")
	loadSprite("bean", "/sprites/knight.png")

	scene("main", (levelIdx) => {

		const SPEED = 320

		// character dialog data
		const characters = {
			"a": {
				sprite: "bag",
				msg: "열쇠를 집어라!",
			},
			"b": {
				sprite: "ghosty",
				msg: "크크크크",
			},
		}

		// level layouts
		const levels = [
			[
				"=====|===",
				"=       =",
				"= a     =",
				"=       =",
				"=       =",
				"=    $  =",
				"=       =",
				"=   @   =",
				"=========",
			],
			[
				"---------",
				"-       -",
				"-       -",
				"-  $    -",
				"|       -",
				"-       -",
				"-     b -",
				"-   @   -",
				"---------",
			],
		]

		addLevel(levels[levelIdx], {
			width: 64,
			height: 64,
			pos: vec2(64, 64),
			"=": () => [
				sprite("grass"),
				area(),
				solid(),
			],
			"-": () => [
				sprite("steel"),
				area(),
				solid(),
			],
			"$": () => [
				sprite("key"),
				area(),
				"key",
			],
			"@": () => [
				sprite("bean"),
				area(),
				solid(),
				"player",
			],
			"|": () => [
				sprite("door"),
				area(),
				solid(),
				"door",
			],
			// any() is a special function that gets called everytime there's a
			// symbole not defined above and is supposed to return what that symbol
			// means
			any(ch) {
				const char = characters[ch]
				if (char) {
					return [
						sprite(char.sprite),
						area(),
						solid(),
						"character",
						{ msg: char.msg, },
					]
				}
			},
		})

		// get the player game obj by tag
		const player = get("player")[0]

		function addDialog() {
			const h = 160
			const pad = 16
			const bg = add([
				pos(0, height() - h),
				rect(width(), h),
				color(0, 0, 0),
				z(100),
			])
			const txt = add([
				text("", {
					width: width(),
				}),
				pos(0 + pad, height() - h + pad),
				z(100),
			])
			bg.hidden = true
			txt.hidden = true
			return {
				say(t) {
					txt.text = t
					bg.hidden = false
					txt.hidden = false
				},
				dismiss() {
					if (!this.active()) {
						return
					}
					txt.text = ""
					bg.hidden = true
					txt.hidden = true
				},
				active() {
					return !bg.hidden
				},
				destroy() {
					bg.destroy()
					txt.destroy()
				},
			}
		}

		let hasKey = false
		const dialog = addDialog()

		player.onCollide("key", (key) => {
			destroy(key)
			hasKey = true
		})

		player.onCollide("door", () => {
			if (hasKey) {
				if (levelIdx + 1 < levels.length) {
					go("main", levelIdx + 1)
				} else {
					go("win")
				}
			} else {
				dialog.say("you got no key!")
			}
		})

		// talk on touch
		player.onCollide("character", (ch) => {
			dialog.say(ch.msg)
		})

		const dirs = {
			"left": LEFT,
			"right": RIGHT,
			"up": UP,
			"down": DOWN,
		}

		for (const dir in dirs) {
			onKeyPress(dir, () => {
				dialog.dismiss()
			})
			onKeyDown(dir, () => {
				player.move(dirs[dir].scale(SPEED))
			})
		}

	})

	scene("win", () => {
		add([
			text("You Win!"),
			pos(width() / 2, height() / 2),
			origin("center"),
		])
	})

	go("main", 0)
}

export default start_game