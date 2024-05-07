'use client'

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal"
import { Button } from "@nextui-org/button"
import { useUtilitiesStore } from "../store/utilities"


export const Disclaimer = () => {

	const { disclaimerAccepted, acceptDisclaimer } = useUtilitiesStore()

	if (disclaimerAccepted) return null

	return (
		<Modal
			size="lg"
			defaultOpen={true}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="text-2xl mb-3">Mensaje</ModalHeader>
						<ModalBody>
							<p>
								Herramientas UTM es un proyecto de ayuda para la <b>generación de documentación y seguimiento</b> para estancias profesionales y servicio social.
								Por lo que <b>no es una herramienta oficial</b>.
							</p>
							<p>
								Además, Herramientas UTM se actualiza constantemente y <b>no almacena la información</b> introducida por los usuarios.
							</p>
						</ModalBody>
						<ModalFooter className="mt-2">
							<Button
								color="primary"
								size="sm"
								onPress={() => {
									acceptDisclaimer()
									onClose()
								}}>
								No mostrar de nuevo
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)

}