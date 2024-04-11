import { MetadataRoute } from "next"


export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://herramientasutm.com',
			lastModified: new Date()
		},
		{
			url: 'https://herramientasutm.com/servicio_social',
			lastModified: new Date()
		},
		{
			url: 'https://herramientasutm.com/practicas_profesionales',
			lastModified: new Date()
		},
		{
			url: 'https://herramientasutm.com/extraordinario',
			lastModified: new Date()
		}
	]
}