'use server'
import OpenAI from "openai"


export async function createAIModel(reports: string[]) {
	const openai = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY
	})

	try {
		const reportCompletion = await openai.chat.completions.create({
			model: "gpt-4o-mini",
			messages: [
				{
					role: "system",
					content: [{
						type: "text",
						text: `Eres un asistente que actua como un universitario que ha terminado sus estancias profesionales.
									Crea un resumen de los siguientes textos utilizando el mismo lenguaje de los textos originales o un poco más formal.
									De ser necesario y posible, dividelo en párrafos pero no por etapas.
									Sólo utiliza la palabra de estancias profesionales para referirte a esta actividad.
									No dividas el resumen en etapas ni fases, simplemente en actividades realizadas.`
					}]
				},
				{
					role: "user",
					content: reports.join("\n\n")
				}
			],
		})

		return {
			message: reportCompletion.choices[0].message.content
		}
	} catch (err) {
		console.error(err)
		return {
			error: 'Ocurrió un error al ejecutar la petición'
		}
	}

}