import React from "react";
import "../../css/user_homepage.css";
import ImageCard from "../ImageCard/ImageCard";

export const UserHomePage = () => {
	const list1 = [
		{
			id: 1,
			url: "https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
		},
		{
			url: "https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 2,
		},
		{
			url: "https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 3,
		},
		{
			url: "https://i.pinimg.com/236x/16/7f/e6/167fe63d4a008f8957c8e9406953af1f.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 4,
		},
		{
			url: "https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 5,
		},
		{
			url: "https://i.pinimg.com/236x/81/df/69/81df699b25ca1242a796f51397263d1a.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 6,
		},
		{
			url: "https://i.pinimg.com/236x/86/5a/62/865a62ce02bb38bd88851269a41959d1.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 7,
		},
		{
			url: "https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 8,
		},
		{
			url: "https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 9,
		},
		{
			url: "https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 10,
		},
		{
			url: "https://i.pinimg.com/236x/8a/e2/b1/8ae2b1f094af8f87438fa952678620d3.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 11,
		},
		{
			url: "https://i.pinimg.com/550x/66/3c/2b/663c2baa9a97ac56fe9c22a0fe139386.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 12,
		},
		{
			url: "https://i.pinimg.com/550x/31/ed/67/31ed67ff40247db90463d949e07a5e1d.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 13,
		},
		{
			url: "https://i.pinimg.com/550x/88/5f/e7/885fe7827f8e5f5297c4c0168fd4514d.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 14,
		},
		{
			url: "https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 15,
		},
		{
			url: "https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 16,
		},
		{
			url: "https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 17,
		},
	];

	const list2 = [
		{
			url: "https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 9,
		},
		{
			url: "https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 10,
		},
		{
			url: "https://i.pinimg.com/236x/8a/e2/b1/8ae2b1f094af8f87438fa952678620d3.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 11,
		},
		{
			url: "https://i.pinimg.com/550x/66/3c/2b/663c2baa9a97ac56fe9c22a0fe139386.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 12,
		},
		{
			url: "https://i.pinimg.com/550x/31/ed/67/31ed67ff40247db90463d949e07a5e1d.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 13,
		},
		{
			url: "https://i.pinimg.com/550x/88/5f/e7/885fe7827f8e5f5297c4c0168fd4514d.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 14,
		},
		{
			url: "https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 15,
		},
		{
			url: "https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 16,
		},
		{
			url: "https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 17,
		},
		{
			id: 1,
			url: "https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
		},
		{
			url: "https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 2,
		},
		{
			url: "https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 3,
		},
		{
			url: "https://i.pinimg.com/236x/16/7f/e6/167fe63d4a008f8957c8e9406953af1f.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 4,
		},
		{
			url: "https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 5,
		},
		{
			url: "https://i.pinimg.com/236x/81/df/69/81df699b25ca1242a796f51397263d1a.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 6,
		},
		{
			url: "https://i.pinimg.com/236x/86/5a/62/865a62ce02bb38bd88851269a41959d1.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 7,
		},
		{
			url: "https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 8,
		},
	];

	const list3 = [
		{
			url: "https://i.pinimg.com/550x/88/5f/e7/885fe7827f8e5f5297c4c0168fd4514d.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 14,
		},
		{
			url: "https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 15,
		},
		{
			url: "https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 16,
		},
		{
			url: "https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 9,
		},
		{
			url: "https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 10,
		},
		{
			url: "https://i.pinimg.com/236x/8a/e2/b1/8ae2b1f094af8f87438fa952678620d3.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 11,
		},
		{
			url: "https://i.pinimg.com/550x/66/3c/2b/663c2baa9a97ac56fe9c22a0fe139386.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 12,
		},
		{
			url: "https://i.pinimg.com/550x/31/ed/67/31ed67ff40247db90463d949e07a5e1d.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 13,
		},
		{
			url: "https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 17,
		},
		{
			id: 1,
			url: "https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
		},
		{
			url: "https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 2,
		},
		{
			url: "https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 3,
		},
		{
			url: "https://i.pinimg.com/236x/16/7f/e6/167fe63d4a008f8957c8e9406953af1f.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 4,
		},
		{
			url: "https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 5,
		},
		{
			url: "https://i.pinimg.com/236x/81/df/69/81df699b25ca1242a796f51397263d1a.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 6,
		},
		{
			url: "https://i.pinimg.com/236x/86/5a/62/865a62ce02bb38bd88851269a41959d1.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 7,
		},
		{
			url: "https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 8,
		},
	];

	const list4 = [
		{
			url: "https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 10,
		},
		{
			url: "https://i.pinimg.com/236x/8a/e2/b1/8ae2b1f094af8f87438fa952678620d3.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 11,
		},
		{
			url: "https://i.pinimg.com/550x/66/3c/2b/663c2baa9a97ac56fe9c22a0fe139386.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 12,
		},
		{
			url: "https://i.pinimg.com/550x/31/ed/67/31ed67ff40247db90463d949e07a5e1d.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 13,
		},
		{
			url: "https://i.pinimg.com/550x/88/5f/e7/885fe7827f8e5f5297c4c0168fd4514d.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 14,
		},
		{
			url: "https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 15,
		},
		{
			url: "https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 16,
		},
		{
			url: "https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 9,
		},

		{
			url: "https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 17,
		},
		{
			id: 1,
			url: "https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
		},
		{
			url: "https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 2,
		},
		{
			url: "https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 3,
		},
		{
			url: "https://i.pinimg.com/236x/16/7f/e6/167fe63d4a008f8957c8e9406953af1f.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 4,
		},
		{
			url: "https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 5,
		},
		{
			url: "https://i.pinimg.com/236x/81/df/69/81df699b25ca1242a796f51397263d1a.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 6,
		},
		{
			url: "https://i.pinimg.com/236x/86/5a/62/865a62ce02bb38bd88851269a41959d1.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 7,
		},
		{
			url: "https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
			alt: "image",
			comments: [
				{
					id: 1,
					comment: "comment1",
					user_id: 1,
				},
			],
			likes: [
				{
					id: 1,
					user_id: 1,
				},
			],
			id: 8,
		},
	];

	return (
		<div className="home_page_container">
			<div>
				{list1.map((ele) => {
					return <ImageCard key={ele.id} image={ele.url} id={ele.id} />;
				})}
			</div>
			<div>
				{list2.map((ele) => {
					return <ImageCard image={ele.url} id={ele.id} />;
				})}
			</div>
			<div>
				{list3.map((ele) => {
					return <ImageCard image={ele.url} id={ele.id} />;
				})}
			</div>
			<div>
				{list4.map((ele) => {
					return <ImageCard image={ele.url} id={ele.id} />;
				})}
			</div>
			<div>
				{list1.map((ele) => {
					return <ImageCard image={ele.url} id={ele.id} />;
				})}
			</div>
		</div>
	);
};
