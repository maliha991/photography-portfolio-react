import athelete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athelete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
	return [
		{
			title: "The Athelete",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, incidunt?",
			mainImg: athelete,
			secondaryImg: athelete2,
			url: "/work/the-athelete",
			awards: [
				{
					title: "Truly A masterpiece",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Fresh look on a brutal sport",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "It’s okay lmao.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
			],
		},
		{
			title: "Good Times",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ipsum.",
			mainImg: goodtimes,
			secondaryImg: goodtimes2,
			url: "/work/good-times",
			awards: [
				{
					title: "Truly A masterpiece",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Fresh look on a brutal sport",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "It’s okay lmao.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
			],
		},
		{
			title: "The Racer",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, quia.",
			mainImg: theracer,
			secondaryImg: theracer2,
			url: "/work/the-racer",
			awards: [
				{
					title: "Truly A masterpiece",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "Fresh look on a brutal sport",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
				{
					title: "It’s okay lmao.",
					description:
						"“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
				},
			],
		},
	];
};
