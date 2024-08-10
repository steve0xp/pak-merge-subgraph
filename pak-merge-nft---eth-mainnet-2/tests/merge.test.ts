import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { AlphaMassUpdate } from "../generated/schema"
import { AlphaMassUpdate as AlphaMassUpdateEvent } from "../generated/Merge/Merge"
import { handleAlphaMassUpdate } from "../src/merge"
import { createAlphaMassUpdateEvent } from "./merge-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let tokenId = BigInt.fromI32(234)
    let alphaMass = BigInt.fromI32(234)
    let newAlphaMassUpdateEvent = createAlphaMassUpdateEvent(tokenId, alphaMass)
    handleAlphaMassUpdate(newAlphaMassUpdateEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AlphaMassUpdate created and stored", () => {
    assert.entityCount("AlphaMassUpdate", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AlphaMassUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "AlphaMassUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "alphaMass",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
