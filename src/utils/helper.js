export function convertCount(num) {
	const views = Intl.NumberFormat("en-US", {
		notation: "compact",
		maximumFractionDigits: 1
	}).format(num);
	return views;
}

export function msToTime(ms) {
	let seconds = Math.floor(ms / 1000);
	let minutes = Math.floor(ms / (1000 * 60));
	let hours = Math.floor(ms / (1000 * 60 * 60));
	let days = Math.floor(ms / (1000 * 60 * 60 * 24));
	if (seconds < 60) return seconds + " sec";
	else if (minutes < 60) return minutes + " min";
	else if (hours < 24) return hours + " hours";
	else if (days === 1) return days + " day";
	else if (days > 1 && days < 365) return days + " days";
}

const nameList = [
	"Time",
	"Past",
	"Future",
	"Dev",
	"Fly",
	"Flying",
	"Soar",
	"Soaring",
	"Power",
	"Falling",
	"Fall",
	"Jump",
	"Cliff",
	"Mountain",
	"Rend",
	"Red",
	"Blue",
	"Green",
	"Yellow",
	"Gold",
	"Demon",
	"Demonic",
	"Panda",
	"Cat",
	"Kitty",
	"Kitten",
	"Zero",
	"Memory",
	"Trooper",
	"XX",
	"Bandit",
	"Fear",
	"Light",
	"Glow",
	"Tread",
	"Deep",
	"Deeper",
	"Deepest",
	"Mine",
	"Your",
	"Worst",
	"Enemy",
	"Hostile",
	"Force",
	"Video",
	"Game",
	"Donkey",
	"Mule",
	"Colt",
	"Cult",
	"Cultist",
	"Magnum",
	"Gun",
	"Assault",
	"Recon",
	"Trap",
	"Trapper",
	"Redeem",
	"Code",
	"Script",
	"Writer",
	"Near",
	"Close",
	"Open",
	"Cube",
	"Circle",
	"Geo",
	"Genome",
	"Germ",
	"Spaz",
	"Shot",
	"Echo",
	"Beta",
	"Alpha",
	"Gamma",
	"Omega",
	"Seal",
	"Squid",
	"Money",
	"Cash",
	"Lord",
	"King",
	"Duke",
	"Rest",
	"Fire",
	"Flame",
	"Morrow",
	"Break",
	"Breaker",
	"Numb",
	"Ice",
	"Cold",
	"Rotten",
	"Sick",
	"Sickly",
	"Janitor",
	"Camel",
	"Rooster",
	"Sand",
	"Desert",
	"Dessert",
	"Hurdle",
	"Racer",
	"Eraser",
	"Erase",
	"Big",
	"Small",
	"Short",
	"Tall",
	"Sith",
	"Bounty",
	"Hunter",
	"Cracked",
	"Broken",
	"Sad",
	"Happy",
	"Joy",
	"Joyful",
	"Crimson",
	"Destiny",
	"Deceit",
	"Lies",
	"Lie",
	"Honest",
	"Destined",
	"Bloxxer",
	"Hawk",
	"Eagle",
	"Hawker",
	"Walker",
	"Zombie",
	"Sarge",
	"Capt",
	"Captain",
	"Punch",
	"One",
	"Two",
	"Uno",
	"Slice",
	"Slash",
	"Melt",
	"Melted",
	"Melting",
	"Fell",
	"Wolf",
	"Hound",
	"Legacy",
	"Sharp",
	"Dead",
	"Mew",
	"Chuckle",
	"Bubba",
	"Bubble",
	"Sandwich",
	"Smasher",
	"Extreme",
	"Multi",
	"Universe",
	"Ultimate",
	"Death",
	"Ready",
	"Monkey",
	"Elevator",
	"Wrench",
	"Grease",
	"Head",
	"Theme",
	"Grand",
	"Cool",
	"Kid",
	"Boy",
	"Girl",
	"Vortex",
	"Paradox"
];
export function generateRandomName() {
	return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomText(length) {
	let result = "";
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
}
