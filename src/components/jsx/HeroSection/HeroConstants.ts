import heroImage from '../../../assets/png/heroImage.webp'
import heroMotion from '../../../assets/png/heroMotion.webp'
import heroTexture from '../../../assets/png/heroTexture.webp'
import texture1 from '../../../assets/png/texture-1.webp'
import texture2 from '../../../assets/png/texture-2.webp'
import texture3 from '../../../assets/png/texture-3.webp'
import motion1 from '../../../assets/png/motion-1.webp'
import motion2 from '../../../assets/png/motion-2.webp'
import motion3 from '../../../assets/png/motion-3.webp'
import geometry1 from '../../../assets/png/geometry-1.webp'
import geometry2 from '../../../assets/png/geometry-2.webp'
import geometry3 from '../../../assets/png/geometry-3.webp'

export const HeroConstants = [
	{
		type: 'default',
		subtitle: 'End-to-end tools for 3D video game art',
		title: 'AI Assisted Game Development',
		buttonText: 'Generate now for free',
		imageUrl: heroImage.src,
		images: [],
		className: '',
		translations: [],
		mainInterval: [0, 0.02],
	},
	{
		type: 'meshes',
		title: 'Geometry Generator',
		subtitle: 'Quickly generate 3D meshes from text or images.',
		buttonText: 'Generate now for free',
		imageUrl: heroImage.src,
		images: [geometry2.src, geometry1.src, geometry3.src],
		className: 'meshes',
		mainInterval: [0.02, 0.32],
		translations: [
			{
				x: '-240px',
				y: '-100px',
				scale: 1.1,
			},

			{
				x: '-230px',
				y: '250px',
				scale: 1,
			},

			{
				x: '160px',
				y: '-130px',
				scale: 1,
			},
		],
	},
	{
		type: 'materials',
		title: 'Texture Generator',
		subtitle: 'Create high resolution UV-unwrapped materials',
		buttonText: 'Generate now for free',
		imageUrl: heroTexture.src,
		images: [texture1.src, texture3.src, texture2.src],
		className: 'materials',
		mainInterval: [0.25, 0.68],
		translations: [
			{
				x: '-230px',
				y: '-100px',
				scale: 1.4,
			},
			{
				x: '-200px',
				y: '330px',
				scale: 1.4,
			},
			{
				x: '190px',
				y: '-110px',
				scale: 1.2,
			},
		],
	},
	{
		type: 'motions',
		title: '3D Animator',
		subtitle: 'Bring characters to life with auto-rigging and retargeting tools.',
		buttonText: 'Generate now for free',
		imageUrl: heroMotion.src,
		images: [motion1.src, motion2.src, motion3.src],
		className: 'motions',
		mainInterval: [0.65, 1],
		translations: [
			{
				x: '0px',
				y: '-150px',
				scale: 1.4,
			},
			{
				x: '-230px',
				y: '160px',
				scale: 1.6,
			},
			{
				x: '200px',
				y: '160px',
				scale: 1.5,
			},
		],
	},
]
