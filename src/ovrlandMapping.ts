import { Transfer } from "../generated/OVRLand/OVRLand"
import { OVRTransferEntity } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = OVRTransferEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new OVRTransferEntity(event.transaction.from.toHex())
  }

  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  // Entities can be written to the store with `.save()`
  entity.save()
}
