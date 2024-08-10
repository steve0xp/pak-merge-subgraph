import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AlphaMassUpdate,
  Approval,
  ApprovalForAll,
  ConsecutiveTransfer,
  MassUpdate,
  Transfer
} from "../generated/Merge/Merge"

export function createAlphaMassUpdateEvent(
  tokenId: BigInt,
  alphaMass: BigInt
): AlphaMassUpdate {
  let alphaMassUpdateEvent = changetype<AlphaMassUpdate>(newMockEvent())

  alphaMassUpdateEvent.parameters = new Array()

  alphaMassUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  alphaMassUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "alphaMass",
      ethereum.Value.fromUnsignedBigInt(alphaMass)
    )
  )

  return alphaMassUpdateEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createConsecutiveTransferEvent(
  fromTokenId: BigInt,
  toTokenId: BigInt,
  fromAddress: Address,
  toAddress: Address
): ConsecutiveTransfer {
  let consecutiveTransferEvent = changetype<ConsecutiveTransfer>(newMockEvent())

  consecutiveTransferEvent.parameters = new Array()

  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "fromTokenId",
      ethereum.Value.fromUnsignedBigInt(fromTokenId)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "toTokenId",
      ethereum.Value.fromUnsignedBigInt(toTokenId)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam(
      "fromAddress",
      ethereum.Value.fromAddress(fromAddress)
    )
  )
  consecutiveTransferEvent.parameters.push(
    new ethereum.EventParam("toAddress", ethereum.Value.fromAddress(toAddress))
  )

  return consecutiveTransferEvent
}

export function createMassUpdateEvent(
  tokenIdBurned: BigInt,
  tokenIdPersist: BigInt,
  mass: BigInt
): MassUpdate {
  let massUpdateEvent = changetype<MassUpdate>(newMockEvent())

  massUpdateEvent.parameters = new Array()

  massUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIdBurned",
      ethereum.Value.fromUnsignedBigInt(tokenIdBurned)
    )
  )
  massUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIdPersist",
      ethereum.Value.fromUnsignedBigInt(tokenIdPersist)
    )
  )
  massUpdateEvent.parameters.push(
    new ethereum.EventParam("mass", ethereum.Value.fromUnsignedBigInt(mass))
  )

  return massUpdateEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
